"use client";
import {useRouter} from "next/navigation";
import {useEffect, useState} from 'react';

import Card from "@/components/card";
import { useSelector, useDispatch } from "react-redux";
import { MainContainer } from "./styles";
import Pagination from "@/components/pagination";
import { fetchAgents } from "@/redux/slices/agentsListSlice";
export default function Detail() {
    const router = useRouter()
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1);
    const data = useSelector((state:any) => state.agentsList)
    const agentData = data.agents.data

    useEffect(() => {
        if (!agentData)
            dispatch(fetchAgents())
    }, [])

    const onPageChange = (page:number) => {
        setCurrentPage(page);
    };
    const paginate = (items:any, pageNumber:number, pageSize:number) => {
        const startIndex = (pageNumber - 1) * pageSize;
        return items.slice(startIndex, startIndex + Number(pageSize));
    };
    return (
        <main>
            {(agentData &&
                <MainContainer>
                    {paginate(agentData,currentPage,process.env.NEXT_PUBLIC_PAGINATION_LIMIT).map((item: {
                        displayName: string,
                        killfeedPortrait: string,
                        uuid: string,
                        fullPortrait: string,
                        background:string,
                    }, index: number) => (
                        <Card item={item} key={index}/>
                    ))}
                </MainContainer>

            )}
            <Pagination
                data={agentData?.length}
                currentPage={currentPage}
                pageSize={process.env.NEXT_PUBLIC_PAGINATION_LIMIT}
                onPageChange={onPageChange}
            />
        </main>
    );
}

"use client";
import {useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store"
import { MainContainer } from "@/app/styles";
import Pagination from "@/components/pagination";
import Info from "@/components/info";
import Card from "@/components/card";
import { fetchAgents } from "@/redux/slices/agentsListSlice";
export default function AgentList() {
    const dispatch = useDispatch<AppDispatch>()
    const [currentPage, setCurrentPage] = useState(1);
    const data = useSelector((state:any) => state.agentsList)
    const agentData = data.agents.data?.filter((char:any) => char.isPlayableCharacter)

    useEffect(() => {
        if (!agentData)
            dispatch(fetchAgents())
    }, [])

    const onPageChange:(page:number) => void = (page) => {
        setCurrentPage(page);
    };
    const paginate = (items:any, pageNumber:number, pageSize:number) => {
        const startIndex = (pageNumber - 1) * pageSize;
        return items.slice(startIndex, startIndex + Number(pageSize));
    };
    return (
        <main>
            {data.loading && <Info message='Loading...' />}
            {data.error && <Info message={data.error}/>}
            {(agentData &&
                <div>
                    <MainContainer>
                        {paginate(agentData,currentPage,Number(process.env.NEXT_PUBLIC_PAGINATION_LIMIT)).map((item: {
                            displayName: string,
                            killfeedPortrait: string,
                            uuid: string,
                            fullPortrait: string,
                            background:string,
                        }, index: number) => (
                            <Card item={item} key={index}/>
                        ))}
                    </MainContainer>
                    <Pagination
                        data={agentData?.length}
                        currentPage={currentPage}
                        pageSize={Number(process.env.NEXT_PUBLIC_PAGINATION_LIMIT)}
                        onPageChange={onPageChange}
                    />
                </div>
            )}
        </main>
    );
}

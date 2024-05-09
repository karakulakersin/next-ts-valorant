"use client"
import {useEffect} from "react";
import { PageCard, ImageContainer, CharacterName, Image,
    ContentContainer,SubCard,
    SubCardTitle,SubCardContent,SkillItem,SkillImage
    ,SkillName,SkillInfos,SkillDescription } from './styles';
import {useDispatch, useSelector} from "react-redux";
import { AppDispatch } from "@/redux/store"

import { fetchAgentDetail } from "@/redux/slices/agentDetailSlice";
import Info from "@/components/info";
export default function Detail({
    params,
}: {
    params:{
        detail: string }
}) {
    const dispatch = useDispatch<AppDispatch>()
    const detail = useSelector((state:any) => state.agentDetail)
    const data = detail.data.data

    useEffect(() => {
        dispatch(fetchAgentDetail(params.detail))
    }, [])
    return (
        <div>
            {detail.loading && <Info message='Loading...' />}
            {detail.error && <Info message={detail.error}/>}
            {data && !detail.loading &&
                <PageCard $background={data.background}>
                    <ImageContainer>
                        <CharacterName>{data.displayName}</CharacterName>
                        <Image src={data.fullPortrait}/>
                    </ImageContainer>
                    <ContentContainer>
                        <SubCard>
                            <SubCardTitle>Rol ve Görevi</SubCardTitle>
                            <SubCardContent>{data.role.displayName}. {detail.data.data.role.description}</SubCardContent>
                        </SubCard>
                        <SubCard>
                            <SubCardTitle>Açıklama</SubCardTitle>
                            <SubCardContent>{data.description}</SubCardContent>
                        </SubCard>
                        <SubCard>
                            <SubCardTitle>Yetenekler</SubCardTitle>
                            {data.abilities.map((item: any, index: number) => (
                                <SkillItem key={index}>
                                    <SkillImage src={item.displayIcon} $color={data.backgroundGradientColors[0]}/>
                                    <SkillInfos>
                                        <SkillName>{item.displayName}</SkillName>
                                        <SkillDescription>{item.description}</SkillDescription>
                                    </SkillInfos>
                                </SkillItem>
                            ))}
                        </SubCard>
                    </ContentContainer>
                </PageCard>
            }
        </div>
    );
}

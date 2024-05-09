import Image from 'next/image';
import { Wrapper, WrapperItem, WrapperItems, Title} from "@/components/card/styles";
import {useRouter} from "next/navigation";
import { TCardProps } from "@/types/components/cardTypes";

export default function Card(props:TCardProps) {
    const router = useRouter()

    return (
        <>
            {props.item.fullPortrait &&
                <Wrapper>
                    <WrapperItems>
                        <WrapperItem onClick={() => router.push('/' + props.item.uuid)}>
                            <Image src={props.item.fullPortrait} width={350} height={350} alt='ValorantImages'/>
                            <Title>
                                {props.item.displayName}
                            </Title>
                        </WrapperItem>
                    </WrapperItems>
                </Wrapper>
            }
        </>
    )
}
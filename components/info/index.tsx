import { MessageContainer, StyledErrorIcon, StyledInfoIcon } from "@/components/info/styles";
import { TInfoProps } from "@/types/components/infoTypes";

export default function Error(props:TInfoProps) {

    return (
        <main>
            <MessageContainer>
                {props.message === 'Loading...' ?  <StyledInfoIcon /> : <StyledErrorIcon/>}
                {props.message}
            </MessageContainer>
        </main>
    );
}

import styled from "styled-components";
import {BiSolidErrorCircle} from "react-icons/bi";
import {AiOutlineReload} from "react-icons/ai";

export const MessageContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    padding: 20px;
    border: 1px solid #cccccc;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    max-width: 80%;
    text-align: center;
    align-items: center;
    display: flex;
`;
export const StyledErrorIcon = styled(BiSolidErrorCircle)`
    width: 30px;
    height: auto;
    fill: red;
`;
export const StyledInfoIcon = styled(AiOutlineReload)`
    width: 30px;
    height: auto;
`;
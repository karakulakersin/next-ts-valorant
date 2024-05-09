import styled from "styled-components";
import { TStyledComponentProps } from "@/types/components/paginationTypes";

export const PaginationContainer = styled.ul`
    display: flex;
    justify-content: center;
    padding: 0;
    align-items: center;
    list-style: none;
`
export const PageLink = styled.div`
    cursor:pointer;
`
export const PageItem = styled.div<TStyledComponentProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    margin: 1rem;
    height: 3rem;
    border: 1px solid #eaeaea;
    border-radius: 0.5rem;
    cursor: pointer;
    ${({$active}) => $active && `
        background-color: #c7f458;`
    }
`
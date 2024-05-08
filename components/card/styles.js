import styled from "styled-components";

export const Title = styled.h1`
      font-size: 1.5em;
      text-align: center;
      color: #BF4F74;
    `;
export const Wrapper = styled.section`
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        margin: 0;
        padding: 0;
    `;
export const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;

`;

export const WrapperItems = styled.section`
        display: flex;
    
        padding: 1rem;
    `;
export const WrapperItem = styled.section`
    cursor: pointer;
        border-radius: 8px;
        box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
        background-size: cover;
        display: flex;
        flex-direction: column;
        overflow: hidden;`
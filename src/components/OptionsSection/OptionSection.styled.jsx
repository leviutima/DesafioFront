import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2% 16% 16% 14%;
    background-color: #F0F0F5;
`



export const ListContainer = styled.ul `
    display: flex;
    justify-content: space-between;
    gap: 60px;
`

export const LinkStyle = styled(Link)`
    text-decoration: none;
`

export const ListStyle = styled.li `
    color: #737380;
    text-decoration: none;
    list-style: none;
    font-size: 16px;
    line-height: 22px;
    font-weight: 400;
`
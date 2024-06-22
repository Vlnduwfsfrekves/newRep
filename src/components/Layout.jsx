import {Div,Line} from './App.styled'
import styled from "styled-components";
import { NavLink, Outlet } from "react-router-dom";
const StyledLink=styled(NavLink)`
    color: black;
    text-decoration:none;
    margin:0;
    padding:0;
    margin-left:20px;
    line-height:16px;
    letter-spacing:0.02em;
    &.active{
        color: orange;
    }
`
export const Layout=()=>{
    return(
    <>
        <Div>
            <StyledLink to='/'>Home</StyledLink>
            <StyledLink to='/movies'>Movies</StyledLink>
        </Div>
        <Line/>
        <Outlet></Outlet>
    </>
    )
}
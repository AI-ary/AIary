import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const BookMark = styled.div`
    width: 70px;
    height: 700px;
    z-index:80;
`
const StyledNavLink=styled(NavLink)`
    display: block;
    width: 65px;
    height: 43px;
    text-decoration: none;
    margin-bottom: 10px;
    font-size: 18px;
    border-radius: 0 5px 5px 0;
    text-align: center;
    line-height: 43px;
    color: black;
    border: 0.8px groove gray;
    border-left: none;
    font-weight: 400;
    font-family:Comic Sans MS;
    opacity:0.9;
    &:link {
      transition : 0.5s;
      text-decoration: none;
    }
    &:hover{
      color: gray;
    }
    &.active {
      color: white;
      font-weight: 700;
    }
`
function Bookmark(){
  return(
    <BookMark>
      <StyledNavLink to='/main' style={{background:'#80FF00'}}>Home</StyledNavLink> 
      <StyledNavLink to='/list' style={{background:'#FFE600'}}>List</StyledNavLink> 
      <StyledNavLink to='/write' state={{date:new Date()}} style={{background:'#0085FF'}}>Write</StyledNavLink> 
      <StyledNavLink to='/about' style={{background:'#FF0000'}}>About</StyledNavLink>
    </BookMark>)
}

export default Bookmark;
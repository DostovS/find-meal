import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import Search from './Components/Search';
import Category from './Components/Category';
import Pages from './Pages/Pages';

function App() {
  return (
    <div className="App">
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}> Delicious </Logo>
      </Nav>
      <Search />
      <Category />
      <Pages />
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

const Nav = styled.div`
  padding: 1rem 0rem;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

export default App;
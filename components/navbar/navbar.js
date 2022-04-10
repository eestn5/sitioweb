import React from 'react';
import Logo from './logo';
import Top from './topSec';
import Main from './Main';
import { SearchProvider } from '../../context/search';
const Navbar = ({ active }) => {
  return (
    <SearchProvider>
      <nav className="navbar">
        <Top />
        <Main active={active} />
      </nav>
    </SearchProvider>
  )
}
export default Navbar;
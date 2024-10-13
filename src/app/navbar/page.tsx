import React from 'react';
import Link from 'next/link';
import './navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">MyLogo</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/About">About</Link>
        </li>
        <li>
          <Link href="/Services">Services</Link>
        </li>
        <li>
          <Link href="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';
import React from 'react';
import logo from '../assets/logo.png';

function VoltBar() {
  return (
    <>
    <Navbar fluid rounded>
      <NavbarBrand href="/">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Volt Track</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">
          About
        </NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="/add-device">Device</NavbarLink>
      </NavbarCollapse>
    </Navbar>
    <hr className="h-px my-2 bg-gray-200 border-1 dark:bg-gray-800"/>
    </>
  );
}

export default VoltBar;


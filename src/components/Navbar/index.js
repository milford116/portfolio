import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav,Navbarcontainer,Navlogo,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink} from './Navigation';
const Navbar = ({toggle}) => {
    return (
        <>
       <Nav>
            <Navbarcontainer>
            <Navlogo to ="/">logo</Navlogo>
            <MobileIcon onClick={toggle}> 
                <FaBars/>
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="about">About</NavLinks>
                </NavItem>

                <NavItem>
                    <NavLinks to= "Services">Services</NavLinks>
                </NavItem>

                <NavItem>
                    <NavLinks to="contact">Contact</NavLinks>
                </NavItem>

                  
            </NavMenu>
             <NavBtn>
                <NavBtnLink to="/signin">Signin</NavBtnLink>
            </NavBtn>

            </Navbarcontainer>
            </Nav>
        </>
    )
}

export default Navbar

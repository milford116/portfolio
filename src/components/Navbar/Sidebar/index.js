import React from 'react'
import {SidebarContainer,Icon,CloseIcon,SidebarLink,SidebarRoute,SidebarWrapper,SidebtnWrap,SidebarMenu} from './SideBarelement';

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>

                    <SidebarLink to="contact" onClick={toggle}>
                        Contact me
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}> 
                        Services
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>
                        Sign up
                    </SidebarLink>
                </SidebarMenu>
                <SidebtnWrap>
                    <SidebarRoute to ='/signin'>Sign IN</SidebarRoute>
                </SidebtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar

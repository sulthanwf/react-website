import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrap,
  SidebarMenu,
  SidebarLink,
} from "./SidebarStyle";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrap>
        <SidebarMenu>
          <SidebarLink to="/about" activeStyle>
            About
          </SidebarLink>
          <SidebarLink to="/gallery" activeStyle>
            Gallery
          </SidebarLink>
          <SidebarLink to="/portfolio" activeStyle>
            Portfolio
          </SidebarLink>
          <SidebarLink to="/contact" activeStyle>
            Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrap>
    </SidebarContainer>
  );
};

export default Sidebar;

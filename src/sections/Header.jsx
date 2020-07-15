import React from "react";
import { SpacexLogo } from "../assets/SpacexLogo";
import { HeaderContainer, LogoContainer } from "../styledComponents";

const Header = () => (
  <HeaderContainer>
    <LogoContainer>
      <SpacexLogo />
    </LogoContainer>
  </HeaderContainer>
);

export default Header;

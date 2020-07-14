import React from "react";
import { SpacexLogo } from "../assets/SpacexLogo";
import { LoadingPlaceholder } from "../styledComponents";

const LoadingLogo = () => (
  <>
    <LoadingPlaceholder>
      <SpacexLogo />
    </LoadingPlaceholder>
  </>
);

export default LoadingLogo;

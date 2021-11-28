import React from "react";

import { BreakPoints } from "../_breakpoints";
import LG from "./lg";
import MD from "./md";
import HeroResponsive from "./scaffold";
import SM from "./sm";
import XL from "./xl";
import XS from "./xs";

const Hero = () => (
  <div>
    <HeroResponsive />
    {/* <BreakPoints.xl>
      <XL />
    </BreakPoints.xl>
    <BreakPoints.lg>
      <LG />
    </BreakPoints.lg>
    <BreakPoints.md>
      <MD />
    </BreakPoints.md>
    <BreakPoints.sm>
      <SM />
    </BreakPoints.sm>
    <BreakPoints.xs>
      <XS />
    </BreakPoints.xs> */}
  </div>
);

export default Hero;

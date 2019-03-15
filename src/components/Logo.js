import React, { Component } from "react";

import MainLogo from "../assets/icons/MainLogo";
import SkillsLogo from "../assets/icons/SkillsLogo";
import PortfolioLogo from "../assets/icons/PortfolioLogo";
import AboutLogo from "../assets/icons/AboutLogo";
import ContactLogo from "../assets/icons/ContactLogo";
import HomeLogo from "../assets/icons/HomeLogo";

class Logo extends Component {
  render() {
    switch (this.props.type) {
      case "main":
        return <MainLogo {...this.props} />;
      case "skills":
        return <SkillsLogo {...this.props} />;
      case "portfolio":
        return <PortfolioLogo {...this.props} />;
      case "about":
        return <AboutLogo {...this.props} />;
      case "contacts":
        return <ContactLogo {...this.props} />;
      case "home":
        return <HomeLogo {...this.props} />;
      default:
        return null;
    }
  }
}

export default Logo;

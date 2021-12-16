import React from "react";
import Logo from "./Logo";

const Welcome = () => {
  return (
    <div className={"banner"} style={{ minHeight: "100vh" }}>
      <Logo />
      <p style={{ fontSize: "smaller" }}>by Teodor Nilseng Danielsen</p>
    </div>
  );
};

export default Welcome;

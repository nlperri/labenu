import React from "react";
import { Copywrite } from "./Copywrite";
import { Social } from "./Social";
import logo from "../img/logo.png";

export default function Footer() {
  return (
    <footer>
      <Copywrite />
      <Social />
      <img src={logo} />
    </footer>
  );
}

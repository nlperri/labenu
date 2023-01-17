import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import { Garagem } from "./components/Garagem";

export default function App() {
  return (
    <div class="container">
      <Header />
      <Garagem />
      <Garagem />
      <Garagem />
      <Garagem />
      <Footer />
    </div>
  );
}

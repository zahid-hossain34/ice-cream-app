import React from "react";

import "./App.css";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Layout from "./components/layout/layout";
function App() {
  return (
    <Layout>
      <Header />
      <Body />
      <Footer />
    </Layout>
  );
}

export default App;

import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";

import "./App.css";

// import Home from "./components/Home";
import Main from "./components/main";
import Header from "./components/header";
import SideBar from "./components/sidebar";
class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Header />
          <Row>
            <Col md="3" className="border-right">
              <SideBar location="this" />
            </Col>
            <Col md="9">
              <Main />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

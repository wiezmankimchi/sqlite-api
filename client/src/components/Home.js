import React, { Component } from "react";
import { Jumbotron, Container, Nav, NavItem, NavLink } from "reactstrap";

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Container>
            <h1 className="display-4">Calibre Library</h1>
            <p className="lead">The eBook Management</p>
          </Container>
        </Jumbotron>
        <Nav pills>
          <NavItem>
            <NavLink href="\" active>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="\books" active>
              Books
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="\authors" active>
              Authors
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="\tags" active>
              Tags
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default Home;

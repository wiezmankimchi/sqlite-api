import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar sticky="top" className="p-3 mb-2 bg-light" light>
          <NavbarBrand href="/" className="mr-auto">
            Kimchi eBook Library
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav tabs>
              <NavItem>
                <NavLink href="/">Last 20 Additions</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Books</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Authors</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;

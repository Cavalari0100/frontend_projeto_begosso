import React from "react";
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav,NavLink, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, UncontrolledDropdown } from "reactstrap";
import { Link } from "react-router-dom";
function BarraDeTarefa() {
  return (
    <div>
      <Navbar
        color="light"
        expand="xl"
        fixed="top"
        light
      >
        <NavbarBrand href="/">
          Usina Iberia
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() { }} />
        <Collapse navbar>
          <Nav
            className="me-auto"
            navbar
          >
            <UncontrolledDropdown
              inNavbar
              nav
            >
              <DropdownToggle
                caret
                nav
              >
                Menu
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to={"/postagens"} style={{ textDecoration: 'none', color: 'black' }}>
                    Noticias Anteriores
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Login
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown
              inNavbar
              nav
            >
              <DropdownToggle
                caret
                nav
              >
                Setores
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to={"/hometelemetria"} style={{ textDecoration: 'none', color: 'black' }}>
                    Telemetria
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to={"/homebalanca"} style={{ textDecoration: 'none', color: 'black' }}>
                    Balança
                  </Link>
                </DropdownItem>
                {/* <DropdownItem>
                  <Link to={"/hometelemetria"} style={{ textDecoration: 'none', color: 'black' }}>
                    Qualidade
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to={"/hometelemetria"} style={{ textDecoration: 'none', color: 'black' }}>
                    TI
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to={"/hometelemetria"} style={{ textDecoration: 'none', color: 'black' }}>
                    PCTS
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to={"/hometelemetria"} style={{ textDecoration: 'none', color: 'black' }}>
                    P&D
                  </Link>
                </DropdownItem> */}
                <DropdownItem />
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}
export default BarraDeTarefa;
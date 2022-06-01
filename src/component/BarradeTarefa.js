import React, { useState } from "react";
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavLink, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, UncontrolledDropdown } from "reactstrap";
import { Link } from "react-router-dom";
function BarraDeTarefa(props) {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
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
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse navbar isOpen={!collapsed}>
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
                  <Link to={"/paginaemdesenvolvimento"} style={{ textDecoration: 'none', color: 'black' }}>
                    Noticias Anteriores
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link to={"/paginaemdesenvolvimento"} style={{ textDecoration: 'none', color: 'black' }}>
                    Login
                  </Link>
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
                <DropdownItem>
                  <Link to={"/homequalidade"} style={{ textDecoration: 'none', color: 'black' }}>
                    Qualidade
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to={"/homepcts"} style={{ textDecoration: 'none', color: 'black' }}>
                    PCTS
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
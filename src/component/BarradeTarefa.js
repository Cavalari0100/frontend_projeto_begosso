import React from "react";
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, UncontrolledDropdown } from "reactstrap";
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
            <NavItem>
              <Link to={"/cadastronoticia"}>
                Cadastrar Noticia
              </Link>
            </NavItem>
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
                  <Link to={"/postagens"}>
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
                  <Link to={"/hometelemetria"}>
                    Telemetria
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to={"/homebalanca"}>
                    Balança
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to={"/hometelemetria"}>
                    Qualidade
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to={"/hometelemetria"}>
                    TI
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to={"/hometelemetria"}>
                    PCTS
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to={"/hometelemetria"}>
                    P&D
                  </Link>
                </DropdownItem>
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
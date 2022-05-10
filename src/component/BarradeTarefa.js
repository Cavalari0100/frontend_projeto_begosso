import React from "react";
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink, UncontrolledDropdown } from "reactstrap";
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
              <NavLink href="/cadastronoticia">
                Cadastrar Noticia
              </NavLink>
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
                  <NavLink href="/postagens">
                    Noticias Anteriores
                  </NavLink>
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
                  <NavLink href="/hometelemetria">
                    Telemetria
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/homebalanca">
                    Balança
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/setores">
                    Qualidade
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/setores">
                    TI
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/setores">
                    PCTS
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/setores">
                    P&D
                  </NavLink>
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
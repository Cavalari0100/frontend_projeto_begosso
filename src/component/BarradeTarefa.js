import React, { useState } from "react";
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavLink, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, UncontrolledDropdown, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
function BarraDeTarefa(props) {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  function logout() {
    function garbageLocalStorage() {
      localStorage.removeItem('token')
    }

    return (
      <NavLink onClick={() => garbageLocalStorage()} href="/">Log Out</NavLink>
    )
  }
  function isLogin() {
    if (!props.user) {
      return (
        <NavLink href="/autenticacao">Login</NavLink>
      )
    }
  }
  function HandleUser() {
    if (props.user) {
      return (
        <Row>
          
          <Col><NavLink href="/cadastro/funcionario">Cadastro de Funcionario</NavLink></Col>
          <Col><NavLink href="/cadastro/funcionario">Cadastro de Funcionario</NavLink></Col>
          <Col><NavLink href="/cadastro/funcionario">Cadastro de Funcionario</NavLink></Col>
          <Col><NavLink style={{fontSize:"22px"}} >{props.user.email}</NavLink></Col>
        </Row>
      )
    }
  }
  const JoinPage = () => {
    props.history.push("/")
}
  return (
    <div>
      <Navbar
        color="light"
        expand="xl"
        fixed="top"
        light
      >
        <NavbarBrand href="/"><h1>Iberia</h1></NavbarBrand>
        
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
                <DropdownItem divider />
                <DropdownItem>
                  <NavItem href="/autenticacao">{isLogin()}</NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem onClick={() => localStorage.removeItem('login')}>{logout()}</NavItem>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link to={"/cadastro/funcionario"} style={{ textDecoration: 'none', color: 'black' }}>
                    Cadastro Funcionario
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
                  <Link to={"/paginaemdesenvolvimento"} style={{ textDecoration: 'none', color: 'black' }}>
                    Noticias Anteriores
                  </Link>
                </DropdownItem>
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
                <DropdownItem>
                  <Link to={"/hometi"} style={{ textDecoration: 'none', color: 'black' }}>
                    TI
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
            <NavItem>{HandleUser()}</NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}
export default BarraDeTarefa;
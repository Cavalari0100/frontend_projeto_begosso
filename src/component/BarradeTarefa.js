import React, { useState } from "react";
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavLink, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, UncontrolledDropdown, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
function BarraDeTarefa(props) {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  console.log(props.user)
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
          <Col><NavLink href="/paineldecadastros/3q1rsod2fr02b2b7nfemxntq3d3d">Ferramentas</NavLink></Col>
          <Col><p style={{paddingTop:'4px' , fontSize: "20px" , color:'green'}}>{props.user.email}</p></Col>
          <Col><NavbarText onClick={() => localStorage.removeItem('login')}>{logout()}</NavbarText></Col>
        </Row>
      )
    }
  }
  const attPage = (e) => {
    window.location.reload();
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
                <DropdownItem>
                  <NavItem href="/autenticacao">{isLogin()}</NavItem>
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
                  <Link to={"/hometelemetria"} style={{ textDecoration: 'none', color: 'black' }} >
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
                  <Link to={"/hometi"} style={{ textDecoration: 'none', color: 'black' }}>
                    TI
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to={"/homerh"} style={{ textDecoration: 'none', color: 'black' }}>
                    Recursos Humanos
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to={"/adocaoresponsavel"} style={{ textDecoration: 'none', color: 'black' }}>
                    Adoção
                  </Link>
                </DropdownItem>
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
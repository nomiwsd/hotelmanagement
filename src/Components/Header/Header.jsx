import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import Logo from '../Assets/logo.png'
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className='mainheader'>
       <Navbar className='navbard px-2 px-lg-5 m-0' collapseOnSelect expand="lg" variant="light">
      <Nav.Link className='fs-4' href="#home">
        <img src={Logo} alt="fg" className='logoimg' />
      </Nav.Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"  className=''/>
      <Navbar.Collapse id="responsive-navbar-nav" className='d-lg-flex justify-content-lg-end'>
        <Nav className="d-flex justify-content-center">
          <Nav.Link className='navlinks' href="#features">Home</Nav.Link>
          <Nav.Link className='navlinks' href="#About us">Recipes</Nav.Link>
          <Nav.Link className='navlinks' ><Link to='./Order'>Orders</Link></Nav.Link>
          <Nav.Link className='navlinks' href="#partners">About Us</Nav.Link>
          <Nav.Link className='navlinks' href="#Contactus">Contact Us</Nav.Link>

          <div className="row m-0 p-0 d-flex justify-content-lg-between justify-content-center">
          <div class="site-menu-btns d-flex"><div>
            <Link to='../Login' className='submitbtn p-2 my-2 mx-2'>Sign In</Link>
            <Link to='../Signup'className='submitbtn p-2 my-2'>Sign Up</Link>
            </div><div></div></div>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    </div>
  )
}

export default Header

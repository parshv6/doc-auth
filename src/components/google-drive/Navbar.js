import React from 'react'
import {Navbar, Nav,Button} from "react-bootstrap" 
import {Link} from "react-router-dom"



function NavbarComponent() {
    return (
      <div>
        <Nav style={{height:'90px',backgroundColor:"#e1e5ea"}} className="border border-white rounded navbar navbar-light p-20 pt-20">
<div className="container-fluid">
  <Button as={Link} to="/" className="btn btn-info btn-lg rounded justify-content-center" style={{marginLeft:"45%"}} variant="success">
DOC VAULT
  </Button>{""}
  <Button as={Link} to="/user"  className="rounded-circle" style={{marginRight:"20px"}} variant="secondary">
Profile
  </Button>{""}
</div>
        </Nav> 
      </div>
    )
}

export default NavbarComponent


























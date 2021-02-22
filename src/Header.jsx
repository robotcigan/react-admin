import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Navbar bg="light" variant="light">
      <div className="container">
        {/* <Navbar.Brand href="/">Админка</Navbar.Brand> */}
        <Link className="navbar-brand" to="/">Админка</Link>
        <Nav className="mr-auto">
          {/* <Nav.Link href="#home">Home</Nav.Link> */}
          <Link className="nav-link" to="/">Посты</Link>
          <Link className="nav-link" to="/create-post">Создать пост</Link>
          {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        </Nav>
      </div>
    </Navbar>
  )
}
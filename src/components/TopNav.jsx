import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import styles from '../assets/css/TopNav.module.css';

const TopNav = () => {
  return (
    <Navbar className={styles.nav} expand="sm">
      <Container fluid>
        <Link className={styles.brand} to="/">
          Sample Logo
        </Link>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse className={styles.collapse} id="navbar">
          <Nav>
            <Link to="/" className={styles.link}>
              Home
            </Link>
            <Link to="/shop" className={styles.link}>
              Shop
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;

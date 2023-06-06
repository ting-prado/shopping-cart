import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/shared/topNav.css";

const TopNav = () => {
	return (
		<Navbar expand="sm">
			<Container fluid>
				<Link className="brand" to="/">
					Sample Logo
				</Link>
				<Navbar.Toggle aria-controls="navbar" />
				<Navbar.Collapse id="navbar">
					<Nav>
						<Link to="/" className="link">
							Home
						</Link>
						<Link to="/shop/smartphones" className="link">
							Shop
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default TopNav;

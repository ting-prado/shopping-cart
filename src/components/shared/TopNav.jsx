import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import "../../styles/shared/topNav.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import ShoppingCart from "./ShoppingCart";

const TopNav = () => {
	const cartCount = useSelector((state) => state.cartCount);
	const [show, setShow] = useState(false);

	const toggleShow = () => setShow(!show);

	return (
		<>
			<Navbar expand="sm">
				<Container fluid>
					<Navbar.Toggle aria-controls="navbar" />
					<Navbar.Collapse id="navbar">
						<Nav>
							<Link to="/" className="link">
								Home
							</Link>
							<Link to="/shop/smartphones" className="link">
								Shop
							</Link>
							<button
								onClick={toggleShow}
								className="cart-cont position-relative"
							>
								<BsBag />
								<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">
									{cartCount}
								</span>
							</button>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Offcanvas placement="end" scroll={true} show={show} onHide={toggleShow}>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Items in your bag</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<ShoppingCart />
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
};

export default TopNav;

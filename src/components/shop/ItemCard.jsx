import { Card } from "react-bootstrap";
import { BsFillStarFill } from "react-icons/bs";

const ItemCard = ({ item }) => {
	return (
		<Card className="card col-12 col-md-6 col-lg-4">
			<Card.Body className="d-flex flex-column justify-content-end align-items-center">
				<Card.Img
					className="mb-2"
					variant="top"
					src={item.images[0]}
					alt="product image"
				/>
				<Card.Title>{item.title}</Card.Title>
				<Card.Text>{item.description}</Card.Text>
				<div className="d-flex flex-column w-100">
					<div className="d-flex justify-content-between">
						<p className="m-0 p-0">${item.price}</p>
						<div className="d-flex align-items-center">
							<p className="m-0 p-0">Rating: {item.rating}</p>
							<BsFillStarFill />
						</div>
					</div>
					<p>Add to cart</p>
				</div>
			</Card.Body>
		</Card>
	);
};

export default ItemCard;

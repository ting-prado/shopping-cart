/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getProducts } from "../../redux/actions";

const ShopContents = () => {
	let location = useLocation();
	const dispatch = useDispatch();
	const { category } = useParams();
	const products = useSelector((state) => state.states.products);

	useEffect(() => {
		dispatch(getProducts(category));
	}, [location]);

	return (
		<div className="border border-primary">
			{products.map((product, idx) => (
				<p key={idx}>{product.title}</p>
			))}
		</div>
	);
};

export default ShopContents;

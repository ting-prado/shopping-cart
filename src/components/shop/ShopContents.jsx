/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getProducts } from "../../redux/actions";
import ItemCard from "./ItemCard";

const ShopContents = () => {
	let location = useLocation();
	const dispatch = useDispatch();
	const { category } = useParams();
	const products = useSelector((state) => state.products);

	useEffect(() => {
		dispatch(getProducts(category));
		console.log(products);
	}, [location]);

	return (
		<div className="border border-primary w-100 row m-0">
			{products.map((product, idx) => (
				<ItemCard key={idx} item={product} />
			))}
		</div>
	);
};

export default ShopContents;

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/actions";
import { Link, useLocation } from "react-router-dom";
import "../../styles/shop/shopNav.css";

const ShopNav = () => {
	let location = useLocation();
	const categories = useSelector((state) => state.categories);
	const dispatch = useDispatch();
	console.log(location.pathname === "/shop/smartphones");

	useEffect(() => {
		dispatch(getCategories());
	}, []);

	return (
		<nav className="shop-nav">
			<ul className="row justify-content-center gap-2">
				{categories.map((category, idx) => (
					<li className="col-auto col-sm-12" key={idx}>
						<Link
							to={`/shop/${category}`}
							className={
								location.pathname === `/shop/${category}` ? "active" : ""
							}
						>
							{category[0].toUpperCase() + category.slice(1)}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default ShopNav;

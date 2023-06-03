/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

const ShopNav = () => {
	const categories = useSelector((state) => state.states.categories);
	const dispatch = useDispatch();
	const Navigate = useNavigate();
	const [navs, setNavs] = useState([]);

	useEffect(() => {
		dispatch(getCategories());
		setNavs(
			categories.map((category) => ({
				name: category,
				path: `/shop/${category}`
			}))
		);
	}, []);

	return (
		<div className="border border-danger">
			<nav>
				<ul className="row">
					{navs.map((category, idx) => (
						<li
							className="col-auto col-sm-12"
							onClick={() => Navigate(category.path)}
							key={idx}
						>
							{category.name}
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default ShopNav;

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

const ShopNav = () => {
	const categories = useSelector((state) => state.categories);
	const dispatch = useDispatch();
	const Navigate = useNavigate();

	useEffect(() => {
		dispatch(getCategories());
	}, []);

	return (
		<div className="border border-danger">
			<nav>
				<ul className="row">
					{categories.map((category, idx) => (
						<li
							className="col-auto col-sm-12"
							onClick={() => Navigate(`/shop/${category}`)}
							key={idx}
						>
							{category}
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default ShopNav;

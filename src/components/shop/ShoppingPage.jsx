import ShopNav from "./ShopNav";
import ShopContents from "./ShopContents";

const ShoppingPage = () => {
	return (
		<div className="border d-flex flex-column flex-sm-row">
			<ShopNav />
			<ShopContents />
		</div>
	);
};

export default ShoppingPage;

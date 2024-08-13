import beerIcon from "../assets/icons/beer.svg";
import wineIcon from "../assets/icons/wine.svg";
import drinkIcon from "../assets/icons/drink.svg";

import classes from "./beverageDisplay.module.css";

export default function BeverageDisplay({ drink }) {
	const { sort, price } = drink;

	// Determine the correct icon based on the drink sort
	const getIcon = (sort) => {
		switch (sort) {
			case "beer":
				return beerIcon;
			case "wine":
				return wineIcon;
			case "drink":
				return drinkIcon;
			default:
				return drinkIcon; // default icon if no match
		}
	};

	return (
		<div className={classes.flexRow}>
			<img src={getIcon(sort)} alt={`An icon showing a ${sort}`} />
			<p>{price} kr</p>
		</div>
	);
}

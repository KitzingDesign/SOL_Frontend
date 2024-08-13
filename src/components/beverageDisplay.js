import sunIcon from "../assets/icons/sun.svg";

import classes from "./beverageDisplay.module.css";

export default function BeverageDisplay({ drink }) {
	return (
		<div className={classes.flexRow}>
			<img src={sunIcon} alt="An icon showing a sun" />
			<p>20kr</p>
		</div>
	);
}

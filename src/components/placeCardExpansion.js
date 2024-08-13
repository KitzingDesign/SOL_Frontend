import { motion } from "framer-motion";
import Divider from "@mui/material/Divider";
import { forwardRef } from "react";

import classes from "./placeCardExpansion.module.css";
import sunIcon from "../assets/icons/sun.svg";
import BeverageDisplay from "./beverageDisplay";

export default function PlaceCardExpansion({ data }) {
	//All settings for the expand automation
	const animated = {
		layout: "position",
		animate: { opacity: 1 },
		transition: { delay: 0.3 },
		initial: { opacity: 0 },
	};

	//Added to apply motion to divider
	const divider = forwardRef((props, ref) => <Divider ref={ref} />);
	const MotionDivider = motion(divider);

	return (
		<motion.div {...animated}>
			<div className={classes.headerContainer}>
				<MotionDivider variant="middle" />
				<h2 className={classes.title}>
					{data.open
						? "En svalkande bärs på en varm uteservering"
						: "Lite väl tidigt för en bärs nu ..?"}
				</h2>
				<div>
					<div className={classes.graph}></div>
				</div>
			</div>
			<div className={`${classes.flexRow} ${classes.lowerContainer}`}>
				<div className={classes.lowerTextContainer}>
					<div>
						<div className={classes.flexRow}>
							<img {...animated} src={sunIcon} alt="An icon showing a sun" />

							<p>{data.open ? `Stänger XX.XX` : `Öppnar XX.XX`}</p>
						</div>
						<div className={classes.flexRow}>
							<img src={sunIcon} alt="An icon showing a sun" />
							<p {...animated}>Enorm uteservering</p>
						</div>
					</div>
					<div className={`${classes.flexColumn} `}>
						<p {...animated}>Här var det dyrt</p>
						<BeverageDisplay />
						<BeverageDisplay />
						<BeverageDisplay />
					</div>
				</div>
				<div>
					<div className={classes.map}></div>
				</div>
			</div>
		</motion.div>
	);
}

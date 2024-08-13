import { motion } from "framer-motion";
import Divider from "@mui/material/Divider";
import { forwardRef } from "react";

import classes from "./placeCardExpansion.module.css";
import tableIcon from "../assets/icons/table.svg";
import watchIcon from "../assets/icons/watch.svg";
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
							<img src={watchIcon} alt="An icon showing a watch" />

							<p>{data.open ? `Stänger XX.XX` : `Öppnar XX.XX`}</p>
						</div>
						<div className={classes.flexRow}>
							<img src={tableIcon} alt="An icon showing a table" />
							<p>Enorm uteservering</p>
						</div>
					</div>
					<div className={`${classes.flexColumn} `}>
						<p>Här var det dyrt</p>
						<BeverageDisplay drink={{ sort: "beer", price: 25 }} />
						<BeverageDisplay drink={{ sort: "wine", price: 30 }} />
						<BeverageDisplay drink={{ sort: "drink", price: 20 }} />
					</div>
				</div>
				<div>
					<div className={classes.map}></div>
				</div>
			</div>
		</motion.div>
	);
}

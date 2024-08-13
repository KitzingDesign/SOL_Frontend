import { useState } from "react";
import { motion } from "framer-motion";

import classes from "./placeCard.module.css";
import chevron from "../assets/icons/chevron.svg";
import sunIcon from "../assets/icons/sun.svg";
import PlaceCardExpansion from "./placeCardExpansion";

export default function PlaceCard({ data }) {
	const [isExpanded, setIsExpanded] = useState(false);

	function toggleExpand() {
		setIsExpanded((prev) => !prev);
	}

	return (
		<motion.div
			layout
			onClick={() => {
				setIsExpanded(!isExpanded);
			}}
			className={classes.container}
		>
			<motion.div layout="position" className={classes.innerContatiner}>
				<div className={classes.leftContainer}>
					<img
						className={classes.imgPlace}
						src={data.img}
						alt="Outside the place"
					/>
					<div className={classes.infoContainer}>
						<div>
							<div className={classes.titleRating}>
								<h2 className={classes.title}>{data.title}</h2>
								<p className={classes.smallText}>({data.rating})</p>
							</div>

							<p className={classes.smallText}>
								{data.distance} km - {data.area}
							</p>
							<div className={classes.openHours}>
								<img src={sunIcon} alt="An icon showing a sun" />{" "}
								<p className={classes.smallText}>
									{data.sun[0]}-{data.sun[1]}
								</p>
								<p className={classes.smallText}>
									{data.open ? "Open" : "Close"}
								</p>
							</div>
						</div>
					</div>
				</div>
				<button onClick={toggleExpand}>
					<motion.img
						animate={{ rotate: isExpanded ? 180 : 0 }}
						className={classes.Svg}
						src={chevron}
						alt="Icon with an arrow pointing downwards"
					/>
				</button>
			</motion.div>
			{isExpanded && <PlaceCardExpansion data />}
		</motion.div>
	);
}

import "./App.css";
import BottomBar from "./components/BottomBar";
import PlaceCard from "./components/placeCard";

const DUMMY_DATA = [
	{
		title: "Lilla Rancho",
		rating: 9.2,
		distance: 12,
		area: "Kaggeledstorget",
		sun: ["10.00", "17.00"],
		open: true,
		img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiCQvnzArXzlI9ACZ1NGaKvgVQ6wwz4Ll135FIPWOyn4Gm1zdHBYymxQeOlrep1A7mzkv_YwLZfJQARt3BjFbj6_o5oNc4FOXhBfGH-tBnYdNwMOUPEafwS7fHgYs-f0nE_4pc2M4Oac6k/s1600/IMG_20200503_174753664_HDR.jpg",
	},
];

function App() {
	return (
		<>
			<PlaceCard data={DUMMY_DATA[0]} />
			<BottomBar />
		</>
	);
}

export default App;

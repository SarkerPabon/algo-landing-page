import "./App.css";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Map from "./components/Map";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Summary from "./components/Summary";

function App() {
	return (
		<div>
			<Navbar />
			<Banner />
			<Products />
			<Summary />
			<Contact />
			<Map />
			<Footer />
		</div>
	);
}

export default App;

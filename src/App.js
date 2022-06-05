import "./App.css";
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
			<Products />
			<Summary />
			<Contact />
			<Map />
			<Footer />
		</div>
	);
}

export default App;

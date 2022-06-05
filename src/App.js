import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Map from "./components/Map";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
	return (
		<div>
			<Navbar />
			<Products />
			<Contact />
			<Map />
			<Footer />
		</div>
	);
}

export default App;

import "./App.css";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Map from "./components/Map";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div>
			<Navbar />
			<ContactForm />
			<Map />
			<Footer />
		</div>
	);
}

export default App;

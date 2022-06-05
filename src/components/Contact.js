import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import ContactForm from "./ContactForm";
import "./Map.css";

let DefaultIcon = L.icon({
	iconUrl: icon,
	shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Contact = () => {
	return (
		<div className='container mx-auto p-6'>
			<div className='flex flex-col md:flex-row justify-between'>
				<div className='w-100'>
					<ContactForm />
				</div>
				<div className='w-100'>
					<MapContainer
						center={[23.7934, 90.4064]}
						zoom={16}
						scrollWheelZoom={false}
					>
						<TileLayer
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
							url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
						/>
						<Marker position={[23.7934, 90.4064]}>
							<Popup>Manage</Popup>
						</Marker>
					</MapContainer>
				</div>
			</div>
		</div>
	);
};

export default Contact;

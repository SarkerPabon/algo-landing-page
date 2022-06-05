import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./Map.css";

let DefaultIcon = L.icon({
	iconUrl: icon,
	shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {
	return (
		<section className='card my-5 shadow-2xl container mx-auto p-6'>
			<h1 className='text-center my-3 text-4xl font-bold text-gray-500'>
				Our Location
			</h1>
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
		</section>
	);
};

export default Map;

import Head from "../../../components/Static/Head"
import GoogleMapReact from "google-map-react";
import "./map.css";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker"




const location = [
    {
      address: "Address 1",
      lat: 6.4318014,
      lng: 3.4884366,
    },
    {
      address: "Address 2",
      lat: 6.5234979,
      lng: 3.2909753,
    },
  ];

  
  const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  );


const DifferentLocation = () => {
  return (
    <div className="h-screen bg-teal-50/45 flex flex-col">
    <Head name="Location"/>
    <div className="map">
      <h2 className="map-h2">Check our the Nearest TCN WOMEN CENTRE WITHIN YOUR PLACE</h2>

      <div className="google-map">
       <GoogleMapReact
  bootstrapURLKeys={{ key: "AIzaSyDm-nNU75RlFZkTgLzKfZH-gR5G7gOr7kY" }}
  defaultCenter={location[0]}
  defaultZoom={9}>
  {location.map((loc) => (
    <LocationPin lat={loc.lat} lng={loc.lng} text={loc.address} />
  ))}
</GoogleMapReact>
      </div>
    </div>

  </div>
  )
}

export default DifferentLocation

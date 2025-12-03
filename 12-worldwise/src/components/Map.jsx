/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCities } from "../contexts/CitiesProvider";
import { useGeolocation } from "../hooks/useGeolocation";
import { useUrlPosition } from "../hooks/useUrlPosition";
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from "react-leaflet";
import Button from "./Button";
import styles from "./Map.module.css";


function flagemojiToPNG(flag){
    var countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt()).map(char => String.fromCharCode(char-127397).toLowerCase()).join('')
    return (<img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt='flag' />)
}


function Map() {
  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState([23, 87]);
  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation();

  const [mapLat, mapLng] = useUrlPosition();
  console.log(cities);

  useEffect(
    function () {
      if (mapLat && mapLng) setMapPosition([parseFloat(mapLat), parseFloat(mapLng)]);
    },
    [mapLat, mapLng]
  );

  useEffect(
    function () {
      if (geolocationPosition) setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
    },
    [geolocationPosition]
  );

  return (
    <div className={styles.mapContainer}>
      {!geolocationPosition && (
        <Button type="position" onClick={getPosition}>
          {isLoadingPosition ? "Loading..." : "Use your position"}
        </Button>
      )}
      <MapContainer center={mapPosition} zoom={6} scrollWheelZoom={true} className={styles.map}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

        {cities.map((city) => (
          <Marker position={[city.position.lat, city.position.lng]} key={city.id}>
            <Popup >
              <span>{flagemojiToPNG(city.emoji)}</span>
              <span>{city.cityName}</span>
              <span>{city.notes}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}

export default Map;

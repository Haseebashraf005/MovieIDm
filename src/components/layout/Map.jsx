import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { map } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';


const Map = () => {

    const markers = [
        { latitude: 51.505, longitude: -0.09, popupText: 'Marker 1' },
        { latitude: 51.515, longitude: -0.1, popupText: 'Marker 2' },
        { latitude: 51.525, longitude: -0.08, popupText: 'Marker 3' },
        { latitude: 51.535, longitude: -0.12, popupText: 'Marker 4' },
    ];



    return (
        <div className="container border gx-0" style={{ height: "80vh", border: "2px" }} id="map">
            <MapContainer center={[51.505, -0.09]} zoom={11} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                <MarkerClusterGroup
                chunkedLoading
                >
                    {markers.map((item, index) => (
                        <Marker key={index} position={[item.latitude, item.longitude]}>
                            <Popup>{item.popupText}</Popup>
                        </Marker>
                    ))}

                </MarkerClusterGroup>

                {/* <Marker position={[31.532096493794082, 74.35837694486622]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
            </MapContainer>
        </div>
    );
}

export default Map;

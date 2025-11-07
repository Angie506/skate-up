import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Fix default icon paths for Vite / modern bundlers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL(
    "leaflet/dist/images/marker-icon-2x.png",
    import.meta.url,
  ).href,
  iconUrl: new URL("leaflet/dist/images/marker-icon.png", import.meta.url).href,
  shadowUrl: new URL("leaflet/dist/images/marker-shadow.png", import.meta.url)
    .href,
});

export default function AarhusMap({ className = "", markers = [] }) {
  const center = [56.1629, 10.2039];
  const zoom = 12;

  const sample = markers.length
    ? markers
    : [
        [56.17, 10.19],
        [56.14, 10.21],
        [56.18, 10.24],
        [56.16, 10.2],
      ];

  // Wrap the MapContainer in a full-size div and provide a sensible minHeight so
  // the map has room to initialize inside the device preview (some parent
  // containers use aspect-ratio and can collapse to 0 height until rendered).
  return (
    // Always include the `.leaflet-map-wrapper` so CSS min-height applies.
    // Allow callers to pass an additional className (e.g. "map-image").
    <div className={`${className ? className + " " : ""}leaflet-map-wrapper`}>
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        className="leaflet-map"
        style={{ width: "100%", height: "100%" }}
        whenCreated={(map) => {
          // runtime debug so you can confirm the map mounted in the browser console
          // and inspect the map instance if needed.
          // eslint-disable-next-line no-console
          console.log("AarhusMap: mounted map instance:", map);
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {sample.map((pos, i) => (
          <Marker key={i} position={pos}>
            <Popup>Pin #{i + 1}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

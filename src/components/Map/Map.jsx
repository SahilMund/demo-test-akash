import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import styles from './Map.module.css'; 

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map('map').setView([12.959683, 77.747332], 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(mapRef.current); 

      const marker = L.marker([12.959683, 77.747332]).addTo(mapRef.current);
      marker.bindPopup("<b>McDonald's</b><br>Whitefield").openPopup();
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className={styles.mapContainer}>
      <div id='map' className={styles.map} ></div>
      <div className={styles.mapDetails}>
        <h2>McDonald's</h2>
        <h4>Bengaluru</h4>
        <p>62, Whitefield Main Rd, Prestige Ozone,<br /> Whitefield, Bengaluru, Karnataka 560066</p>
        <h4>Phone number</h4>
        <p>8041188997</p>
        <h4>Website</h4>
        <p>https://mcdelivery.co.in/restaurants/</p>
      </div>
    </div>
  );
};

export default Map;
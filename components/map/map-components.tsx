import React, { useEffect, useRef, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import L, { LatLngExpression } from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Default map and marker positions
const defaultMapPosition: LatLngExpression = [-6.2473944, 106.7973739]
const defaultMarkerPosition: LatLngExpression = [-6.2471738, 106.7988685]
const zoom = 17

// Create a custom icon instance
const marker = new L.Icon({
  iconUrl: '/marker.png', // Ensure this path is correct
  iconSize: [50, 50], // Adjust size as needed
  iconAnchor: [25, 50], // Adjust anchor point as needed
  popupAnchor: [0, -50], // Adjust popup anchor as needed
})

const myLocationMarker = new L.Icon({
  iconUrl: '/my-location.png', // Ensure this path is correct
  iconSize: [50, 50], // Adjust size as needed
  iconAnchor: [25, 50], // Adjust anchor point as needed
  popupAnchor: [0, -50], // Adjust popup anchor as needed
})

const MapComponent: React.FC = () => {
  const [myLocation, setMyLocation] = useState<LatLngExpression | null>(null)
  const [position, setPosition] = useState<LatLngExpression>(defaultMapPosition)
  const mapRef = useRef<any>(null)

  const _handleGetMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setMyLocation([latitude, longitude])
          if (mapRef.current) {
            mapRef.current.setView([latitude, longitude], 13) // Adjust zoom level as needed
          }
        },
        (error) => {
          console.error('Error getting location', error)
        }
      )
    } else {
      console.error('Geolocation is not supported by this browser.')
    }
  }

  const _handleResetLocation = () => {
    setPosition(defaultMapPosition)
    setMyLocation(null)
    if (mapRef.current) {
      mapRef.current.setView(defaultMapPosition, zoom) // Adjust zoom level as needed
    } else {
      console.error('Geolocation is not supported by this browser.')
    }
  }

  // Define the onClick handler
  const handleClick = (event: L.LeafletEvent) => {
    console.log('Marker clicked', event)
    // Additional logic for the click event
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setMyLocation([latitude, longitude])
        },
        (error) => {
          console.error('Error getting location', error)
        }
      )
    }
  }, [])

  return (
    <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
      <button
        onClick={_handleGetMyLocation}
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '10px',
          zIndex: 1000,
          height: '5%',
        }}
      >
        Get My Location
      </button>
      <button
        onClick={_handleResetLocation}
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          zIndex: 1000,
          height: '5%',
        }}
      >
        Reset Location
      </button>
      <MapContainer
        center={position}
        zoom={zoom}
        scrollWheelZoom={false}
        style={{ height: '100vh', width: '100%' }}
        ref={(map) => {
          mapRef.current = map
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={defaultMarkerPosition}
          icon={marker}
          eventHandlers={{
            click: handleClick, // Attach the onClick event handler
          }}
        >
          <Popup>Rekosistem HQ</Popup>
        </Marker>
        {myLocation && (
          <Marker
            position={myLocation}
            icon={myLocationMarker}
            eventHandlers={{
              click: handleClick, // Attach the onClick event handler
            }}
          >
            <Popup>This is your location</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  )
}

export default MapComponent

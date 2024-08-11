import React, { useEffect, useRef, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import L, { LatLngExpression } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { createIcon } from '../../utils'
import { wsLocation } from './map-component.type'

declare global {
  // @ts-ignore: interface Window is used implicitly
  interface Window {
    ReactNativeWebView: {
      postMessage: (message: string) => void;
    };
  }
}

// Default map and marker positions
const defaultMapPosition: LatLngExpression = [-6.2473944, 106.7973739]
const rekosistemHQLocation: LatLngExpression = [-6.2471738, 106.7988685]
const mBlocLocation: LatLngExpression = [-6.2431818, 106.7954079]
const papayaLocation: LatLngExpression = [-6.2451386, 106.7958215]
const zoom = 15

// Create a custom icon instance
const marker = createIcon('/ws-marker.png', [50, 60])
const myLocationMarker = createIcon('/marker.png')

const MapComponent: React.FC = () => {
  const [myLocation, setMyLocation] = useState<LatLngExpression | null>(null)
  const [position, setPosition] = useState<LatLngExpression>(defaultMapPosition)

  const [wsLocations] = useState<wsLocation[]>([
    {
      name: 'Rekosistem HQ',
      loc: rekosistemHQLocation,
    },
    {
      name: 'M Bloc Marker',
      loc: mBlocLocation,
    },
    {
      name: 'Papaya Fresh Gallery',
      loc: papayaLocation,
    },
  ])
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

    try {
      const eventData = {
        latlng: event.target.getLatLng(),
        type: event.type,
      }

      // Send event data back to React Native
      window.ReactNativeWebView.postMessage(JSON.stringify(eventData))
    } catch (e) {
      console.log("Error", e)
    }
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

  // =============== useEffect receiving message from native  =============== //
  useEffect(() => {
    window.addEventListener('message', (event) => {
      const message = event.data

      if (message) {
        if (message === 'getLocation') {
          _handleGetMyLocation()
        } else if (message === 'resetLocation') {
          _handleResetLocation()
        } else if (message.type === 'location') {
          const { latitude, longitude } = message
          setMyLocation([latitude, longitude])
          if (mapRef.current) {
            mapRef.current.setView([latitude, longitude], 13)
          }
        }
      }
    })
  }, [])
  // =============== useEffect receiving message from native  =============== //

  return (
    <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
      <button
        onClick={_handleGetMyLocation}
        style={{
          position: 'absolute',
          bottom: '25px',
          right: '10px',
          zIndex: 1000,
          height: '5%',
          padding: 0,
          border: 'none',
          background: 'none',
          cursor: 'pointer',
        }}
      >
        <img
          src="/my-location.png" // Path relative to the public directory
          alt="Get My Location"
          style={{
            width: '50px', // Adjust size as needed
            height: '50px', // Adjust size as needed
          }}
        />
      </button>
      <button
        onClick={_handleResetLocation}
        style={{
          position: 'absolute',
          bottom: '25px',
          left: '10px',
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
        {wsLocations?.map((ws, i) => (
          <Marker
            key={`${ws.name}-${i}`}
            position={ws.loc}
            icon={marker}
            eventHandlers={{
              click: handleClick, // Attach the onClick event handler
            }}
          >
            <Popup>{ws.name}</Popup>
          </Marker>
        ))}
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

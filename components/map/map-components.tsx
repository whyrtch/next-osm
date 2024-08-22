import React, { useEffect, useRef, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { LatLngExpression } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { createIcon } from '../../utils'
import { DropStationType } from './map-component.type'

declare global {
  // @ts-ignore: interface Window is used implicitly
  interface Window {
    ReactNativeWebView: {
      postMessage: (message: string) => void
    }
  }
}

// Default map and marker positions
const defaultMapPosition: LatLngExpression = [-6.2473944, 106.7973739]
// const rekosistemHQLocation: LatLngExpression = [-6.2471738, 106.7988685]
// const mBlocLocation: LatLngExpression = [-6.2431818, 106.7954079]
// const papayaLocation: LatLngExpression = [-6.2451386, 106.7958215]
const defaultZoom = 17

// Create a custom icon instance
const marker = createIcon('/ws-marker.png', [50, 60])
const myLocationMarker = createIcon('/marker.png')

const MapComponent: React.FC = () => {
  const [defaultPosition, setDefaultPosition] =
    useState<LatLngExpression>(defaultMapPosition)
  const [myLocation, setMyLocation] = useState<LatLngExpression | null>(null)
  const [position, setPosition] = useState<LatLngExpression>(defaultMapPosition)
  const [zoom, setZoom] = useState(defaultZoom)
  const [selectedWs, setSelectedWs] = useState<DropStationType | null>(null)

  const [wsLocations, setWsLocations] = useState<DropStationType[]>([])
  const mapRef = useRef<any>(null)

  const _handleGetMyLocation = () => {
    try {
      setPosition(defaultPosition)
      setMyLocation(defaultPosition)
      if (mapRef.current) {
        mapRef.current.setView(defaultPosition, zoom) // Adjust zoom level as needed
      }
    } catch (e) {
      console.log('Failed to trigger getLocation', e)
    }
  }

  // const _handleResetLocation = () => {
  //   setPosition(defaultPosition)
  //   // setMyLocation(null)
  //   if (mapRef.current) {
  //     mapRef.current.setView(defaultPosition, zoom) // Adjust zoom level as needed
  //   } else {
  //     console.error('Geolocation is not supported by this browser.')
  //   }
  // }

  // Define the onClick handler
  const handleClick = (ws: DropStationType) => {
    console.log('Marker clicked', ws.name)

    try {
      const eventData = {
        ws: ws,
        type: 'ws-clicked',
      }

      const loc = {
        lat: ws.latitude,
        lng: ws.longitude,
      }
      setPosition(loc)
      // setMyLocation(null)
      if (mapRef.current) {
        mapRef.current.setView(loc, zoom) // Adjust zoom level as needed
      }

      // Send event data back to React Native
      window.ReactNativeWebView.postMessage(JSON.stringify(eventData))
    } catch (e) {
      console.log('Error', e)
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

  // Listen for messages from React Native
  useEffect(() => {
    document.addEventListener('message', (event: any) => {
      const message = JSON.parse(event.data)

      if (message.type === 'location') {
        const { latlng, zoom } = message
        if (latlng) {
          const loc = latlng as [number, number]
          setMyLocation(loc)
          if (mapRef.current) mapRef.current.setView(loc, zoom) // Adjust zoom level as needed
        }
      }

      if (message.type === 'selectWsLocations') {
        const { ws, zoom } = message
        if (ws) {
          const loc = {
            lat: ws.latitude,
            lng: ws.longitude,
          }
          setSelectedWs(ws)
          if (mapRef.current) mapRef.current.setView(loc, zoom) // Adjust zoom level as needed
        }
      }

      if (message.type === 'wsLocations') {
        const { dropStations, coordinate, zoom } = message
        if (dropStations) setWsLocations(dropStations as DropStationType[])
        if (coordinate) {
          const loc = {
            lat: coordinate.latitude,
            lng: coordinate.longitude,
          }
          setPosition(loc)
          setDefaultPosition(loc)
          setMyLocation(loc)
          if (mapRef.current) {
            mapRef.current.setView(loc, zoom) // Adjust zoom level as needed
          }
        }
        if (zoom) setZoom(zoom as number)
      }
    })

    return () => {
      document.removeEventListener('message', () => {})
    }
  }, [])

  // =============== useEffect receiving message from native  =============== //
  useEffect(() => {
    window.addEventListener('message', (event) => {
      const message = event.data

      if (message) {
        if (message === 'getLocation') {
          _handleGetMyLocation()
        }
        // if (message === 'resetLocation') {
        //   _handleResetLocation()
        // }
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
          top: '25px',
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
      {/*<button*/}
      {/*  onClick={_handleResetLocation}*/}
      {/*  style={{*/}
      {/*    position: 'absolute',*/}
      {/*    top: '25px',*/}
      {/*    left: '60px',*/}
      {/*    zIndex: 1000,*/}
      {/*    height: '5%',*/}
      {/*    padding: 2,*/}
      {/*  }}*/}
      {/*>*/}
      {/*  Reset*/}
      {/*</button>*/}
      <MapContainer
        center={position}
        zoom={zoom}
        scrollWheelZoom={false}
        style={{ height: '100vh', width: '100%' }}
        ref={(map) => {
          mapRef.current = map
        }}
      >
        {/*OpenStreetMap (OSM) - Standard*/}
        {/*<TileLayer*/}
        {/*  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"*/}
        {/*  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'*/}
        {/*/>*/}

        {/*OpenTopMap*/}
        <TileLayer
          url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
          attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="https://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (CC-BY-SA)'
        />

        {/*Stamen Toner*/}
        {/*<TileLayer*/}
        {/*  url="https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"*/}
        {/*  attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under ODbL.'*/}
        {/*/>*/}

        {/*OpenStreetMap (OSM) - Black and White*/}
        {/*<TileLayer*/}
        {/*  url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"*/}
        {/*  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'*/}
        {/*/>*/}

        {/*MAPBOX TILE*/}
        {/*<TileLayer*/}
        {/*  url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=YOUR_ACCESS_TOKEN"*/}
        {/*  attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'*/}
        {/*  id="mapbox/streets-v11"*/}
        {/*/>*/}

        {/*Stamen Watercolor*/}
        {/*<TileLayer*/}
        {/*  url="https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"*/}
        {/*  attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>.'*/}
        {/*/>*/}

        {/*Esri World Imagery:*/}
        {/*<TileLayer*/}
        {/*  url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{x}/{y}"*/}
        {/*  attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'*/}
        {/*/>*/}

        {wsLocations?.map((ws, i) => (
          <Marker
            key={`${ws.name}-${i}`}
            position={{
              lat: ws.latitude,
              lng: ws.longitude,
            }}
            icon={marker}
            eventHandlers={{
              click: () => handleClick(ws), // Attach the onClick event handler
            }}
          >
            <Popup>{ws.name}</Popup>
          </Marker>
        ))}
        {selectedWs && (
          <Marker
            position={{
              lat: selectedWs.latitude,
              lng: selectedWs.longitude,
            }}
            icon={marker}
            eventHandlers={{
              click: () => handleClick(selectedWs), // Attach the onClick event handler
            }}
          >
            <Popup>{selectedWs.name}</Popup>
          </Marker>
        )}
        {myLocation && (
          <Marker position={myLocation} icon={myLocationMarker}>
            <Popup>This is your location</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  )
}

export default MapComponent

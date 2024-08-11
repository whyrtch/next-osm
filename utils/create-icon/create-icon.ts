import L from 'leaflet'

export const createIcon = (iconUrl: string, iconSize?: [number, number]) => {
  return new L.Icon({
    iconUrl: iconUrl, // Ensure this path is correct
    iconSize: iconSize ? iconSize : [50, 50], // Adjust size as needed
    iconAnchor: [25, 50], // Adjust anchor point as needed
    popupAnchor: [0, -50], // Adjust popup anchor as needed
  })
}

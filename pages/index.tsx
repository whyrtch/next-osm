import React from 'react'
import dynamic from 'next/dynamic'

// Dynamically import the MapComponent with ssr: false
const DynamicMapComponent = dynamic(
  () => import('../components/map/map-components'),
  { ssr: false }
)

export default function Home() {
  return <DynamicMapComponent />
}

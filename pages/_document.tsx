import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
        <Html style={{backgroundColor: '#030303'}}>
            <link
                rel="stylesheet"
                href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
                integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
                crossOrigin=""
            />
            <script
                src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
                integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
                crossOrigin=""
            ></script>
            <Head>
                <title>Test Next with OSM</title>
                <link rel="manifest" href="/manifest.json"/>
                <link rel="apple-touch-icon" href="/icon.png"></link>
                <meta name="theme-color" content="#030303"/>
            </Head>
            <body className="body-wrapper">
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
  }
}

export default MyDocument

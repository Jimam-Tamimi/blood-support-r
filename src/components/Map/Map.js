import React from 'react'
import {GoogleMap, withScriptjs, withGoogleMap,   Marker, InfoWindow } from "react-google-maps";

export default withScriptjs(withGoogleMap(function Map({children, coords, setCoords, setBounds, setMark}) {
    return (
        <>
            <GoogleMap
                defaultCenter={coords} 
                center={coords}
                defaultZoom={17} 
                onCenterChanged={setCoords}
                onBoundsChanged={setBounds}
                onClick={e => setMark({lat: e.latLng.lat(), lng: e.latLng.lng()})}
                
            >
                {children}
            </GoogleMap>
        </>
    )
}))

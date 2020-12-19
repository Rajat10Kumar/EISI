import { withScriptjs, withGoogleMap, GoogleMap, Marker,InfoWindow } from "react-google-maps"
import React from "react";
const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 28.68646398950098, lng:  77.25926741852604}}
  >
    {/* {props.isMarkerShown && <Marker position={{ lat: 28.68646398950098,lng: 77.25926741852604 }} />} */}
    <Marker position={{lat: 28.6862099,lng: 77.2592996 }}>
    <InfoWindow>
        <div className="container">
            <h6>Easy Info Solutions International</h6>
            <p style={{fontSize:"0.8rem"}}>E-461,Vijay Marg Jagjeet Nagar Delhi-110053,Ground Floor</p>
        </div>
    </InfoWindow>
    </Marker>
  </GoogleMap>
))
export default MyMapComponent;

import React, { useState, useEffect, useRef } from "react";
import Modal from "../../components/Modal/Modal";
import RequestDetails from "../../components/RequestDetails/RequestDetails";

import {
  FormWrap,
  Form,
  InputDiv,
  Input,
  customStyles,
  Button,
  Label,
} from "../../globalStyles";

import { Autocomplete } from "@react-google-maps/api";
import { Marker } from "react-google-maps";
import Map from "../../components/Map/Map";

export default function Request({ match }) {
  const reqForm = useRef(null);
  const [autoComplete, setAutoComplete] = useState(null);
  const [coords, setCoords] = useState({});
  const [mark, setMark] = useState(false);
  function setCurrentLocation() {
    navigator.geolocation.getCurrentPosition(
      (location) => {
        setCoords({
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        });
        setMark({
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        });
      },
      () => console.log("error :)"),
      { timeout: 10000 }
    );
  }
  useEffect(() => {
    setCurrentLocation();
  }, []);

  const onPlaceChanged = () => {
    try {
      const lat = autoComplete.getPlace().geometry.location.lat();
      const lng = autoComplete.getPlace().geometry.location.lng();
      setMark({ lat, lng });
      setCoords({ lat, lng });
    } catch {}
  };

  const sendRequest = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <RequestDetails>
        <form onSubmit={sendRequest}>
          <Modal
            button={Buttons}
            actionText="Request"
            title="Help Request Form"
            lg
            info
            btnText="Help"
          >
            <FormWrap>
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <InputDiv size={4}>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Name" type="text" />
                </InputDiv>
                <InputDiv size={5}>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Email" type="email" />
                </InputDiv>
                <InputDiv size={3}>
                  <Label htmlFor="time">When Do You Need Blood</Label>
                  <Input id="time" placeholder="Time" type="datetime-local" />
                </InputDiv>
                <InputDiv size={6}>
                  <Label htmlFor="number">Phone Number</Label>
                  <Input id="number" placeholder="Phone Number" type="tel" />
                </InputDiv>
                <InputDiv size={6}>
                  <Label htmlFor="add-number">Additional Phone Number</Label>
                  <Input
                    id="add-number"
                    placeholder="Additional Phone Number"
                    type="tel"
                  />
                </InputDiv>

                <InputDiv
                  flex
                  style={{ justifyContent: "space-between" }}
                  size={12}
                >
                  <Button
                    type="button"
                    info
                    blockOnSmall
                    style={{ position: "relative", top: "14px" }}
                    onClick={(e) => {
                      setCurrentLocation();
                    }}
                  >
                    Get Current Location
                  </Button>

                  <Autocomplete
                    onLoad={(autoC) => setAutoComplete(autoC)}
                    onPlaceChanged={onPlaceChanged}
                  >
                    <>
                      <Label htmlFor="add-number">
                        Current Location of Donor *
                      </Label>
                      <Input
                        id="places"
                        placeholder="Search Places..."
                        type="text"
                        onKeyDown={(e) => {
                          if (e.keyCode === 13) {
                            e.preventDefault();
                          } else {
                            return true;
                          }
                        }}
                      />
                    </>
                  </Autocomplete>
                </InputDiv>

                <InputDiv
                  style={{
                    boxShadow: "0px 0px 15px 2px var(--main-box-shadow-color)",
                  }}
                  height="400px"
                  size={12}
                >
                  <Map
                    coords={coords}
                    isMarkerShown
                    googleMapURL=" "
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    setCoords={setCoords}
                    setMark={setMark}
                    click={(e) =>
                      setMark({ lat: e.latLng.lat(), lng: e.latLng.lng() })
                    }
                    defaultZoom={17}
                  >
                    {mark ? <Marker position={mark} /> : ""}
                  </Map>
                </InputDiv>
              </Form>
            </FormWrap>
          </Modal>
        </form>
      </RequestDetails>
    </>
  );
}

const Buttons = () => {
  return (
    <Button type="submit" md info>
      Request
    </Button>
  );
};

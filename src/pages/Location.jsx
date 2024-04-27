import React from "react";

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      hemisphere: null,
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
          hemisphere:
            position.coords.latitude >= 0
              ? "Northern Hemisphere"
              : "Southern Hemisphere",
        });
      },
      (error) => {
        this.setState({ error: error.message });
      }
    );
  }

  render() {
    const { latitude, longitude, error, hemisphere } = this.state;

    if (error) {
      return (
        <div className="container my-5">
          <h1>Error: {error}</h1>
        </div>
      );
    }

    if (latitude !== null && longitude !== null) {
      return (
        <div className="container my-5">
          <h1>User Current Location Using Class Component:</h1>
          <br></br>
          <h3>Latitude: {latitude}</h3>
          <h3>Longitude: {longitude}</h3>
          <h3>Hemisphere: {hemisphere}</h3>
        </div>
      );
    }

    return (
      <div className="container my-5">
        <h1>Loading...</h1>
      </div>
    );
  }
}

export default Location;

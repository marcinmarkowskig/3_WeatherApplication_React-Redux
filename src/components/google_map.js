import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    return <div ref='map' />;//dzięki temu mogę odwołac się bezpośrednio to elementu HTML na stronie - w tym przypadku do div w sposób this.refs.map
  }
}

export default GoogleMap;

import React, { Component } from "react";
import { ScrollView } from "react-native";
import axios from "axios";
import AlbumDetail from "./AlbumDetail";

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios
      .get("http://rallycoding.herokuapp.com/api/music_albums")
      .then(response => this.setState({ albums: response.data }))
      .catch(error => {
        alert("failed to fetch data from api");
      });
  }

  renderAlbums() {
    return this.state.albums.map(album => (
      <AlbumDetail album={album} key={album.title} />
    ));
  }

  render() {
    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

export default AlbumList;

//Functional Components V Class Based Components
// Functional Component
// Used to represent static data
// Can't handle fetching data
// Easy to write

// Class Componets
// Used for dynamic sources of data
// Handles any data that might change
// Knows when its getting rendered to the device

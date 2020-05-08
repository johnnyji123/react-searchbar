import React, { Component } from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import ImageList from "../ImageList/ImageList";


class App extends Component{

  state = {
    images: []
  };

   onSearchSubmit = async(term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {query: term},
      headers:{Authorization: "Client-ID _WHw3r_CxO15BTssqrXC9w4V1Uq1rh8s4c77NoBuqHI"}
    })
    this.setState({images: response.data.results});
    console.log({images: response.data.results})
  }
  render(){
    return(
      <div className = "ui container" style = {{marginTop: "10px"}}>
        <SearchBar onSubmit = {this.onSearchSubmit} />
        <ImageList images = { this.state.images}/>
      </div>
    )
  }
}

export default App;
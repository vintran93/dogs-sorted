import React, { Component } from "react";
import { dogs } from "./data.js";

class DogList extends Component {
  
    state = {
        shownDogs: dogs,
        isSorted: false
    }
  
    handleClick = () => {
        if(this.state.isSorted) {
            this.setState({
                shownDogs: dogs,
                isSorted: false
            })
        } else {
            this.setState({
                shownDogs: dogs.slice(0).sort((a, b) => a.name.localeCompare(b.name)),
                isSorted: true
                // sort takes in callback function; that callback function needs to take in 2 arguments which can be anything
                // refers to 2 different objects in array that is being sorted, a and b are dog objects
                // to sort by name, use localeCompare function which compares 2 strings alphabetically and returns 1, 0 or -1 useful for sorting
                // sorting depends on return value of callback function; determines if it is a 1, 0 or -1
                // slice is to not mutate dogs array directly; if call dogs.sort will mutate value of dogs array does not return new array
                // slice is to make copy of dogs array
            })
        }
    }

    

    render() {
    return (
      <div>
        <button onClick={this.handleClick}>Sort</button>
        {this.state.shownDogs.map((dog) => {
          return (
            <div>
              {dog.name} - {dog.breed}
            </div>
          );
        })}
      </div>
    );
  }
}

export default DogList;

// Coding Challenge Ideas

// Search bar

// Sort

// List + add incrementing button 

// Filter:

// Like map, filter does not mutate array, instead creates a new array

// map, reduce, filter, push

// count number of occurences of each breed

// modal popout if click button that overlays screen, login form, make simple version of that via state
// ; events, handling state, what you may need in state
// drop down boxes, understand how select tag works, onChange; JS array methods, map, filter, sort, reduce 
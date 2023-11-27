// Define a function to get a list of neighborhoods
export default function getNeighborhoodsList() {
  // Initialize an array with some San Francisco neighborhoods
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  // Define an arrow function to add a new neighborhood
  this.addNeighborhood = (newNeighborhood) => {
    // Push the new neighborhood to the array
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    // Return the updated list of neighborhoods
    return this.sanFranciscoNeighborhoods;
  };
}


import RestaurantList from "./RestaurantList.js";
import RestaurantForm from "./RestaurantForm.js";
import { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import axios from "axios";

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    try {
      let res = await axios.get("/api/restaurants");
      setRestaurants(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addRestaurant = async (restaurant) => {
    try {
      let res = await axios.post("/api/restaurants", restaurant);
      setRestaurants([...restaurants, res.data]);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteRestaurant = async (id) => {
    try {
      let res = await axios.delete(`/api/restaurants/${id}`);
      let newRestaurants = restaurants.filter((r) => r.id !== id);
      setRestaurants(newRestaurants);
    } catch (err) {
      console.log(err);
    }
  };

  const updateRestaurant = async (id) => {
    try {
      let res = await axios.put(`/api/restaurants/${id}`);
      let newRestaurants = restaurants.map((r) =>
        r.id === updateRestaurant.id ? updateRestaurant : r
      );

      setRestaurants(newRestaurants);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Container>
        <h1>Restaurants!</h1>
        <RestaurantList
          restaurants={restaurants}
          deleteRestaurant={deleteRestaurant}
          updateRestaurant={updateRestaurant}
        />
        <h2>Add Your Restaurant</h2>
        <RestaurantForm addRestaurant={addRestaurant} />
      </Container>
    </>
  );
}
export default App;

import Restaurant from "./Restaurant";

const RestaurantList = (props) => {
  return (
    <ul>
      {props.restaurants.map((r) => (
        <Restaurant
          deleteRestaurant={props.deleteRestaurant}
          updateRestaurant={props.updateRestaurant}
          key={r.id}
          {...r}
        />
      ))}
    </ul>
  );
};
export default RestaurantList;

import { Header, Button, Icon } from "semantic-ui-react";

const Restaurant = ({ id, name, deleteRestaurant, updateRestaurant }) => {
  return (
    <>
      <Header as="h3">{name}</Header>
      <Button icon="delete" onClick={() => deleteRestaurant(id)}></Button>
      <Button icon="pencil" onClick={() => updateRestaurant(id)}></Button>
    </>
  );
};

export default Restaurant;

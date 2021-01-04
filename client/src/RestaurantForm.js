import { Form } from "semantic-ui-react";
import { useState } from "react";

export default (props) => {
  const [name, setName] = useState("");
  const handleSubmit = () => {
    props.addRestaurant({ name });
    setName("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input
        label={"New Restaurant Name"}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Form.Button type="submit">Add To List</Form.Button>
    </Form>
  );
};

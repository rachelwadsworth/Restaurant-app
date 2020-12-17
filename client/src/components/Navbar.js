import { useState } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default () => {
  const [activeItem, setActiveItem] = useState("home");
  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Segment inverted>
      <Menu inverted pointing secondary>
        <Link to="/">
          <Menu.Item
          as="div"
          name="home"
          active={activeItem ==="home"}
          onClick={handleItemClick}
          />
        </Link>
        <Link to="/restaurant">
          <Menu.Item
          as="div"
          name="restaurant"
          active={activeItem ==="restaurant"}
          onClick={handleItemClick}
          />
        </Link>
        <Link to="/item">
          <Menu.Item
          as="div"
          name="item"
          active={activeItem ==="item"}
          onClick={handleItemClick}
          />
        </Link>
      </Menu>
    </Segment>
  );
};
import { Fragment } from "react";
import { Button, Stack } from "react-bootstrap";
const DisplayItems = (props) => {
  return (
    <div>
      <Stack gap={1}>
        <div className="p-2">{props.title}</div>
        <div className="p-2">
          <img src={props.image} />
        </div>
        <div className="p-2">${props.price}</div>
        <div className="p-2">
          <Button>Add To Cart</Button>
        </div>
      </Stack>
    </div>
  );
};
export default DisplayItems;

import { Button, Stack } from "react-bootstrap";

const CartItems = (props) => {
  return (
    <Stack gap={3}>
      <div className="p-2">
        <img
          src={props.image}
          style={{ maxWidth: "100px", maxHeight: "100px" }}
        />
      </div>
      <div className="p-2" style={{ fontSize: "13px" }}>
        {props.title}
      </div>
      <div className="p-2">${props.price}</div>
      <input type="number" style={{ maxWidth: "130px", maxHeight: "100px" }} />
      <Button>REMOVE</Button>
    </Stack>
  );
};
export default CartItems;

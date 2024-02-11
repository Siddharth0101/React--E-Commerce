import { useState } from "react";
import {
  Button,
  ButtonGroup,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  OffcanvasTitle,
} from "react-bootstrap";
import CartItems from "./CartItems";
const cartElements = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    title: "Black and white ",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    title: "Yellow and Black ",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
];
const Cart = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button onClick={handleShow}>Cart</Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          {cartElements.map((items) => (
            <CartItems
              title={items.title}
              price={items.price}
              image={items.imageUrl}
            />
          ))}
        </Offcanvas.Header>
        <div>TotalAmount</div>
        <Button>Purchase</Button>
      </Offcanvas>
    </div>
  );
};
export default Cart;

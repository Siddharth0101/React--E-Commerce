import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from "react-bootstrap";

const CardDisplayUI = (props) => {
  return (
    <Card>
      <CardImg src={props.image} style={{ width: "200px", height: "200px" }} />
      <CardBody>
        <CardTitle>{props.title}</CardTitle>
        <CardText>{props.price}</CardText>
        <Button>Add To Cart</Button>
      </CardBody>
    </Card>
  );
};
export default CardDisplayUI;

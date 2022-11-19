import Spinner from "react-bootstrap/Spinner";

export default function LoadingBox() {
  return (
    //if this line below is not showing in case then the other line will show line 5

    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

import Button from "../utils/Button";
import { useNavigate } from "react-router-dom";

export default function CreateGenre() {
  const navigate = useNavigate();
  return (
    <>
      <h3>Create Genre</h3>
      <Button
        onClick={() => {
          // .. saving to DB
          navigate("/genres");
        }}
      >
        Save changes
      </Button>
    </>
  );
}

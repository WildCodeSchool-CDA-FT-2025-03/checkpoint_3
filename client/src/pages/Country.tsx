import { useParams } from "react-router-dom";

export default function Country() {
  const { id } = useParams();

  return <div>Country</div>;
}

import { useParams } from "react-router-dom";


export function EventDetailPage() {
  const { id } = useParams();
  return <h1>Event Detail Page for Event {id}</h1>;
}
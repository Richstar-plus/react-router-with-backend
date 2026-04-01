import { useLoaderData } from "react-router-dom";
import  EventItem  from "../components/EventItem";


export function EventDetailPage() {
  const fetchedEvent = useLoaderData();

  return (
    <EventItem event={fetchedEvent.event} />
  );
}

export async function Loader({request, params}) {
  const { id } = params;
  const response = await fetch(`http://localhost:8080/events/${id}`);
  
  if(!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch event." }), {
      status: 500,
    });
  } else {
    return response;
  }
}
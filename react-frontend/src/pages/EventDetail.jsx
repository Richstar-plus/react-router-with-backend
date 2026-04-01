import { useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

export function EventDetailPage() {
  const fetchedEvent = useRouteLoaderData('event-details');

  return <EventItem event={fetchedEvent.event} />;
}

export async function Loader({ params }) {
  const { id } = params;
  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch event." }), {
      status: 500,
    });
  } else {
    const resData = await response.json();
    return resData;
  }
}

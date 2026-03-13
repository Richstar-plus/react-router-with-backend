import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

export function EventsPage() {
  const fetchedEvents = useLoaderData();

  return <>{<EventsList events={fetchedEvents} />}</>;
}

export async function Loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // Handle error
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

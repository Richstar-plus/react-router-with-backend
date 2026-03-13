import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

export function EventsPage() {
  const fetchedEvents = useLoaderData();

  return <>{<EventsList events={fetchedEvents} />}</>;
}

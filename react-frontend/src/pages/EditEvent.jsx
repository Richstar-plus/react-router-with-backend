import  EventForm  from "../components/EventForm";
import { useRouteLoaderData } from "react-router-dom";

export function EditEventPage() {
  const data = useRouteLoaderData('event-details');
  const fetchedEvent = data.event;

  return (
    <EventForm event={fetchedEvent} />
  );
}
import React from "react";
import { json, Link, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const data = useRouteLoaderData("event-detail");
  //console.log(data);
  return (
    <>
      <EventItem event={data.event} />
      <p style={{ textAlign: "center" }}>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
};

export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.eventId;
  //console.log(id);
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected events" },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}

export async function action({ params, request }) {
  const eventId = params.eventId;
  //console.log(id);
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });
  if (!response.ok) {
    throw json(
      { message: "Could not delete event" },
      {
        status: 500,
      }
    );
  }
  return redirect("/events");
}

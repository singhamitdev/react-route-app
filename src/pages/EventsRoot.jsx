import React from "react";
import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

const EventsRootLayout = () => {
  //const navigation = useNavigation();
  return (
    <>
      <EventsNavigation />

      <main>
        {/* {navigation.state === "loading" && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
};

export default EventsRootLayout;

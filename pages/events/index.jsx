import EventList from "../../Components/Events/EventList";
import { getAllEvents } from "../../data";

const AllEventsPage = () => {
   const events = getAllEvents();
   return (
      <>
         <EventList events={events} />
      </>
   );
};

export default AllEventsPage;

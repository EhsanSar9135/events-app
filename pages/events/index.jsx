import { useRouter } from "next/dist/client/router";
import EventList from "../../Components/Events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { getAllEvents } from "../../data";

const AllEventsPage = () => {
   const router = useRouter();
   const events = getAllEvents();
   const findEventHandler = (year, month) => {
      const fullPath = `/events/${year}/${month}`;
      router.push(fullPath);
   };
   return (
      <>
         <EventSearch onSearch={findEventHandler} />
         <EventList events={events} />
      </>
   );
};

export default AllEventsPage;

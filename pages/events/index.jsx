import { useRouter } from "next/dist/client/router";
import EventList from "../../Components/Events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { getAllEvents } from "../../helpers/api-util";

const AllEventsPage = ({ allEvents }) => {
   const router = useRouter();
   const findEventHandler = (year, month) => {
      const fullPath = `/events/${year}/${month}`;
      router.push(fullPath);
   };
   return (
      <>
         <EventSearch onSearch={findEventHandler} />
         <EventList events={allEvents} />
      </>
   );
};

export const getStaticProps = async () => {
   const events = await getAllEvents();
   return {
      props: {
         allEvents: events,
      },
      revalidate: 60,
   };
};

export default AllEventsPage;

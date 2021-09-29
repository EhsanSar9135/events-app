import { useRouter } from "next/dist/client/router";
import EventList from "../../Components/Events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { getAllEvents } from "../../helpers/api-util";
import Head from "next/head";

const AllEventsPage = ({ allEvents }) => {
   const router = useRouter();
   const findEventHandler = (year, month) => {
      const fullPath = `/events/${year}/${month}`;
      router.push(fullPath);
   };
   return (
      <>
         <Head>
            <title>All Events</title>
            <meta
               name="description"
               content="Find a lot of great events that allow you to evolve..."
            />
         </Head>
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

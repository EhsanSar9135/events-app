import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../helpers/api-util";

const HomePage = ({ events }) => {
   return (
      <>
         <EventList events={events} />
      </>
   );
};

export const getStaticProps = async () => {
   const featuredEvents = await getFeaturedEvents();
   return {
      props: {
         events: featuredEvents,
      },
   };
};

export default HomePage;

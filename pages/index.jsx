import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../helpers/api-util";

const HomePage = ({ featuredEvents }) => {
   return (
      <>
         <EventList events={featuredEvents} />
      </>
   );
};

export const getStaticProps = async () => {
   const events = await getFeaturedEvents();
   return {
      props: {
         featuredEvents: events,
      },
      revalidate: 1800,
   };
};

export default HomePage;

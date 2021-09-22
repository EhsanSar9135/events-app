import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../data";

const HomePage = () => {
   const featuredEvents = getFeaturedEvents();
   return (
      <>
         <EventList events={featuredEvents} />
      </>
   );
};

export default HomePage;

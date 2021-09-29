import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../helpers/api-util";
import Head from "next/head";

const HomePage = ({ featuredEvents }) => {
   return (
      <>
         <Head>
            <title>NextJS Events</title>
            <meta
               name="description"
               content="Find a lot of great events that allow you to evolve..."
            />
         </Head>
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

import Head from "next/head";
import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/EventList";
import NewsletterRegistration from "../components/Input/NewsletterRegistration";

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
         <NewsletterRegistration />
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

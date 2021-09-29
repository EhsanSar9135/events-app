import EventContent from "../../Components/EventDetails/EventContent";
import EventLogistics from "../../Components/EventDetails/EventLogistics";
import EventSummary from "../../Components/EventDetails/EventSummary";
import { getEventById, getFeaturedEvents } from "../../helpers/api-util";
import Head from "next/head";

const EventDetailPage = ({ selectedEvent }) => {
   const { title, date, location, image, description } = selectedEvent;
   if (!selectedEvent) {
      return (
         <div>
            <p>Loading...</p>
         </div>
      );
   }
   return (
      <>
         <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
         </Head>
         <EventSummary title={title} />
         <EventLogistics
            date={date}
            address={location}
            image={image}
            imageAlt={title}
         />
         <EventContent>
            <p>{description}</p>
         </EventContent>
      </>
   );
};

export const getStaticProps = async (context) => {
   const eventId = context.params.eventId;
   const event = await getEventById(eventId);
   return {
      props: {
         selectedEvent: event,
      },
      revalidate: 30,
   };
};

export const getStaticPaths = async () => {
   const events = await getFeaturedEvents();
   const paths = events.map((event) => ({ params: { eventId: event.id } }));
   return {
      paths,
      fallback: "blocking",
   };
};

export default EventDetailPage;

import { useRouter } from "next/dist/client/router";
import EventContent from "../../Components/EventDetails/EventContent";
import EventLogistics from "../../Components/EventDetails/EventLogistics";
import EventSummary from "../../Components/EventDetails/EventSummary";
import { getEventById } from "../../data";

const EventDetailPage = () => {
   const router = useRouter();
   const eventId = router.query.eventId;
   const event = getEventById(eventId);
   if (!event) {
      return <p>No event found!</p>;
   }
   return (
      <>
         <EventSummary title={event.title} />
         <EventLogistics
            date={event.date}
            address={event.location}
            image={event.image}
            imageAlt={event.title}
         />
         <EventContent>
            <p>{event.description}</p>
         </EventContent>
      </>
   );
};

export default EventDetailPage;

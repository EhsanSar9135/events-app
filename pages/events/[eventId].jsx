import { useRouter } from "next/dist/client/router";
import EventContent from "../../Components/EventDetails/EventContent";
import EventLogistics from "../../Components/EventDetails/EventLogistics";
import EventSummary from "../../Components/EventDetails/EventSummary";
import ErrorAlert from "../../components/UI/ErrorAlert";
import { getEventById } from "../../data";

const EventDetailPage = () => {
   const router = useRouter();
   const eventId = router.query.eventId;
   const event = getEventById(eventId);
   if (!event) {
      return (
         <ErrorAlert>
            <p>No event found!</p>
         </ErrorAlert>
      );
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

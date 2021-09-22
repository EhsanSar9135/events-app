import { useRouter } from "next/dist/client/router";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/ResultsTitle";
import Button from "../../components/UI/Button";
import ErrorAlert from "../../components/UI/ErrorAlert";
import { getFilteredEvents } from "../../data";

const FilteredEventsPage = () => {
   const router = useRouter();
   const filteredData = router.query.slug;
   if (!filteredData) {
      return <p className="center">Loading...</p>;
   }
   const filteredYear = filteredData[0];
   const filteredMonth = filteredData[1];

   const numYear = +filteredYear;
   const numMonth = +filteredMonth;

   if (
      isNaN(numYear) ||
      isNaN(numMonth) ||
      numYear > 2030 ||
      numYear < 2021 ||
      numMonth < 1 ||
      numMonth > 12
   ) {
      return (
         <>
            <ErrorAlert>
               <p>Invalid filter. Please adjust your values!</p>
            </ErrorAlert>
            <div className="center">
               <Button link="/events">Show All Events</Button>
            </div>
         </>
      );
   }
   const filteredEvents = getFilteredEvents({
      year: numYear,
      month: numMonth,
   });
   if (!filteredEvents || filteredEvents.length === 0) {
      return (
         <>
            <ErrorAlert>
               <p>No events found for the chosen filter!</p>
            </ErrorAlert>
            <div className="center">
               <Button link="/events">Show All Events</Button>
            </div>
         </>
      );
   }
   const date = new Date(numYear, numMonth - 1);
   return (
      <>
         <ResultsTitle date={date} />
         <EventList events={filteredEvents} />
      </>
   );
};

export default FilteredEventsPage;

import { useRouter } from "next/dist/client/router";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/ResultsTitle";
import Button from "../../components/UI/Button";
import ErrorAlert from "../../components/UI/ErrorAlert";
import { getFilteredEvents } from "../../helpers/api-util";

const FilteredEventsPage = ({ hasError, filteredEvents, date }) => {
   if (hasError) {
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
   const currentDate = new Date(date.year, date.month - 1);
   return (
      <>
         <ResultsTitle date={currentDate} />
         <EventList events={filteredEvents} />
      </>
   );
};

export const getServerSideProps = async (context) => {
   const { params } = context;
   const filteredData = params.slug;
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
      return {
         props: { hasError: true },
      };
   }
   const events = await getFilteredEvents({
      year: numYear,
      month: numMonth,
   });
   return {
      props: {
         filteredEvents: events,
         date: {
            year: numYear,
            month: numMonth,
         },
      },
   };
};

export default FilteredEventsPage;

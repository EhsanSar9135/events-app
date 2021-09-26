import axios from "axios";

export const getAllEvents = async () => {
   const { data } = await axios.get(
      "https://events-app-e96f2-default-rtdb.firebaseio.com/events.json"
   );

   const events = [];
   for (const key in data) {
      events.push({
         id: key,
         ...data[key],
      });
   }
   return events;
};

export const getFeaturedEvents = async () => {
   const allEvents = await getAllEvents();
   return allEvents.filter((event) => event.isFeatured);
};

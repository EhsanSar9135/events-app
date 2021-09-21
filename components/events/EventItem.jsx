import Link from "next/link";

const EventItem = ({ event }) => {
   const { id, title, image, date, location } = event;
   const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
   });
   const formattedAddress = location.replace(", ", "/n");
   const exploreLink = `/events/${id}`;
   return (
      <li>
         <img src={image} alt={title} />
         <section>
            <div>
               <h2>{title}</h2>
               <div>
                  <time>{humanReadableDate}</time>
               </div>
               <div>
                  <address>{formattedAddress}</address>
               </div>
            </div>
            <div>
               <Link href={exploreLink}>Explore Event</Link>
            </div>
         </section>
      </li>
   );
};

export default EventItem;

import classes from "../../styles/EventItem.module.css";
import AddressIcon from "../Icons/address-icon";
import ArrowRightIcon from "../Icons/arrow-right-icon";
import DateIcon from "../Icons/date-icon";
import Button from "../UI/Button";

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
      <li className={classes.item}>
         <img src={image} alt={title} />
         <section className={classes.content}>
            <div className={classes.summary}>
               <h2>{title}</h2>
               <div className={classes.date}>
                  <DateIcon />
                  <time>{humanReadableDate}</time>
               </div>
               <div className={classes.address}>
                  <AddressIcon />
                  <address>{formattedAddress}</address>
               </div>
            </div>
            <div className={classes.actions}>
               <Button link={exploreLink}>
                  <span>Explore Event</span>
                  <span className={classes.icon}>
                     <ArrowRightIcon />
                  </span>
               </Button>
            </div>
         </section>
      </li>
   );
};

export default EventItem;

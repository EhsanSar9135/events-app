import AddressIcon from "../Icons/address-icon";
import DateIcon from "../Icons/date-icon";
import LogisticsItem from "./LogisticsItem";
import classes from "../../styles/EventLogistics.module.css";

const EventLogistics = ({ date, address, image, imageAlt }) => {
   const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
   });
   const addressText = address.replace(", ", "\n");

   return (
      <section className={classes.logistics}>
         <div className={classes.image}>
            <img src={image} alt={imageAlt} />
         </div>
         <ul className={classes.list}>
            <LogisticsItem icon={DateIcon}>
               <time>{humanReadableDate}</time>
            </LogisticsItem>
            <LogisticsItem icon={AddressIcon}>
               <address>{addressText}</address>
            </LogisticsItem>
         </ul>
      </section>
   );
};

export default EventLogistics;

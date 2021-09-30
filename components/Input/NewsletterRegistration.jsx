import axios from "axios";
import { useRef } from "react";
import classes from "../../styles/NewsletterRegistration.module.css";

const NewsletterRegistration = () => {
   const emailInputRef = useRef();
   const registrationHandler = async (event) => {
      event.preventDefault();

      const enteredEmail = emailInputRef.current.value;
      const { data } = await axios.post("/api/newsletter", {
         email: enteredEmail,
      });
      console.log(data);
   };

   return (
      <section className={classes.newsletter}>
         <h2>Sign up to stay updated!</h2>
         <form onSubmit={registrationHandler}>
            <div className={classes.control}>
               <input
                  type="email"
                  id="email"
                  placeholder="Your email"
                  aria-label="Your email"
                  ref={emailInputRef}
               />
               <button>Register</button>
            </div>
         </form>
      </section>
   );
};

export default NewsletterRegistration;

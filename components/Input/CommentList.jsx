import classes from "../../styles/CommentList.module.css";

const CommentList = ({ comments }) => {
   return (
      <ul className={classes.comments}>
         {comments.map(({ id, name, text }) => (
            <li key={id}>
               <p>{text}</p>
               <div>
                  By <address>{name}</address>
               </div>
            </li>
         ))}
      </ul>
   );
};

export default CommentList;

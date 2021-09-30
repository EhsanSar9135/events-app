import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import NewComment from "./NewComment";
import classes from "../../styles/Comments.module.css";
import axios from "axios";

const Comments = ({ eventId }) => {
   const [showComments, setShowComments] = useState(false);
   const [comments, setComments] = useState([]);

   useEffect(() => {
      const getData = async () => {
         if (showComments) {
            const { data } = await axios.get(`/api/comments/${eventId}`);
            setComments(data.comments);
         }
      };
      getData();
   }, [showComments, eventId]);

   function toggleCommentsHandler() {
      setShowComments((prevStatus) => !prevStatus);
   }

   async function addCommentHandler(commentData) {
      const { data } = await axios.post(`/api/comments/${eventId}`, {
         commentData,
      });
      console.log(data);
   }

   return (
      <section className={classes.comments}>
         <button onClick={toggleCommentsHandler}>
            {showComments ? "Hide" : "Show"} Comments
         </button>
         {showComments && <NewComment onAddComment={addCommentHandler} />}
         {showComments && <CommentList comments={comments} />}
      </section>
   );
};

export default Comments;

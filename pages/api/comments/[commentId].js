import { v4 as uuid } from "uuid";

const handler = (req, res) => {
   const commentId = req.query.commentId;

   if (req.method === "POST") {
      const { email, name, text } = req.body;
      if (
         !email.includes("@") ||
         !name ||
         name.trim() === "" ||
         !text ||
         text.trim() === ""
      ) {
         res.status(422).json({ message: "Invalid Input." });
         return;
      }
      const newComment = {
         id: uuid(),
         email,
         name,
         text,
      };
      console.log(newComment);
      res.status(201).json({ message: "Added Comment", comment: newComment });
   }

   if (req.method === "GET") {
      const dummyList = [
         { id: "c1", name: "Max", text: "First Comment" },
         { id: "c2", name: "Manual", text: "Second Comment" },
      ];
      res.status(200).json({ comments: dummyList });
   }
};

export default handler;

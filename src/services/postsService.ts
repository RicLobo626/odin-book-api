import db from "@/db/index.js";
import { User, NewPost } from "@/types/index.js";

const createPost = async (data: NewPost, user: User) => {
  const createdPost = await db.post.create({
    data: { ...data, author: { connect: { id: user.id } } },
  });

  return createdPost;
};

export default {
  createPost,
};

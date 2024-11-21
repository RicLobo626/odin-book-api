import db from "@/db/index.js";
import { PublicUser, NewPost } from "@/types/index.js";

const createPost = async (data: NewPost, user: PublicUser) => {
  const createdPost = await db.post.create({
    data: { ...data, author: { connect: { id: user.id } } },
  });

  return createdPost;
};

const findPosts = () => {
  return db.post.findMany({ include: { author: true } });
};

export default {
  createPost,
  findPosts,
};

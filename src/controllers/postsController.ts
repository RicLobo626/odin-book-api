import service from "@/services/postsService.js";
import { NewPost, Post } from "@/types/index.js";
import { Request, Response } from "express";

const createPost = async (req: Request<unknown, unknown, NewPost>, res: Response<Post>) => {
  const post = await service.createPost(req.body, req.user!);

  res.json(post);
};

export default {
  createPost,
};

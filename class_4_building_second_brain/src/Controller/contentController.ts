import { NewRequest } from "../Middleware/Auth";
import { Content } from "../Models/contentSchema";
import { Response } from "express";
import { Tag, TagDocument } from "../Models/tagSchema";
import { Model } from "mongoose";

export const createContent = async (req: NewRequest, res: Response) => {
  try {
    const user = req.user;

    if (!user) {
      res.status(404).json({ message: "use not signed" });
    }

    const { title, link, tags, type } = req.body;

    if (!title || !link || !type) {
      res.status(404).json({ message: "required fields are missing" });
    }
    console.log("tag reqbody", req.body);
    const TagsArr: TagDocument[] = [];
    for (const tag of tags.split(" ")) {
      console.log("tag", tag);
      let existingTag = await Tag.findOne({ tag });
      if (!existingTag) {
        existingTag = await Tag.create({ name: tag });
      }

      if (!existingTag) {
        throw new Error("error in creating tag");
      }
      TagsArr.push(existingTag);
    }

    console.log("tagsArr", TagsArr);
    const userId = user?._id;
    console.log("userid", user?._id);
    const content = await Content.create({
      link: link,
      type: type,
      title: title,
      tags: TagsArr.map((tag) => tag._id),
      userId: userId,
    });

    console.log("content", content);
    if (!content) {
      res.status(500).json({ message: "error in creating content" });
    }

    res.status(200).json(content);
  } catch (error) {
    console.log("error", error);
    throw new Error("internal server error");
  }
};

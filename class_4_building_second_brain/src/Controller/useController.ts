import { Model, Schema, Types } from "mongoose";
import { User, UserDocument } from "../Models/userSchema";
import { Request, Response } from "express";
// export interface userInterface {
//   _id: string;

//   name: string;
//   email: string;
//   password: string;
//   createdAt: string;
// }

async function generateAccessTokenAndRefreshToken(userId: Types.ObjectId) {
  const user = await User.findById<UserDocument>(userId);
  if (!user) {
    throw new Error("not got the user");
  }
  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();

  user.refreshToken = refreshToken;

  user.save();

  return { AccessToken: accessToken, RefreshToken: refreshToken };
}
export const register = async (req: Request, res: Response) => {
  console.log("req body", req);
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400).json({ message: "required all the fields" });
  }

  try {
    const existingUser = User.findOne({
      $or: [{ email }, { username }],
    });

    if (existingUser != null) {
      res.status(400).json({ message: "user already exists" });
    }
    const user = User.create({
      username: username,
      email: email,
      password: password,
    });

    if (!user) {
      res.status(500).json({ message: "failed to create a user" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};

export const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    console.log(req.body);

    if (!email && !password) {
      res.status(404).json({ message: "required emails and password" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).json({ message: "user doesn't existed" });
    }

    if (!(await user?.isPasswordCorrect(password))) {
      res.status(400).json({ message: "password is not correct" });
    }

    const { AccessToken, RefreshToken } =
      await generateAccessTokenAndRefreshToken(user?.id);

    res.status(202).json({
      user,
      accessToken: AccessToken,

      refreshToken: RefreshToken,
      message: "user is successfull created",
    });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};

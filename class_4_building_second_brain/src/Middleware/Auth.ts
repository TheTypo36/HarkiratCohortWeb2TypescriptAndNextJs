import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { User, UserDocument } from "../Models/userSchema";

export interface NewRequest extends Request {
  user?: UserDocument;
}

export const verifyJwt = async (
  req: NewRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    // console.log("token", token);
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No token provided" });
    }

    // console.log("******************access token secret");
    // console.log(process.env.ACCESS_TOKEN_SECRET);
    // console.log("******************access token secret");

    const decoded = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET || ""
    ) as JwtPayload;
    // console.log("decoded", decoded);

    if (!decoded?._id) {
      return res
        .status(401)
        .json({ message: "Unauthorized: Invalid token payload" });
    }

    const user = await User.findById(decoded._id).select(
      "-password -refreshToken"
    );

    // console.log("user in verifyjwt", user);

    if (!user) {
      return res.status(401).json({ message: "Unauthorized: User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Unauthorized: Invalid token", error });
  }
};

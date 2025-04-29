import express, { Router } from "express";
import { register, signIn } from "../Controller/useController";
import multer from "multer";

const upload = multer();
const router = Router();

router.route("/register").post(upload.none(), register);
router.route("/signIn").post(signIn);
// router.route("/signOut").get();

export default router;

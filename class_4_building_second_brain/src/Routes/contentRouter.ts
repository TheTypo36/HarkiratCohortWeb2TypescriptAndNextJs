import { RequestHandler, Router } from "express";
import { verifyJwt } from "../Middleware/Auth";
import {
  createContent,
  deleteContent,
  getContent,
} from "../Controller/contentController";
import multer from "multer";

const upload = multer();
const router = Router();

router
  .route("/create")
  .post(verifyJwt as RequestHandler, upload.none(), createContent);
// router.route("/get").get();

router.route("/get-content").get(verifyJwt as RequestHandler, getContent);

router
  .route("/delete-content")
  .delete(verifyJwt as RequestHandler, deleteContent);

export default router;

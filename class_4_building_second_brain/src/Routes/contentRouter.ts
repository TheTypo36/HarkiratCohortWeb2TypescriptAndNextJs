import { RequestHandler, Router } from "express";
import { verifyJwt } from "../Middleware/Auth";
import {
  createContent,
  deleteContent,
  getContent,
  shareableLink,
  shareContent,
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

router.route("/share").post(verifyJwt as RequestHandler, shareContent);
router.route("/:sharelink").get(shareableLink);
export default router;

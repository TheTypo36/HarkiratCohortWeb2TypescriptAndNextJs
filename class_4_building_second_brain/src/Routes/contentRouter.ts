import { RequestHandler, Router } from "express";
import { verifyJwt } from "../Middleware/Auth";
import { createContent } from "../Controller/contentController";
import multer from "multer";

const upload = multer();
const router = Router();

router
  .route("/create")
  .post(verifyJwt as RequestHandler, upload.none(), createContent);
// router.route("/get").get();

// router.route("/create-link").get();

export default router;

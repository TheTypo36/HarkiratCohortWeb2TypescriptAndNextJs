import express, { Router } from "express";

const router = Router();

router.route("/register").post();
router.route("/sigIn").get();
router.route("/signOut").get();

export default router;

import { Router } from "express";
import {
  getNewUsername,
  getUsernames,
  postNewUsername,
} from "../controllers/usersController.js";

const router = Router();

router.get("/", getUsernames);

router.get("/new", getNewUsername);

router.post("/new", postNewUsername);

export default router;

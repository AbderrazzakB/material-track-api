import { Router } from "express";
const router = Router();

import UserRoute from "./User.js";

router.get("/", (req, res) => res.send("Material Track Api"));

router.use("/user", UserRoute);
// material route

export default router;

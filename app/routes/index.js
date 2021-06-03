import { Router } from "express";
const router = Router();

import UserRoute from "./User.js";
import MaterialRoute from "./Material.js"

router.get("/", (req, res) => res.send("Material Track Api"));

router.use("/user", UserRoute);
// material route
router.use("/material",MaterialRoute);
export default router;

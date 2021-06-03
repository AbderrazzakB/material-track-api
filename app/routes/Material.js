import { Router } from "express";
import Material from "../models/Material.js";
const router = Router();
router
  .get("/", (req, res) => {
    res.json({ message: "Welcome in material route" });
  })
  .get("/all", async (req, res) => {
    try {
      const materials = await Material.find();
      res.json({ materials });
    } catch (error) {}
  })
  .get("/:id", async (req, res) => {
    const id = req.params.id;

    try {
      const material = await Material.findById(id);
      if (!material) {
        return res.json({ error: "not found" });
      } else {
        res.json({ material });
      }
    } catch (error) {
      res.json({ error });
    }
  })
  .post("/", async (req, res) => {
    try {
      const { name, description, category } = req.body;
      const material = await Material.create({ name, description, category });
      res.json({ material });
    } catch (error) {
      res.json({ error });
    }
  });
  export default router;
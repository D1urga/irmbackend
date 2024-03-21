import { Router } from "express";
import {
  updateTypeA,
  updateTypeB,
} from "../controllers/updateReport.controllers.js";
import { upload } from "../middlewares/multer.middlewares.js";

const router = Router();

router
  .route("/typeB/:id")
  .post(upload.fields([{ name: "file", maxCount: 1 }]), updateTypeA);

router
  .route("/typeA/:id")
  .post(upload.fields([{ name: "file", maxCount: 1 }]), updateTypeB);

export default router;

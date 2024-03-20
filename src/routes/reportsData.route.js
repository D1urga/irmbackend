import { Router } from "express";
import { upload } from "../middlewares/multer.middlewares.js";
import {
  getIndivisualReport,
  getReport,
  postReport,
} from "../controllers/reportsData.controller.js";

const router = Router();

router.route("/postReport").post(
  upload.fields([
    { name: "img1", maxCount: 1 },
    { name: "img2", maxCount: 1 },
    { name: "img3", maxCount: 1 },
    { name: "img4", maxCount: 1 },
    { name: "img5", maxCount: 1 },
    { name: "img6", maxCount: 1 },
    { name: "img7", maxCount: 1 },
    { name: "img8", maxCount: 1 },
    { name: "img9", maxCount: 1 },
    { name: "img10", maxCount: 1 },
  ]),
  postReport,
);
router.route("/getReport").get(getReport);
router.route("/getIndivisualReport/:id").get(getIndivisualReport);

export default router;

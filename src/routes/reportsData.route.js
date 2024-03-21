import { Router } from "express";
import { upload } from "../middlewares/multer.middlewares.js";
import {
  getIndivisualReport,
  getIndivisualReportTypeB,
  getReport,
  getReportTypeB,
  postReport,
  posttypeb,
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
    { name: "img11", maxCount: 1 },
    { name: "img12", maxCount: 1 },
    { name: "img13", maxCount: 1 },
    { name: "img14", maxCount: 1 },
    { name: "img15", maxCount: 1 },
    { name: "img16", maxCount: 1 },
    { name: "img17", maxCount: 1 },
    { name: "img18", maxCount: 1 },
    { name: "img19", maxCount: 1 },
    { name: "img20", maxCount: 1 },
  ]),

  postReport,
);
router.route("/postTypeB").post(
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
  posttypeb,
);
router.route("/getReport").get(getReport);
router.route("/getReportTypeB").get(getReportTypeB);
router.route("/getIndivisualReport/:id").get(getIndivisualReport);
router.route("/getIndivisualReportTypeB/:id").get(getIndivisualReportTypeB);

export default router;

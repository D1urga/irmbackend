import { ReportsData } from "../models/report.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiError } from "../utils/apiError.js";
import { parse } from "dotenv";

const postReport = asyncHandler(async (req, res) => {
  const {
    headerSectionData,
    projectDescriptionData,
    policyParticularsData,
    observationsAndVerificationsData,
    assessmentLossTable,
    assessmentLossFields,
    policyParticularsFields,
    observationsAndVerificationsAttach,
    assessmentLossNotes,
    assessmentLossDes,
    projectDescriptionTable,
    causeOfLoss,
  } = req.body;

  let path1 = "";
  if (req.files?.img1 != undefined) {
    path1 = req.files?.img1[0]?.path;
  }
  let path2 = "";
  if (req.files?.img2 != undefined) {
    path2 = req.files?.img2[0]?.path;
  }
  let path3 = "";
  if (req.files?.img3 != undefined) {
    path3 = req.files?.img3[0]?.path;
  }
  let path4 = "";
  if (req.files?.img4 != undefined) {
    path4 = req.files?.img4[0]?.path;
  }
  let path5 = "";
  if (req.files?.img5 != undefined) {
    path5 = req.files?.img5[0]?.path;
  }
  let path6 = "";
  if (req.files?.img6 != undefined) {
    path6 = req.files?.img6[0]?.path;
  }
  let path7 = "";
  if (req.files?.img7 != undefined) {
    path7 = req.files?.img7[0]?.path;
  }
  let path8 = "";
  if (req.files?.img8 != undefined) {
    path8 = req.files?.img8[0]?.path;
  }
  let path9 = "";
  if (req.files?.img9 != undefined) {
    path9 = req.files?.img9[0]?.path;
  }
  let path10 = "";
  if (req.files?.img10 != undefined) {
    path10 = req.files?.img10[0]?.path;
  }
  let url1 = await uploadOnCloudinary(path1);
  let url2 = await uploadOnCloudinary(path2);
  let url3 = await uploadOnCloudinary(path3);
  let url4 = await uploadOnCloudinary(path4);
  let url5 = await uploadOnCloudinary(path5);
  let url6 = await uploadOnCloudinary(path6);
  let url7 = await uploadOnCloudinary(path7);
  let url8 = await uploadOnCloudinary(path8);
  let url9 = await uploadOnCloudinary(path9);
  let url10 = await uploadOnCloudinary(path10);
  // for (let i = 0; i < observationsAndVerificationsAttach.length; i++) {
  //   const obj = {
  //     description: "dasdas",
  //     title: "adasd",
  //     attachmentUrl:
  //       "blob:http://localhost:3001/b24977e2-8afa-4236-b4e6-5e11166f3630",
  //     attachmentImage: "",
  //     _id: "65faea729554fc96abc4e26a",
  //   };
  // }

  const data = await ReportsData.create({
    causeOfLoss: JSON.parse(causeOfLoss),
    assessmentLossDes: JSON.parse(assessmentLossDes),
    policyParticularsData: JSON.parse(policyParticularsData),
    projectDescriptionData: JSON.parse(projectDescriptionData),
    projectDescriptionData: JSON.parse(projectDescriptionData),
    headerSectionData: JSON.parse(headerSectionData),
    projectDescriptionTable: JSON.parse(projectDescriptionTable),
    policyParticularsFields: JSON.parse(policyParticularsFields),
    assessmentLossTable: JSON.parse(assessmentLossTable),
    assessmentLossNotes: JSON.parse(assessmentLossNotes),
    observationsAndVerificationsData: JSON.parse(
      observationsAndVerificationsData,
    ),
    assessmentLossFields: JSON.parse(assessmentLossFields),
    observationsAndVerificationsAttach: JSON.parse(
      observationsAndVerificationsAttach,
    ),
    obsvrf: [
      { imgurl: url1?.url || "" },
      { imgurl: url2?.url || "" },
      { imgurl: url3?.url || "" },
      { imgurl: url4?.url || "" },
      { imgurl: url5?.url || "" },
      { imgurl: url6?.url || "" },
      { imgurl: url7?.url || "" },
      { imgurl: url8?.url || "" },
      { imgurl: url9?.url || "" },
      { imgurl: url10?.url || "" },
    ],
  });
  return res
    .status(200)
    .json(new ApiResponse(200, data, "data post succesffully"));
});

const getReport = asyncHandler(async (req, res) => {
  const data = await ReportsData.find({});
  return res
    .status(200)
    .json(new ApiResponse(200, data, "data post succesffully"));
});
const getIndivisualReport = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const data = await ReportsData.findById(id);
  return res
    .status(200)
    .json(new ApiResponse(200, data, "data post succesffully"));
});

export { postReport, getReport, getIndivisualReport };

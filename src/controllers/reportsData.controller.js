import { ReportsData } from "../models/report.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiError } from "../utils/apiError.js";
import { parse } from "dotenv";
import { TypeBReport } from "../models/typeb.model.js";
import { GoogleGenerativeAI } from "@google/generative-ai";

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
    conclusionTable,
    projectDescriptionTable,
    excelAttachment,
    conclusionDes,
    causeOfLoss,
  } = req.body;

  let imglist = [];
  let imglisturls = [];
  let imglist1 = [];
  let imglisturls1 = [];
  let imglist2 = [];
  let imglisturls2 = [];
  for (let i = 0; i < req.files?.img1?.length; i++) {
    imglist.push(req.files?.img1[i]?.path);
  }
  for (let i = 0; i < req.files?.img2?.length; i++) {
    imglist1.push(req.files?.img2[i]?.path);
  }
  for (let i = 0; i < req.files?.img3?.length; i++) {
    imglist2.push(req.files?.img3[i]?.path);
  }
  console.log(imglist.length);
  console.log(imglist2.length);

  await Promise.allSettled(
    imglist.map(async (file) => {
      let url = await uploadOnCloudinary(file);
      const obj = { imgurl: url?.url };
      imglisturls.push(obj);
    }),
  )
    .then(
      await Promise.allSettled(
        imglist1.map(async (file) => {
          let url = await uploadOnCloudinary(file);
          const obj = { imgurl: url?.url };
          imglisturls1.push(obj);
        }),
      ),
    )
    .then(
      await Promise.allSettled(
        imglist2.map(async (file) => {
          let url = await uploadOnCloudinary(file);
          const obj = { imgurl: url?.url };
          imglisturls2.push(obj);
        }),
      ),
    );

  const list = [];
  let count = 1;
  const list2 = [];
  const count2 = 11;

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
    conclusionDes: JSON.parse(conclusionDes),
    observationsAndVerificationsData: JSON.parse(
      observationsAndVerificationsData,
    ),
    assessmentLossFields: JSON.parse(assessmentLossFields),
    observationsAndVerificationsAttach: JSON.parse(
      observationsAndVerificationsAttach,
    ),
    excelAttachment: JSON.parse(excelAttachment),
    conclusionTable: JSON.parse(conclusionTable),
    obsvrf: imglisturls,
    contable: imglisturls1,
    excelAttach: imglisturls2,
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

const posttypeb = asyncHandler(async (req, res) => {
  const {
    headerSectionData,
    conclusionTable,
    reportSection,
    assessmentLossFields,
    assessmentLossNotes,
  } = req.body;
  console.log(assessmentLossNotes);
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
  console.log(assessmentLossFields);

  const data = await TypeBReport.create({
    headerSectionData: JSON.parse(headerSectionData),
    conclusionTable: JSON.parse(conclusionTable),
    reportSection: JSON.parse(reportSection),
    assessmentLossFields: JSON.parse(assessmentLossFields),
    assessmentLossNotes: JSON.parse(assessmentLossNotes),
    contable: [
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

const getReportTypeB = asyncHandler(async (req, res) => {
  const data = await TypeBReport.find({});
  return res
    .status(200)
    .json(new ApiResponse(200, data, "data post succesffully"));
});
const getIndivisualReportTypeB = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const data = await TypeBReport.findById(id);
  return res
    .status(200)
    .json(new ApiResponse(200, data, "data post succesffully"));
});

const generateData = asyncHandler(async (req, res) => {
  const { input } = req.body;
  const genAI = new GoogleGenerativeAI(
    "AIzaSyCPPW9GPz4OrkBVSIS5DoZgb62b5Q3Nji4",
  );
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt =
    "i am anoop kumar a coder developer and investor 5 times hackathon winner write a detailed summary on me ";
  const result = await model.generateContent(input);
  const response = await result.response;
  const text = response.text();
  console.log(text);
  return res.status(200).json(new ApiResponse(200, text, "working properly"));
});
export {
  postReport,
  getReport,
  getIndivisualReport,
  posttypeb,
  getIndivisualReportTypeB,
  getReportTypeB,
  generateData,
};

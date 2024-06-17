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
    conclusionDes,
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
  let path11 = "";
  if (req.files?.img11 != undefined) {
    path11 = req.files?.img11[0]?.path;
  }
  let path12 = "";
  if (req.files?.img12 != undefined) {
    path12 = req.files?.img12[0]?.path;
  }
  let path13 = "";
  if (req.files?.img13 != undefined) {
    path13 = req.files?.img13[0]?.path;
  }
  let path14 = "";
  if (req.files?.img14 != undefined) {
    path14 = req.files?.img14[0]?.path;
  }
  let path15 = "";
  if (req.files?.img15 != undefined) {
    path15 = req.files?.img15[0]?.path;
  }
  let path16 = "";
  if (req.files?.img16 != undefined) {
    path16 = req.files?.img16[0]?.path;
  }
  let path17 = "";
  if (req.files?.img17 != undefined) {
    path17 = req.files?.img17[0]?.path;
  }
  let path18 = "";
  if (req.files?.img18 != undefined) {
    path18 = req.files?.img18[0]?.path;
  }
  let path19 = "";
  if (req.files?.img19 != undefined) {
    path19 = req.files?.img19[0]?.path;
  }
  let path20 = "";
  if (req.files?.img20 != undefined) {
    path20 = req.files?.img20[0]?.path;
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
  let url11 = await uploadOnCloudinary(path11);
  let url12 = await uploadOnCloudinary(path12);
  let url13 = await uploadOnCloudinary(path13);
  let url14 = await uploadOnCloudinary(path14);
  let url15 = await uploadOnCloudinary(path15);
  let url16 = await uploadOnCloudinary(path16);
  let url17 = await uploadOnCloudinary(path17);
  let url18 = await uploadOnCloudinary(path18);
  let url19 = await uploadOnCloudinary(path19);
  let url20 = await uploadOnCloudinary(path20);

  const list = [];
  let count = 1;
  const list2 = [];
  const count2 = 11;
  console.log(url6?.url);
  for (let i = 0; i < 10; i++) {
    // if (`url${i + 1}?`.url != undefined) {
    const obj = { imgurl: `url${count}`?.url };

    count = count + 1;
    list.push(obj);
    // }
  }
  // for (let i = 0; i < 10; i++) {
  //   if (`url${i + 11}`.url != undefined) {
  //     const obj = { imgurl: `url${count2++}`?.url };
  //     list2.concat(obj);
  //   }
  // }

  console.log(list);
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
    conclusionTable: JSON.parse(conclusionTable),
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
    contable: [
      { imgurl: url11?.url || "" },
      { imgurl: url12?.url || "" },
      { imgurl: url13?.url || "" },
      { imgurl: url14?.url || "" },
      { imgurl: url15?.url || "" },
      { imgurl: url16?.url || "" },
      { imgurl: url17?.url || "" },
      { imgurl: url18?.url || "" },
      { imgurl: url19?.url || "" },
      { imgurl: url20?.url || "" },
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

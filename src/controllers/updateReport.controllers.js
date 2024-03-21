import { ReportsData } from "../models/report.model.js";
import { TypeBReport } from "../models/typeb.model.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const updateTypeA = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const {
    headerSectionData,
    projectDescriptionData,
    policyParticularsData,
    observationsAndVerificationsData,
    assessmentLossTable,
    assessmentLossFields,
    policyParticularsFields,
    // observationsAndVerificationsAttach,
    assessmentLossNotes,
    assessmentLossDes,
    // conclusionTable,
    projectDescriptionTable,
    conclusionDes,
    causeOfLoss,
  } = req.body;

  const data = await ReportsData.findByIdAndUpdate(
    id,
    {
      $set: {
        headerSectionData: JSON.parse(headerSectionData),
        projectDescriptionData: JSON.parse(projectDescriptionData),
        policyParticularsData: JSON.parse(policyParticularsData),
        observationsAndVerificationsData: JSON.parse(
          observationsAndVerificationsData,
        ),
        assessmentLossTable: JSON.parse(assessmentLossTable),
        assessmentLossFields: JSON.parse(assessmentLossFields),
        policyParticularsFields: JSON.parse(policyParticularsFields),
        // observationsAndVerificationsAttach,
        assessmentLossNotes: JSON.parse(assessmentLossNotes),
        assessmentLossDes: JSON.parse(assessmentLossDes),
        // conclusionTable,
        projectDescriptionTable: JSON.parse(projectDescriptionTable),
        conclusionDes: JSON.parse(conclusionDes),
        causeOfLoss: JSON.parse(causeOfLoss),
      },
    },
    {
      new: true,
    },
  );
  return res
    .status(200)
    .json(new ApiResponse(200, data, "updated successfully"));
});

const updateTypeB = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const {
    headerSectionData,
    // conclusionTable,
    reportSection,
    assessmentLossFields,
    assessmentLossNotes,
  } = req.body;

  const data = await TypeBReport.findByIdAndUpdate(
    id,
    {
      $set: {
        headerSectionData: JSON.parse(headerSectionData),
        // projectDescriptionData: JSON.parse(projectDescriptionData),
        // policyParticularsData: JSON.parse(policyParticularsData),
        ////////////////////////////////// conclusionTable: JSON.parse(conclusionTable),
        reportSection: JSON.parse(reportSection),
        // observationsAndVerificationsData: JSON.parse(
        //   observationsAndVerificationsData,
        // ),
        // assessmentLossTable: JSON.parse(assessmentLossTable),
        assessmentLossFields: JSON.parse(assessmentLossFields),
        // policyParticularsFields: JSON.parse(policyParticularsFields),
        // observationsAndVerificationsAttach,
        assessmentLossNotes: JSON.parse(assessmentLossNotes),
        // assessmentLossDes: JSON.parse(assessmentLossDes),
        // conclusionTable,
        // projectDescriptionTable: JSON.parse(projectDescriptionTable),
        // conclusionDes: JSON.parse(conclusionDes),
        // causeOfLoss: JSON.parse(causeOfLoss),
      },
    },
    {
      new: true,
    },
  );
  return res
    .status(200)
    .json(new ApiResponse(200, data, "updated successfully"));
});

export { updateTypeA, updateTypeB };

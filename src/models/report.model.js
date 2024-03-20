import mongoose from "mongoose";

const ReportsDataSchema = new mongoose.Schema(
  {
    headerSectionData: [
      {
        name: String,
        reason: String,
      },
    ],
    projectDescriptionData: [
      {
        projectTitle: String,
        client: String,
        documentReference: String,
      },
    ],
    projectDescriptionTable: [
      {
        status: String,
        author: String,
        reviewer: String,
        distribution: String,
        mode: String,
        date: String,
      },
    ],
    policyParticularsData: [
      {
        insurer: String,
        insured: String,
        typesOfPolicy: String,
        policyNumber: String,
        periodOfInsurance: String,
        policyExcess: String,
      },
    ],
    policyParticularsFields: [
      {
        name: String,
      },
    ],
    observationsAndVerificationsData: [
      {
        introduction: String,
        conclusion: String,
      },
    ],
    causeOfLoss: [
      {
        causeOfLoss: String,
      },
    ],
    assessmentLossDes: [
      {
        des: String,
      },
    ],
    assessmentLossTable: [
      {
        description: String,
        claimAmout: String,
        assessmentAmount: String,
        field0: String,
        field1: String,
        field2: String,
        field3: String,
        field4: String,
      },
    ],
    assessmentLossNotes: [
      {
        ref: String,
        note: String,
      },
    ],
    observationsAndVerificationsAttach: [
      {
        description: String,
        title: String,
        attachmentUrl: String,
        attachmentImage: String,
      },
    ],

    assessmentLossFields: [
      {
        name: String,
      },
    ],

    obsvrf: [{ imgurl: String }],
  },
  { timestamps: true },
);

export const ReportsData = mongoose.model("ReportsData", ReportsDataSchema);

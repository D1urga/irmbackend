import mongoose from "mongoose";

const TypeBSchema = new mongoose.Schema(
  {
    headerSectionData: [
      {
        DraftName: String,
        DamagesTo: String,
        DraftHeadingAndAddress: String,
        DateOfIncident: String,
        DateOfSurvey: String,
      },
    ],
    conclusionTable: [
      {
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
    assessmentLossNotes: [
      {
        ref: String,
        note: String,
      },
    ],
    reportSection: [
      {
        description: String,
        report: String,
        action: String,
        replacement: String,
        depreciation: String,
        assessment: String,
        field0: String,
        field1: String,
        field2: String,
        field3: String,
        field4: String,
      },
    ],
    contable: [{ imgurl: String }],
  },
  { timestamps: true },
);

export const TypeBReport = mongoose.model("TypeBReport", TypeBSchema);

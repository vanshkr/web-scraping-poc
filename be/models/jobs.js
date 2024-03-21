import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  id: { type: String },
  job_id: { type: String },
  job_title: { type: String },
  company_name: { type: String },
  job_requirements: [String],
  job_apply_link: String,
  job_salary: String,
});

const Job = mongoose.model("Job", jobSchema);

export default Job;

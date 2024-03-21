import fetch from "node-fetch";
import Job from "./models/jobs.js";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

let start = 0;
const num = 10;
let baseURL = `https://aexp.eightfold.ai/api/apply/v2/jobs?domain=aexp.com&start=${start}&num=10&domain=aexp.com`;

const app = express();
dotenv.config();

const PORT = process.env.PORT || 7000;
const CONNECTION_URL = process.env.CONNECTION_URL;
app.get("/status", (req, res) => {
  res.send("Server is up and running!");
});

app.get("/jobs", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    console.error("Error fetching job data:", error);
    res.status(500).json({ error: "Error fetching job data" });
  }
});

async function fetchDataFromURL() {
  try {
    while (true) {
      baseURL = `https://aexp.eightfold.ai/api/apply/v2/jobs?domain=aexp.com&start=${start}&num=10&domain=aexp.com`;
      const response = await fetch(`${baseURL}`);
      if (!response.ok) {
        console.log(response);
        throw new Error("Error fetching data");
      }
      const jobsData = await response.json();

      start += num;
      if (!jobsData?.positions?.length) {
        break;
      }
      const jobPositions = jobsData.positions.map((job) => {
        return {
          id: job["id"],
          job_id: job["display_job_id"],
          job_title: job["name"],
          company_name: "Amex",
          job_location: job["location"],
          job_salary: "Competitive base salaries",
          job_requirements: [
            "3+ years of Java (or similar programming language) development experience in a complex environment, such as: large scale web infrastructure or development team",
            "Understanding of monitoring technologies including various logging frameworks and tooling",
          ],
          job_apply_link: job["canonicalPositionUrl"],
        };
      });
      await Job.insertMany(jobPositions);
      console.log("Job positions data saved successfully");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

mongoose
  .connect(process.env.DB_CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on PORT: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to database:", err.message);
    process.exit(1); // Exit with a non-zero code to indicate failure
  });

// fetchDataFromURL();

import React from "react";
import { TbBriefcaseFilled, TbPigMoney } from "react-icons/tb";
import { FaMapPin } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const App = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:7000/jobs")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setJobs(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="flex flex-wrap justify-center">
      {jobs.map((job) => (
        <div
          key={job._id}
          className="max-w-sm m-4 rounded overflow-hidden shadow-xl bg-white p-6"
        >
          <h2 className="text-lg font-bold text-blue-500">{job.job_title}</h2>
          <div className="flex items-center my-3 text-sm text-gray-700">
            <TbBriefcaseFilled className="h-5 w-5 mr-2" />
            <span>{job.company_name}</span>
          </div>
          <div className="flex items-center my-3 text-sm text-gray-700">
            <FaMapPin className="h-5 w-5 mr-2" />
            <span>{job?.job_location}</span>
          </div>
          <div className="flex items-center my-3 text-sm text-gray-700">
            <TbPigMoney className="h-5 w-5 mr-2" />
            <span>{job.job_salary}</span>
          </div>

          <div className="bg-gray-200 p-4 my-3">
            <h3 className="font-semibold text-gray-900">Requirements:</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm">
              {job.job_requirements.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul>
          </div>
          <a
            href={job.job_apply_link}
            className="border-2 bg-black border-black flex justify-center text-white"
          >
            Apply Now
          </a>
        </div>
      ))}
    </div>
  );
};
export default App;

import React from "react";
import { TbBriefcaseFilled } from "react-icons/tb";
import { FaMapPin } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const App = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/repos/facebook/react")
      .then((res) => res.json())
      .then((res) => setJobs(res.data));
  }, []);
  return (
    <div className="flex">
      <div className="max-w-sm m-4 rounded  overflow-hidden shadow-xl bg-white p-6">
        <h2 className="text-lg font-bold text-blue-500">
          Senior Analyst - Planning & Strategy
        </h2>
        <div className="flex items-center my-3 text-sm text-gray-700">
          <TbBriefcaseFilled className="h-5 w-5 mr-2" />
          <span>Pleo</span>
        </div>
        <div className="flex items-center my-3 text-sm text-gray-700">
          <FaMapPin className="h-5 w-5 mr-2" />
          <span>Remote - Chennai</span>
        </div>
        <div className="bg-gray-200 p-4 my-3">
          <h3 className="font-semibold text-gray-900">Description:</h3>
          <p className="text-gray-700 text-sm">
            Minimum of 2+ years experience in business/commercial analytics or
            finance, advanced proficiency in Excel or Gsheet, strong analytical
            skills, deep understanding of the SaaS industry, excellent verbal
            and written communication skills in...
          </p>
        </div>
        <a
          href="url"
          className="border-2 bg-black border-black flex justify-center text-white"
        >
          Apply Now
        </a>
      </div>
      <div className="max-w-sm m-4 rounded overflow-hidden shadow-xl bg-white p-6">
        <h2 className="text-lg font-bold text-blue-500">
          Senior Analyst - Planning & Strategy
        </h2>
        <div className="flex items-center my-3 text-sm text-gray-700">
          <TbBriefcaseFilled className="h-5 w-5 mr-2" />
          <span>Pleo</span>
        </div>
        <div className="flex items-center my-3 text-sm text-gray-700">
          <FaMapPin className="h-5 w-5 mr-2" />
          <span>Remote - Chennai</span>
        </div>

        <div className="bg-gray-200 p-4 my-3">
          <h3 className="font-semibold text-gray-900">Requirements:</h3>
          <p className="text-gray-700 text-sm">
            Minimum of 2+ years experience in business/commercial analytics or
            finance, advanced proficiency in Excel or Gsheet, strong analytical
            skills, deep understanding of the SaaS industry, excellent verbal
            and written communication skills in...
          </p>
        </div>
        <a
          href="url"
          className="border-2 bg-black border-black flex justify-center text-white"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};
export default App;

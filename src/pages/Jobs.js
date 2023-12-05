import React from "react";
import JobCard from "../components/reusable/JobCard";
import { useGetJobsQuery } from "../feature/job/jobApi";
import Loading from "../components/reusable/Loading";

const Jobs = () => {
  const { data, isLoading, isError, isSuccess } = useGetJobsQuery();
  console.log(data?.data);
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="pt-14">
      <div className="bg-primary/10 p-5 rounded-2xl">
        <h1 className="font-semibold text-xl">Find Jobs</h1>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-5">
        {data?.data?.map((job) => (
          <JobCard key={job._id} jobData={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default Jobs;

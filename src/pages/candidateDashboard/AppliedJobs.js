import React from "react";
import { useSelector } from "react-redux";
import { useGetAppliedJobsQuery } from "../../feature/job/jobApi";
import Loading from "../../components/reusable/Loading";
import JobCard from "../../components/reusable/JobCard";

const AppliedJobs = () => {
  const {
    user: { email },
  } = useSelector((state) => state.auth);
  const { data, isLoading } = useGetAppliedJobsQuery(email);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="text-xl py-5 px-4">Applied jobs</h1>
      <div className="grid grid-cols-2 gap-5 pb-5">
        {data?.data?.map((job) => (
          <JobCard jobData={job} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;

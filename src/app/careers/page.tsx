"use client";

import { useState, ChangeEvent, FormEvent, useMemo } from "react";
import { jobs } from "@/src/data/careers.data";
import CareersHeader from "@/src/components/pages/careers/CareersHeader";
import CareersJobList from "@/src/components/pages/careers/CareersJobList";
import CareersApplication from "@/src/components/pages/careers/CareersApplication";

export default function CareersPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);
  const [selectedFormJob, setSelectedFormJob] = useState<string>("");
  const [isSubmitting] = useState(false);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      if (activeFilter === "All") return true;
      const searchKeyword =
        activeFilter === "Onsite" ? "On-site" : activeFilter;
      return job.location.includes(searchKeyword);
    });
  }, [activeFilter]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0)
      setFileName(e.target.files[0].name);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  };

  const handleApplyClick = (e: React.MouseEvent, jobId: string) => {
    e.stopPropagation();
    setSelectedFormJob(jobId);
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-white text-zinc-900 pt-32 selection:bg-[#6748FE] selection:text-white">
      <CareersHeader />

      {/* <CareersBentoGrid /> */}

      <CareersJobList
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        filteredJobs={filteredJobs}
        expandedJobId={expandedJobId}
        setExpandedJobId={setExpandedJobId}
        handleApplyClick={handleApplyClick}
      />

      <CareersApplication
        filteredJobs={filteredJobs}
        selectedFormJob={selectedFormJob}
        setSelectedFormJob={setSelectedFormJob}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        isSubmitted={isSubmitted}
        fileName={fileName}
        handleFileChange={handleFileChange}
      />
    </main>
  );
}

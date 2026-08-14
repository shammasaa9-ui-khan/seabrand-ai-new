
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const filters = ["All", "Onsite", "Remote", "Hybrid"];

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

interface CareersJobListProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  filteredJobs: any[];
  expandedJobId: string | null;
  setExpandedJobId: (id: string | null) => void;
  handleApplyClick: (e: React.MouseEvent, jobId: string) => void;
}

export default function CareersJobList({
  activeFilter,
  setActiveFilter,
  filteredJobs,
  expandedJobId,
  setExpandedJobId,
  handleApplyClick,
}: CareersJobListProps) {
  return (
    <section className="w-full bg-[#F8FAFC] py-16 md:py-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          
          {/* Filters Section Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 pb-6 border-b border-slate-200 gap-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Open Roles</h2>
            <div className="flex flex-wrap items-center gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => {
                    setActiveFilter(filter);
                    setExpandedJobId(null);
                  }}
                  className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    activeFilter === filter
                      ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Job Cards */}
          <div className="flex flex-col gap-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => {
                const isExpanded = expandedJobId === job.id;

                return (
                  <div
                    key={job.id}
                    className="bg-white border border-slate-200/90 rounded-2xl shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 overflow-hidden"
                  >
                    {/* Header Row */}
                    <div
                      onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                      className="flex items-center justify-between p-6 md:p-8 cursor-pointer select-none group"
                    >
                      {/* Title & Metadata */}
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#6748FE] to-[#9b85ff] bg-clip-text text-transparent mb-1">
                          <span>{job.type}</span>
                          <span className="text-slate-300">•</span>
                          <span>{job.location}</span>
                        </div>
                        <p className="text-xl md:text-2xl font-bold text-slate-900">
                          {job.title}
                        </p>
                      </div>

                      {/* Right Chevron Toggle Button */}
                      <div className="w-9 h-9 rounded-full bg-slate-100 group-hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-all shrink-0 ml-4">
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                      </div>
                    </div>

                    {/* Expanded Content Panel */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 md:px-8 pb-8 pt-4 border-t border-slate-100">
                            <div className="max-w-3xl">
                              
                              {/* The Role */}
                              <h4 className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">The Role</h4>
                              <p className="text-slate-600 leading-relaxed mb-6 text-base md:text-lg">
                                {job.description}
                              </p>

                              {/* Requirements */}
                              <h4 className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider">Requirements</h4>
                              <ul className="list-disc list-inside text-slate-600 space-y-2 mb-8 text-base md:text-lg">
                                {job.requirements.map((req: string, i: number) => (
                                  <li key={i} className="leading-relaxed">{req}</li>
                                ))}
                              </ul>

                              {/* Apply Button */}
                              <button
                                onClick={(e) => handleApplyClick(e, job.id)}
                                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-7 py-3.5 rounded-xl text-sm font-bold shadow-sm transition-all duration-200 hover:shadow-md cursor-pointer"
                              >
                                <span>Apply Now</span>
                                <ArrowRight className="w-4 h-4" />
                              </button>

                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })
            ) : (
              <div className="py-16 text-center text-slate-400 font-medium text-sm md:text-base bg-white rounded-2xl border border-slate-200">
                No open positions found for this work style currently.
              </div>
            )}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
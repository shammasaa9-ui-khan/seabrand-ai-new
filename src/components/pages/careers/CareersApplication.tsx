
"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { UploadCloud, CheckCircle2, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CareersApplicationProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  filteredJobs: any[];
  selectedFormJob: string;
  setSelectedFormJob: (val: string) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isSubmitting: boolean;
  isSubmitted: boolean;
  fileName: string | null;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function CareersApplication({
  filteredJobs,
  selectedFormJob,
  setSelectedFormJob,
  handleSubmit,
  isSubmitting,
  isSubmitted,
  fileName,
  handleFileChange,
}: CareersApplicationProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section
      id="apply"
      className="bg-[#FFFFFF] text-[#111111] py-16 md:py-24 w-full"
    >
      <div className="w-full max-w-5xl mx-auto px-6">
        
        {/* Simple Centered Header: high tracking on mobile (0.1em), lower on desktop (0.02em) */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[0.1em] md:tracking-[0.02em] text-[#111111] mb-4">
            Ready to join?
          </h2>
          <p className="text-[#666666] text-base leading-relaxed">
            Send us your portfolio. If there isn&apos;t a role that fits right now,
            we&apos;ll keep you in mind for future openings.
          </p>
        </div>

        {/* Clean, Streamlined Form Card */}
        <div className="bg-[#FFFFFF] border border-[#EAEAEA] rounded-2xl p-8 md:p-12 shadow-sm max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#555555]">
                Full Name <span className="text-[#6748FE]">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl h-12 px-4 text-[#111111] text-sm focus:outline-none focus:border-[#6748FE] transition-colors placeholder:text-[#999999]"
                placeholder="Jane Doe"
              />
            </div>

            {/* Email Address */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#555555]">
                Email Address <span className="text-[#6748FE]">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl h-12 px-4 text-[#111111] text-sm focus:outline-none focus:border-[#6748FE] transition-colors placeholder:text-[#999999]"
                placeholder="jane@example.com"
              />
            </div>

            {/* Position */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#555555]">
                Position <span className="text-[#6748FE]">*</span>
              </label>

              <div className="relative">
                <input
                  type="hidden"
                  name="position"
                  value={selectedFormJob}
                  required
                />

                <div
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`w-full bg-[#FAFAFA] border rounded-xl h-12 px-4 transition-colors cursor-pointer flex justify-between items-center ${
                    isDropdownOpen ? "border-[#6748FE]" : "border-[#E5E5E5]"
                  }`}
                >
                  <span
                    className={`text-sm ${selectedFormJob ? "text-[#111111]" : "text-[#999999]"}`}
                  >
                    {selectedFormJob === "general"
                      ? "Open Application"
                      : filteredJobs.find((j) => j.id === selectedFormJob)
                          ?.title || "Select a role..."}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180 text-[#6748FE]" : "text-[#777777]"
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <>
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsDropdownOpen(false)}
                      />

                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 w-full mt-2 bg-white border border-[#E5E5E5] rounded-xl shadow-lg z-50 overflow-hidden"
                      >
                        <ul className="max-h-56 overflow-y-auto py-1">
                          {filteredJobs.map((job) => (
                            <li
                              key={job.id}
                              onClick={() => {
                                setSelectedFormJob(job.id);
                                setIsDropdownOpen(false);
                              }}
                              className={`px-4 py-2.5 text-sm cursor-pointer transition-colors flex items-center justify-between ${
                                selectedFormJob === job.id
                                  ? "bg-[#F5F2FF] text-[#6748FE] font-medium"
                                  : "text-[#555555] hover:bg-[#FAFAFA]"
                              }`}
                            >
                              <span>{job.title}</span>
                              {selectedFormJob === job.id && (
                                <CheckCircle2 className="w-4 h-4 text-[#6748FE]" />
                              )}
                            </li>
                          ))}

                          {filteredJobs.length > 0 && (
                            <div className="h-px bg-[#EFEFEF] my-1 mx-3" />
                          )}

                          <li
                            onClick={() => {
                              setSelectedFormJob("general");
                              setIsDropdownOpen(false);
                            }}
                            className={`px-4 py-2.5 text-sm cursor-pointer transition-colors flex items-center justify-between ${
                              selectedFormJob === "general"
                                ? "bg-[#F5F2FF] text-[#6748FE] font-medium"
                                : "text-[#555555] hover:bg-[#FAFAFA]"
                            }`}
                          >
                            <span>Open Application</span>
                            {selectedFormJob === "general" && (
                              <CheckCircle2 className="w-4 h-4 text-[#6748FE]" />
                            )}
                          </li>
                        </ul>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Resume Upload */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#555555]">
                Resume / CV <span className="text-[#6748FE]">*</span>
              </label>
              
              <label className="flex flex-col items-center justify-center w-full h-28 transition bg-[#FAFAFA] border border-dashed border-[#D5D5D5] rounded-xl cursor-pointer hover:border-[#6748FE] hover:bg-white group">
                <UploadCloud className="w-5 h-5 text-[#888888] group-hover:text-[#6748FE] mb-1.5 transition-colors" />
                <span className="text-sm font-medium text-[#666666] group-hover:text-[#6748FE] transition-colors">
                  {fileName ? (
                    <span className="text-[#6748FE]">{fileName}</span>
                  ) : (
                    "Click to attach file"
                  )}
                </span>
                <input
                  type="file"
                  name="resume"
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                  required
                  onChange={handleFileChange}
                />
              </label>
            </div>

            {/* Submit & Success */}
            <div className="flex flex-col gap-3 pt-2">
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full bg-[#111111] text-white h-12 rounded-xl font-medium text-sm transition-all disabled:opacity-70 flex items-center justify-center hover:bg-[#6748FE] cursor-pointer"
              >
                <span>{isSubmitting ? "Sending..." : "Submit Application"}</span>
              </button>

              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-emerald-900">
                          Application Sent Successfully!
                        </p>
                        <p className="text-xs text-emerald-700 mt-0.5">
                          Thank you for your interest. We will review your
                          profile and connect with you soon.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
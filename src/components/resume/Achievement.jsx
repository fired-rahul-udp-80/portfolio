import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  Award,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  FolderOpen,
} from "lucide-react";
import { CursorScrollEffect } from "../common";
import "./CertificateSection.css";

const Achievement = () => {
  const stats = [
    { label: "Internships Completed", value: "6+", icon: ShieldCheck },
    { label: "Technical Credentials", value: "10+", icon: Award },
    { label: "Top Academic CGPA", value: "9.2", icon: Sparkles },
    { label: "Verified Documents", value: "100%", icon: CheckCircle2 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col gap-8 font-bodyFont"
    >
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="text-xs md:text-sm text-designColor tracking-[4px] uppercase font-mono flex items-center gap-2">
            <Award className="w-4 h-4" />
            Verified Honors
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-titleFont text-white mt-1">
            Certifications
          </h2>
        </div>
      </div>

      {/* Quick Verified Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <CursorScrollEffect key={idx} className="w-full h-full">
              <div className="h-full p-4 md:p-5 bg-[#11141c]/90 border border-white/10 flex items-center gap-3.5 transition-all duration-300 hover:border-designColor/40 group">
                <div className="w-10 h-10 rounded-lg bg-designColor/10 border border-designColor/20 flex items-center justify-center text-designColor shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_12px_rgba(255,1,79,0.15)]">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold font-titleFont text-white group-hover:text-designColor transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-[11px] md:text-xs text-gray-400 font-mono">
                    {stat.label}
                  </div>
                </div>
              </div>
            </CursorScrollEffect>
          );
        })}
      </div>

      {/* Google Drive Link Call To Action Card */}
      <CursorScrollEffect className="w-full">
        <div className="w-full mt-2 p-8 md:p-10 bg-gradient-to-r from-[#11141c] via-[#161a24] to-[#11141c] border border-white/15 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300 hover:border-designColor/40">
          {/* Subtle decorative glow */}
          <div className="absolute -left-20 -bottom-20 w-52 h-52 bg-designColor/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center gap-5 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-designColor/10 border border-designColor/30 flex items-center justify-center text-designColor shrink-0 shadow-[0_0_15px_rgba(255,1,79,0.3)]">
              <FolderOpen className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold font-titleFont text-white">
                Official Certificates Repository
              </h3>
              <p className="text-xs md:text-sm text-gray-400 font-bodyFont mt-1 max-w-xl">
                Access all original verified certificates, internship completion letters, academic transcripts, and letters of recommendation in one place.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            to="https://drive.google.com/drive/u/1/folders/1eQ8uQJLOvj5svqQisTMT8lmd4yTEfddM"
            target="_blank"
            className="cert-btn-gradient shrink-0"
            aria-label="Open certificates in Google Drive"
          >
            <span className="cert-btn-inner">
              <span>View All on Google Drive</span>
              <ExternalLink className="w-4 h-4 text-designColor" />
            </span>
          </Link>
        </div>
      </CursorScrollEffect>
    </motion.div>
  );
};

export default Achievement;

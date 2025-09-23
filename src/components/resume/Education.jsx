import React from 'react'
import ResumeCard from './ResumeCard'
import { motion } from 'framer-motion'

const Education = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1, transition: { duration: 0.5 } }} 
      className="w-full gap-20"
    >
      <div>
        <div className="py-12 font-titleFont">  
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2026</p>
          <h2 className="text-4xl font-bold">Education Journey</h2>
        </div>

        <div className="w-full mt-14 lg:h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10">
          
          <ResumeCard
            title="B.Tech in Computer Science & Engineering"
            subTitle="Noida International University (2023 - 2026)"
            result="9.2 CGPA"
            des="Currently pursuing B.Tech in Computer Science & Engineering with focus on Full Stack Development, Distributed Systems, and Emerging Technologies. Actively working on academic projects and industry-oriented web applications."
          />

          <ResumeCard
            title="Diploma in Computer Science & Engineering"
            subTitle="Government Polytechnic Adityapur (2020 - 2023)"
            result="8.2 CGPA"
            des="Completed Diploma with a strong foundation in programming, database management, and networking. Successfully participated in technical competitions and gained practical skills in software development."
          />

          <ResumeCard
            title="Secondary Education (Matriculation)"
            subTitle="High School (2010 - 2020)"
            result="9.0 CGPA"
            des="Completed schooling with a focus on Science and Mathematics. Actively engaged in extra-curricular activities and developed problem-solving, teamwork, and leadership skills during this phase."
          />
        </div>
      </div>
    </motion.div>
  )
}

export default Education

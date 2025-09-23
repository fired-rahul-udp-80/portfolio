import React from 'react'
import ResumeCard from './ResumeCard'
import { motion } from 'framer-motion'
const Experience = () => {
  return (
    <motion.div initial ={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}} class="w-full flex lg:flex-row flex-col gap-20">
        <div className="">
                <div className="py-12 font-titleFont">  
                    <p className="text-sm text-designColor tracking-[4px]">2010 - 2020</p>
                    <h2 className="text-4xl font-bold">Experience Quality</h2>
                </div>
                <div className="w-full mt-14 h-full md:h-[1000px] border-l-[6px] border-black border-opacity-30
                    flex flex-col gap-10">
                    
                        <ResumeCard
                            title="Web Developer || Internship"
                            subTitle="Cognifyz Technologies PVT LTD (2023 - 2024)"
                            result ="CTI/A1/C13538"
                            des = "Higher education is tertiary education leading to award of an acedmic college."
                        />
                        <ResumeCard
                            title="Web Developer || Internship"
                            subTitle="Oasis Infobyte PVT LTD (2023 - 2024)"
                            result ="OIB/D1/IP472"
                            des = "Higher education is tertiary education leading to award of an acedmic college."
                        />
                        <ResumeCard
                            title="Web Developer || Internship"
                            subTitle="Bharat Intern GOV (2023 - 2024)"
                            result ="8.2CPGA"
                            des = "Higher education is tertiary education leading to award of an acedmic college."
                        />
                </div>
            </div>
        <div>
                <div className="">
                    <div className="py-12 font-titleFont">  
                        <p className="text-sm text-designColor tracking-[4px]">2010 - 2020</p>
                        <h2 className="text-4xl font-bold">Job Experience</h2>
                    </div>
                    <div className="w-full mt-14  lg:h-[1000px] border-l-[6px] border-black border-opacity-30
                        flex flex-col gap-10">
                        
                            <ResumeCard
                                title="Web Developer || Internship"
                                subTitle="Techoctanet Services PVT LTD (2023 - 2026)"
                                result ="8.2CPGA"
                                des = "Higher education is tertiary education leading to award of an acedmic college."
                            />
                            <ResumeCard
                                title="Web Developer || Internship"
                                subTitle="Code Clause PVT LTD (2023 - 2024)"
                                result ="8.2CPGA"
                                des = "Higher education is tertiary education leading to award of an acedmic college."
                            />
                            <ResumeCard
                                title="Web Developer || Internship"
                                subTitle="Innovixion Tech PVT LTD (2023 - 2026)"
                                result ="8.2CPGA"
                                des = "Higher education is tertiary education leading to award of an acedmic college."
                            />
                    </div>
                </div>
            </div>

    </motion.div>
  )
}

export default Experience
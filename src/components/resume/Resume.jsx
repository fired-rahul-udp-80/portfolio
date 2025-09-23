import React, { useState, useSyncExternalStore } from 'react'
import Title from '../layouts/Title'
import Education from './Education'
import Achievement from './Achievement'
import Experience from './Experience'
import Skills from './Skills'


const Resume = () => {
    const [educationData, setEducationData] = useState(true);
    const [skillsData, setSkillsData] = useState(false);
    const [experienceData, setExperienceData] = useState(false);
    const [achievementData, setAcheivementData] = useState(false);
  return (
    <section id="resume" className="w-full py-20 flex border-b-[1px] flex-col border-b-black" >
        <div class="">
            <Title
            title="1+ YEARS OF EXPERIENCE" des="MY Resume"/>
        </div>
        <div>
            <ul className="w-full grid sm:grid-cols-4 ">
                <li onClick={ () =>
                setEducationData(true)&
                setSkillsData(false)&
                setExperienceData(false)&
                setAcheivementData(false)
                } className={`${educationData ? "text-designColor bg-opacity-40" : "border-transparent"} resumeLi`}>Education</li>
                <li onClick={ () =>
                 setEducationData(false) &
                 setSkillsData(true)&
                 setAcheivementData(false)&
                 setExperienceData(false)
                }
                 className={`${skillsData ? "text-designColor bg-opacity-40" : "border-transparent"} resumeLi`}>Professional Skills</li>
                <li onClick={ () =>
                 setEducationData(false) &
                 setSkillsData(false)&
                 setAcheivementData(false)&
                 setExperienceData(true)
                } className={`${experienceData ? "text-designColor bg-opacity-40" : "border-transparent"} resumeLi`}>Experience</li>
                <li onClick={ () =>
                 setEducationData(false) &
                 setSkillsData(false)&
                 setAcheivementData(true)&
                 setExperienceData(false)
                }  className={`${achievementData ? "text-designColor bg-opacity-40" : "border-transparent"} resumeLi`}>Certification</li>
            </ul>
        </div>
        <div className="flex flex-col">

            {
                educationData && <Education/>
            }
            {
                skillsData && <Skills/>
            }
            {
                experienceData && <Experience/>
            }
            {
                achievementData && <Achievement/>
            }
            {/* <Education/> */}
            {/* <Achievement/> */}
            {/* <Experience/> */}
             {/* <Skills/> */}
        </div>
    </section>
  )
}

export default Resume

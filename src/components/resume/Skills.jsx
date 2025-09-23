import React from 'react'
import { motion } from 'framer-motion'
const Skills = () => {
  return (
    <motion.div initial ={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}} className="">
        <div className="w-full">
            <div className="py-12 font-titleFont">  
                <p className="text-sm text-designColor tracking-[4px]">Features</p>
                <h2 className="text-4xl font-bold">Professional Skills</h2>
            </div>
            <div className="mt-14 w-full">
            <div>
                    <p className="text-sm uppercase font-medium">Reactjs / Angualjs</p>
                    <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2 overflow-hidden">
                        <motion.span
                        initial ={{x : "-100%",opacity :0}}
                        animate ={{x : 0,opacity:1}}
                        transition ={{duration:0.5,delay:0.5}} className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500
                        to-red-500 rounded-md relative">
                            <span className="absolute -top-7 right-0">
                                90%
                            </span>
                        </motion.span>
                    </span>
                </div>
                <div>
                    <p className="text-sm uppercase font-medium">ExpressJs / NodeJs / MongoDB / MySQL</p>
                    <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2 overflow-hidden">
                        <motion.span
                        initial ={{x : "-100%",opacity :0}}
                        animate ={{x : 0,opacity:1}}
                        transition ={{duration:0.5,delay:0.5}}
                        className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500
                        to-red-500 rounded-md relative">
                            <span className="absolute -top-7 right-0">
                                90%
                            </span>
                        </motion.span>
                    </span>
                </div>
                <div>
                    <p className="text-sm uppercase font-medium">C Language</p>
                    <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2 overflow-hidden">
                        <motion.span
                        initial ={{x : "-100%",opacity :0}}
                        animate ={{x : 0,opacity:1}}
                        transition ={{duration:0.5,delay:0.5}}
                        className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500
                        to-red-500 rounded-md relative">
                            <span className="absolute -top-7 right-0">
                                80%
                            </span>
                        </motion.span>
                    </span>
                </div>

                <div>
                    <p className="text-sm uppercase font-medium">C++</p>
                    <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2 overflow-hidden">
                        <motion.span
                        initial ={{x : "-100%",opacity :0}}
                        animate ={{x : 0,opacity:1}}
                        transition ={{duration:0.5,delay:0.5}} className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500
                        to-red-500 rounded-md relative">
                            <span className="absolute -top-7 right-0">
                                80%
                            </span>
                        </motion.span>
                    </span>
                </div>

                <div>
                    <p className="text-sm uppercase font-medium">Java</p>
                    <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2 overflow-hidden">
                        <motion.span
                        initial ={{x : "-100%",opacity :0}}
                        animate ={{x : 0,opacity:1}}
                        transition ={{duration:0.5,delay:0.5}} className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500
                        to-red-500 rounded-md relative">
                            <span className="absolute -top-7 right-0">
                                90%
                            </span>
                        </motion.span>
                    </span>
                </div>

                <div>
                    <p className="text-sm uppercase font-medium">Graphic / PhotoShop / Figma / Canva</p>
                    <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2 overflow-hidden">
                        <motion.span
                        initial ={{x : "-100%",opacity :0}}
                        animate ={{x : 0,opacity:1}}
                        transition ={{duration:0.5,delay:0.5}} className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500
                        to-red-500 rounded-md relative">
                            <span className="absolute -top-7 right-0">
                                60%
                            </span>
                        </motion.span>
                    </span>
                </div>

                <div>
                    <p className="text-sm uppercase font-medium">Full Stack Development / MERN Stack</p>
                    <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2 overflow-hidden">
                        <motion.span
                        initial ={{x : "-100%",opacity :0}}
                        animate ={{x : 0,opacity:1}}
                        transition ={{duration:0.5,delay:0.5}} className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500
                        to-red-500 rounded-md relative">
                            <span className="absolute -top-7 right-0">
                                80%
                            </span>
                        </motion.span>
                    </span>
                </div>

                <div>
                    <p className="text-sm uppercase font-medium">Networking</p>
                    <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2 overflow-hidden">
                        <motion.span
                        initial ={{x : "-100%",opacity :0}}
                        animate ={{x : 0,opacity:1}}
                        transition ={{duration:0.5,delay:0.5}} className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500
                        to-red-500 rounded-md relative">
                            <span className="absolute -top-7 right-0">
                                60%
                            </span>
                        </motion.span>
                    </span>
                </div>

                <div>
                    <p className="text-sm uppercase font-medium"> DSA</p>
                    <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2 overflow-hidden">
                        <motion.span
                        initial ={{x : "-100%",opacity :0}}
                        animate ={{x : 0,opacity:1}}
                        transition ={{duration:0.5,delay:0.5}} className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500
                        to-red-500 rounded-md relative">
                            <span className="absolute -top-7 right-0">
                                70%
                            </span>
                        </motion.span>
                    </span>
                </div>
                 <div>
                    <p className="text-sm uppercase font-medium"> Wordpress Developer</p>
                    <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2 overflow-hidden">
                        <motion.span
                        initial ={{x : "-100%",opacity :0}}
                        animate ={{x : 0,opacity:1}}
                        transition ={{duration:0.5,delay:0.5}} className="w-[50%] h-full bg-gradient-to-r from-blue-600 via-pink-500
                        to-red-500 rounded-md relative">
                            <span className="absolute -top-7 right-0">
                                50%
                            </span>
                        </motion.span>
                    </span>
                </div>
            </div>
        </div>
         
    </motion.div>
  )
}

export default Skills
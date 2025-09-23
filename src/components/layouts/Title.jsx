import React from 'react'

const Title = ({title,des}) => {
  return (
    <div>
        <div className="flex flex-col gap-y-4 font-titleFont mb-16">
            <h3 className="text-sm uppercase font-light text-designColor tracking-wide font-titleFont">{title}</h3>
            <h1 className="text-3xl md:text-5xl text-gray-300 font-bold capitalize">{des}</h1>
         </div>
    </div>
  )
}

export default Title
/* eslint-disable jsx-a11y/alt-text */
import clsx from 'clsx'

import Project from '@/data/Project.json'

import Image from './Image'

function ProjectImage() {
  // const generateUrl = (url) => {
  //   return `https://res.cloudinary.com/raf-ar/image/upload/v1651370642/blog/projects/${url}.jpg`
  // }

  return (
    <div className="relative inset-x-0 flex justify-center gap-5  py-12 sm:gap-8">
      {Project.map((project, index) => (
        <div
          key={index}
          className={clsx(
            'relative aspect-[9/10] flex-none  overflow-clip   rounded-xl  sm:rounded-2xl ',
            {
              '-rotate-2': index % 2 === 0,
              'rotate-2': index % 2 === 1,
            }
          )}
        >
          <Image
            src={project.url}
            width={200}
            height={500}
            alt={project.name}
            className="absolute inset-0 h-full object-cover"
          />
        </div>
      ))}
    </div>
  )
}

export default ProjectImage

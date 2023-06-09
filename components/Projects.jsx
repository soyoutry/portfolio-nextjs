import React from 'react';
import spotitubeImg from '../public/assets/projects/spotitube.jpg';
import leetcodeImg from '../public/assets/projects/leetcode.jpg';
import DPMCImg from '../public/assets/projects/DPMC.jpg';
import applicationImg from '../public/assets/projects/application.jpg';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Spotitube'
            backgroundImg={spotitubeImg}
            projectUrl='/spotitube'
            tech='React JS, tailwindcss'
          />
          <ProjectItem
            title='Leetcode Solutions'
            backgroundImg={leetcodeImg}
            projectUrl='/leetcode'
            tech='Next JS'
          />
          <ProjectItem
            title='Data Platform Management Console'
            backgroundImg={DPMCImg}
            projectUrl='/DPMC'
            tech='React JS'
          />
          <ProjectItem
            title='Application Tracker'
            backgroundImg={applicationImg}
            projectUrl='/application'
            tech='React JS/Firebase'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

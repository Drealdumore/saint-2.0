"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { SkillCard } from "../cards/skill-card";
import {
  HTML,
  SCSS,
  TAILWIND,
  JAVASCRIPT,
  TYPESCRIPT,
  ANGULAR,
  NEXTJS,
  NODEJS,
  EXPRESSJS,
  GIT,
  FIREBASE,
  REACT,
  MongoDB,
  PostgreSQL,
  MySQL,
} from "@/lib/constants/icons";
import { motion } from "framer-motion";

interface SkillsInterface {
  id: number;
  icon?: any | null | undefined;
  skill?: string | null | undefined;
}

const Skills = () => {
  const pathName = usePathname();

  const skillsArray: SkillsInterface[] = [
    { id: 0, icon: <HTML />, skill: "HTML / CSS" },
    { id: 1, icon: <SCSS />, skill: "SCSS" },
    { id: 2, icon: <TAILWIND />, skill: "Tailwind CSS" },
    { id: 3, icon: <JAVASCRIPT />, skill: "JavaScript" },
    { id: 4, icon: <TYPESCRIPT />, skill: "TypeScript" },
    { id: 5, icon: <MySQL />, skill: "MySQL" },
    { id: 6, icon: <ANGULAR />, skill: "Angular" },
    { id: 7, icon: <REACT />, skill: "React" },
    { id: 8, icon: <NEXTJS />, skill: "NextJs" },
    { id: 9, icon: <NODEJS />, skill: "Node Js" },
    { id: 10, icon: <EXPRESSJS />, skill: "Express Js" },
    { id: 11, icon: <MongoDB />, skill: "MongoDB" },
    { id: 12, icon: <PostgreSQL />, skill: "Postgres" },
    { id: 13, icon: <GIT />, skill: "Git - Version Control" },
    { id: 14, icon: <FIREBASE />, skill: "Firebase" },
  ];

  const softSkills = [
    {
      title: "Active listening",
      desc: "My strength in listening listing enables me to fully engage with others, fostering effective communication.",
    },
    {
      title: "Effective Communication",
      desc: " I communicate complex technical concepts in a clear and understandable manner, fostering collaboration within the team.",
    },
    {
      title: "Problem-Solving",
      desc: " I excel at analyzing and resolving challenges, approaching problems with a logical and creative mindset.",
    },
    {
      title: "Attention to Detail",
      desc: " I meticulously review code and project details, ensuring high-quality work and minimizing errors.",
    },
    {
      title: "Adaptability",
      desc: " I thrive in dynamic environments, quickly adapting to new technologies and evolving project requirements.",
    },
    {
      title: "Continuous Learning",
      desc: " I am dedicated to staying abreast of industry trends, consistently upgrading my skills to deliver cutting-edge solutions.",
    },
    {
      title: "Time Management",
      desc: "I efficiently prioritize tasks, meeting deadlines and delivering projects within specified timelines.",
    },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.3 }}
        className="max-w-4xl w-full flex flex-col justify-between gap-6 items-center"
      >
        <div className="w-full mx-auto mt-6 rounded-xl flex flex-col gap-y-12 justify-center items-start">
          <div>
            {pathName === "/" && (
              <div className="w-full flex flex-col pb-8 gap-3 text-center">
                <div className="flex flex-col gap-2 mb-4">
                  <h1 className=" lg:text-[40px] font-semibold w-full font-cal text-[35px] leading-9">
                    MY TECH STACK
                  </h1>
                  <p className="font-medium text-neutral-500">
                    My expertise spans a diverse range of technologies enabling
                    me to deliver cutting-edge solutions across various
                    platforms.
                  </p>
                </div>
              </div>
            )}

            <div className="relative w-full">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4 items-center">
                {skillsArray.map((skill, index) => (
                  <SkillCard
                    key={index}
                    skill={skill.skill}
                    icon={skill.icon}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Skills;

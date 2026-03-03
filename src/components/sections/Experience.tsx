import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { TExperience } from "../../types";
import { config } from "../../constants/config";

const ExperienceCard: React.FC<TExperience> = (experience) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        borderRadius: "15px",
      }}
      contentArrowStyle={{ borderRight: "7px solid #1d1836" }}
      iconStyle={{
        background: experience.iconBg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      icon={
        <img
          src={experience.icon}
          alt={experience.companyName}
          className="h-[60%] w-[60%] object-contain"
        />
      }
    >
      <div>
        <h3 className="text-[18px] sm:text-[22px] font-bold text-white">
          {experience.title}
        </h3>
        <p className="text-secondary text-[14px] sm:text-[16px] font-semibold">
          {experience.companyName}
        </p>
      </div>

      <ul className="mt-4 space-y-2 list-disc ml-5">
        {experience.points.map((point, index) => (
          <li
            key={index}
            className="text-white-100 text-[13px] sm:text-[14px] leading-relaxed"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.experience} />

      <div className="mt-12 sm:mt-20">
        <VerticalTimeline
          lineColor="#2f2f2f"
          layout="1-column-left"
        >
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
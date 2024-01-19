import React, { useState } from "react";
import styled from "styled-components";
import {
  FaHtml5,
  FaSalesforce,
  FaJava,
  FaPlaneDeparture,
  FaPhp,
  FaPython,
  FaCss3,
} from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
const EmploymentHistoryComponent = () => {
  const jobData = [
    {
      position: "Salesforce Developer",
      company: "EMONICS",
      year: "09/2022 - Present",
      description:
        "Designing APIs, reviewing/debugging code, developing databases, coordinating large-scale deployments, utilizing NodeJS, ORM, and SQL/No-SQL, implementing/maintaining microservices architectures with Docker, Kubernetes, and OpenShift.",
      stack: "salesforce,html,css",
    },
    {
      position: "Salesforce Developer/Administrator",
      company: "REVATURE",
      year: "Apr 2020 - Sept 2022",
      description:
        "Implementing SOQL, SOSL, web services, APIs (SOAP or REST), Lightning Components, and Visualforce/Apex; configuring Salesforce security; utilizing declarative tools like ProcessBuilder and Flow; employing platform tools like Data Loader, Visual Source Code, and Workbench; creating sandboxes for safe code development and testing.",
      stack: "salesforce,html,css",
    },
    {
      position: "Salesforce Administrator",
      company: "SWISSPORT",
      year: "Oct 2018 - Feb 2020",
      description:
        "Gathering user requirements, participating in application design discussions, contributing to documentation; collaborating within an agile-based scrum model; providing technical consulting to Project Managers and architects; developing apex classes, controller classes, and apex triggers; designing custom objects, profiles, sharing rules, roles, and integrations; implementing out-of-the-box functionality for customer portals along with customizations; creating Visualforce pages for the customer portal using Visualforce templates and components.",
      stack: "salesforce",
    },
    {
      position: "IT Junior Specialist",
      company: "UNITED PARCEL SERVICE",
      year: "July 2016 - Feb 2018",
      description:
        "Diagnosing/resolving hardware and software issues; configuring/maintaining computer networks; managing server infrastructure; implementing cybersecurity best practices; providing technical support to end-users; planning/executing software deployments, updates, and patches; maintaining comprehensive documentation of IT systems; collaborating with cross-functional teams to assess technology needs and contribute to IT strategy and planning.",
      stack: "it",
    },
    // Add more job entries as needed
  ];
  const [numberOfJobs, setNumberOfJobs] = useState(2);
  const handleHideEmployment = () => {
    setNumberOfJobs(numberOfJobs + 2);
  };

  return (
    <Wrapper>
      {jobData.map(
        (job, index) =>
          index < numberOfJobs && (
            <JobEntry
              key={`job-entry-${index}-${job.company}`}
              isOnRight={index % 2 === 0}
            >
              <ContentWrapper
                key={`content-wrapper-${index}-${job.company}`}
                isOnRight={index % 2 === 0}
              >
                <EmploymentWrapper>
                  <FaPlaneDeparture />
                  <Position>{job.position}</Position>
                  <Company>{job.company}</Company>
                  <Year>{job.year}</Year>
                </EmploymentWrapper>
                <TechStackWrapper isOnRight={index % 2 === 0}>
                  {job.stack && <TechStack>Tech Stack</TechStack>}
                  <TechStackIcons>
                    {job.stack.split(",").includes("java") && <FaJava />}
                    {job.stack.split(",").includes("html") && <FaHtml5 />}
                    {job.stack.split(",").includes("php") && <FaPhp />}
                    {job.stack.split(",").includes("python") && <FaPython />}
                    {job.stack.split(",").includes("css") && <FaCss3 />}
                    {job.stack.split(",").includes("salesforce") && (
                      <FaSalesforce />
                    )}
                    {job.stack.split(",").includes("it") && <FaComputer />}
                  </TechStackIcons>
                </TechStackWrapper>
              </ContentWrapper>
              {job.description.split(";").map((sentence, idx) => (
                <React.Fragment key={`description-fragment-${idx}`}>
                  <ListIcon
                    key={`list-icon-${idx}`}
                    isOnRight={index % 2 === 0}
                  />
                  <Description key={`desc-${idx}`} isOnRight={index % 2 === 0}>
                    {sentence}
                  </Description>
                </React.Fragment>
              ))}
            </JobEntry>
          )
      )}
      {numberOfJobs < jobData.length && (
        <Button key="show-more-button" onClick={handleHideEmployment}>
          Show More
        </Button>
      )}
    </Wrapper>
  );
};

const EmploymentWrapper = styled.div`
  // Your styles here
`;

const TechStackWrapper = styled.div`
  // Your styles here
  display: flex;
  flex-direction: ${({ isOnRight }) => (!isOnRight ? "row-reverse" : "")};
`;

const TechStack = styled.div`
  // Your styles here
  /* Optionally, you can also adjust the transform-origin */

  color: #403b3b;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  position: relative;
  width: 50px;
  margin: 2px;
`;
const TechStackIcons = styled.div`
  // Your styles here
  font-size: 44px;
  color: #403b3b;
  flex-wrap: nowrap;
  display: flex;
`;

const Button = styled.div`
  // Your styles here
  padding: 11px 23px;
  text-align: center;
  font-size: 15px;
  background-color: #141414;
  border-radius: 26px;
  -webkit-transition: all 0.7s, color 0.7s;
  transition: all 0.7s, color 0.7s;
  cursor: pointer;
  border: #ffffff1f solid 1px;
  margin: 0px 115px 25px 115px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Spline Sans Mono", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: white;
  width: 100%;
`;
const ListIcon = styled.li`
  list-style: cjk-earthly-branch;
  position: relative;
  right: ${({ isOnRight }) => (!isOnRight ? "2px" : "-35px")};
  margin: 0;
  padding: 0;
`;
const JobEntry = styled.div`
  display: flex;
  background-color: #141414;
  gap: 20px;
  border-left: ${({ isOnRight }) => (isOnRight ? "1px solid white" : "none")};
  border-right: ${({ isOnRight }) => (!isOnRight ? "1px solid white" : "none")};
  flex-flow: ${({ isOnRight }) => (!isOnRight ? "row-reverse" : "none")};
  padding: 20px;
  margin-bottom: 20px;
  overflow: scroll;
  position: relative;
`;

const ContentWrapper = styled.div`
  flex: 1;
  text-align: ${({ isOnRight }) => (isOnRight ? "start" : "end")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Position = styled.div`
  font-size: 18px;
  margin-bottom: 5px;
  line-height: 1.2;
`;

const Company = styled.div`
  font-size: 16px;
  margin-bottom: 5px;
  color: #b9b4ae;
`;

const Year = styled.div`
  font-size: 14px;
  color: #888;
  line-height: 1.2;
  text-wrap: nowrap;
`;

const Description = styled.div`
  flex: 1;
  font-size: 16px;
  margin-left: 0;
  line-height: 1.3;
  margin-left: ${({ isOnRight }) => (isOnRight ? "20px" : "0")};
  text-align: ${({ isOnRight }) => (isOnRight ? "start" : "end")};
  @media screen and (min-width: 999px) {
    font-size: 18px;
  }
`;

export default EmploymentHistoryComponent;

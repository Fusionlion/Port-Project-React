import React from "react";
import styled from "styled-components";

const EmploymentHistoryComponent = () => {
  const jobData = [
    {
      position: "Software Developer",
      company: "Tech Solutions Inc.",
      year: "2018 - 2020",
      description: "Worked on various projects",
    },
    {
      position: "Frontend Engineer",
      company: "Web Innovations Co.",
      year: "2016 - 2018",
      description: "Contributed to web development tasks",
    },
    // Add more job entries as needed
  ];

  return (
    <Wrapper>
      {jobData.map((job, index) => (
        <JobEntry key={index} isOnRight={index % 2 === 0}>
          <ContentWrapper>
            <Position>{job.position}</Position>
            <Company>{job.company}</Company>
            <Year>{job.year}</Year>
          </ContentWrapper>
          <Description>{job.description}</Description>
        </JobEntry>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Spline Sans Mono", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: white;
`;

const JobEntry = styled.div`
  display: flex;
  background-color: #141414;
  border-left: ${({ isOnRight }) => (isOnRight ? "1px solid white" : "none")};
  border-right: ${({ isOnRight }) => (!isOnRight ? "1px solid white" : "none")};
  flex-flow: ${({ isOnRight }) => (!isOnRight ? "row-reverse" : "none")};
  padding: 20px;
  margin-bottom: 20px;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const Position = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 5px;
`;

const Company = styled.div`
  font-size: 16px;
  margin-bottom: 5px;
`;

const Year = styled.div`
  font-size: 14px;
  color: #888;
`;

const Description = styled.div`
  flex: 1;
  font-size: 16px;
  margin-left: ${({ isOnRight }) => (isOnRight ? "20px" : "0")};
`;

export default EmploymentHistoryComponent;

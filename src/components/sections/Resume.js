import React, { useState } from "react";
import styled from "styled-components";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { BsPersonBadge } from "react-icons/bs";
import { BsPersonWorkspace } from "react-icons/bs";
import { IoSchoolOutline } from "react-icons/io5";
import CertificateComponent from "../mobileSections/CertificateComponent";
import DownloadButton from "../mobileSections/ResumeDownloader";
import { FaToggleOff } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa";

function Resume() {
  // State to track the current mode (light or dark)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle between light and dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <Wrapper isDarkMode={isDarkMode}>
      <div className="resume-header">
        <div className="left-resume-header">
          <div className="name">Zablon Charles</div>
          <div className="position">
            <BsPersonBadge />
            /Salesforce Developer | <MdEmail />
            /ZablonCharles@gmail.com | <MdPhone />
            /201-267-5068
          </div>
          <li className="career-summary">
            Certified Salesforce Administrator and Salesforce Developer with a
            background in Software Development, Project Management, and Data
            Analytics. An organized and result-driven individual with good
            communication and analytical skills. Skilled in working with
            Salesforce both declaratively and programmatically, and solving
            business problems with an analytical approach.
          </li>
          <DownloadButton isDarkMode={isDarkMode} />

          <ResumeDark onClick={toggleDarkMode} isDarkMode={isDarkMode}>
            <p>{isDarkMode === true ? "Dark" : "Light"} Mode</p>
            {isDarkMode && <FaToggleOff />}
            {!isDarkMode && <FaToggleOn />}
          </ResumeDark>
        </div>
      </div>
      <div className="left-and-right-resume">
        <div className="resume-left">
          <div className="school-section">
            <div className="resume-info">
              <div className="work-title">Education</div>
              <div className="school">Saint Peter's University</div>
              <div className="resume-year">November 2017 - October 2020</div>
              <IoSchoolOutline />
            </div>
            <li className="resume-year">
              Bachelor's Degree - Computer Science
            </li>
            <li className="study">Bachelor of Science in Computer Science</li>
          </div>
          <div className="work-experience">
            {/* indivdiual company */}
            <div className="company">
              <div className="resume-info">
                <div className="work-title">Emonics </div>
                <div className="school">Salesforce Developer</div>
                <div className="resume-year">September 2022 - Current</div>
                <BsPersonWorkspace />
              </div>
              <li>
                Designed and developed custom solutions and applications on the
                Salesforce platform.
              </li>
              <li>
                Integrated Salesforce with other enterprise applications and
                systems.
              </li>
              <li>
                Built and maintained Salesforce customizations, including but
                not limited to custom fields, validation rules, workflows,
                custom objects, and Apex code.
              </li>
              <li>
                Performed data migrations and managed data quality in
                Salesforce.
              </li>
              <li>
                Provided technical guidance and support to team members and
                end-users.
              </li>
              <li>
                Conducted thorough testing and debugging of Salesforce
                applications.
              </li>
              <li>
                Collaborated with other developers to create effective solutions
                for the business.
              </li>
            </div>

            {/* indivdiual company */}
            <div className="company">
              <div className="resume-info">
                <div className="work-title">Revature</div>
                <div className="school">Salesforce Developer/Administrator</div>
                <div className="resume-year">
                  November 2020 - September 2022
                </div>
                <BsPersonWorkspace />
              </div>

              <li>
                Designed and implemented custom Salesforce applications using
                Apex, Visualforce, Lightning Components, and other Salesforce
                development tools.
              </li>
              <li>
                Collaborated with business analysts, stakeholders, and other
                technical team members to gather and analyze requirements for
                Salesforce solutions.
              </li>
              <li>
                Developed and maintained integrations between Salesforce and
                other systems using technologies such as REST/SOAP APIs and
                middleware platforms.
              </li>
              <li>
                Customized and configured Salesforce features such as workflows,
                process builder, and validation rules to meet business needs.
              </li>
              <li>
                Provided technical leadership and guidance to junior developers
                and contributed to the overall technical architecture and design
                of Salesforce solutions.
              </li>
              <li>
                Troubleshot and resolved issues related to Salesforce
                customizations, integrations, and configurations.
              </li>
              <li>
                Kept abreast of Salesforce platform updates and new features and
                evaluated their impact on existing solutions.
              </li>
            </div>
            {/* indivdiual company */}
            <div className="company">
              <div className="resume-info">
                <div className="work-title">SWISSPORT, LLC </div>
                <div className="school">Salesforce Administrator</div>
                <div className="resume-year">November 2018 - October 2020</div>
                <BsPersonWorkspace />
              </div>

              <li>
                Collaborated with cross-functional teams to comprehensively
                understand business requirements for the implementation of
                Salesforce Service Cloud and Field Service Lightning (FSL).
              </li>
              <li>
                Designed, developed, tested, and deployed tailored solutions and
                enhancements within the Salesforce platform, aligning with the
                specific needs of our solar services business.
              </li>
              <li>
                Customized and optimized Salesforce Service Cloud to address the
                unique requirements of our service-oriented operations.
              </li>
              <li>
                Implemented and maintained seamless integrations with other
                systems, ensuring data consistency and accuracy throughout our
                Salesforce environment.
              </li>
              <li>
                Developed and managed Visualforce pages, Apex classes, triggers,
                and Lightning components to enhance the functionality of our
                Salesforce instance.
              </li>
              <li>
                Monitored network performance and analyzed system logs to
                identify potential issues and implement solutions.
              </li>
              <li>
                Developed and maintained documentation and user manuals for IT
                systems and applications.
              </li>
              <li>
                Provided technical expertise and support to resolve issues,
                offering troubleshooting for system errors and ensuring the
                smooth operation of Salesforce solutions.
              </li>
              <li>
                Remained current with the latest advancements in Salesforce
                technologies and best practices, continuously assessing their
                impact on our existing Salesforce implementation.
              </li>
            </div>
            {/* indivdiual company */}
            <div className="company">
              <div className="resume-info">
                <div className="work-title">Saint Peter’s University </div>
                <div className="school">IT Intern</div>
                <div className="resume-year">January 2017 - June 2018</div>
                <BsPersonWorkspace />
              </div>

              <li>
                Installed and configured hardware and software systems,
                including servers, workstations, and peripherals.
              </li>
              <li>
                Troubleshooted and resolved hardware and software issues for
                end-users, including diagnosing network and connectivity
                problems.
              </li>
              <li>
                Maintained and updated network security measures, including
                firewalls and anti-virus software.
              </li>
              <li>
                Conducted regular system backups and disaster recovery tests to
                ensure system integrity and data protection.
              </li>
              <li>
                Collaborated with cross-functional teams to implement new
                technologies and software applications.
              </li>
              <li>
                Monitored network performance and analyzed system logs to
                identify potential issues and implement solutions.
              </li>
              <li>
                Developed and maintained documentation and user manuals for IT
                systems and applications.
              </li>
              <li>
                Provided training and technical support to end-users to enhance
                their proficiency and productivity.
              </li>
              <li>
                Implemented IT policies and procedures to ensure compliance with
                industry standards and regulations.
              </li>
              <li>
                Managed and coordinated IT projects from conception to
                completion, ensuring timely and successful delivery.
              </li>
            </div>
            <div className="resume-certifications">
              <div className="resume-info-2">
                <div className="work-title">Certifications</div>
                <li className="study">Salesforce Administrator</li>
                <li className="study">Salesforce Developer</li>
                <li className="study">Full-Stack Java Developer</li>
              </div>
            </div>
          </div>
        </div>
        <div className="resume-right">
          <div className="resume-skills">
            Skills
            <li className="resume-skill">Java</li>
            <li className="resume-skill">Apex</li>
            <li className="resume-skill">Salesforce</li>
            <li className="resume-skill">Python</li>
            <li className="resume-skill">Administration</li>
            <li className="resume-skill">User Setup & Config</li>
            <li className="resume-skill">Platform App Builder</li>
          </div>
          <div className="resume-social">
            LinkedIn
            <li className="resume-social-link">
              https://www.linkedin.com/in/zablon-charles-a94530104/
            </li>
          </div>
          <div className="resume-skills">
            Tech Stack
            <li className="resume-social-link">
              Spring, JMS, JSF, Struts, XML, Webservices, SOAP,J2EE Web
              Services,AngularJS,SOAP,React,Tomcat,JQuery,Java, Python,
              Apex,React, Gatsby, Javascript, Visualforce, Lightning Web
              Components, Sosl, Sql, Salesforce DX, and Salesforce APIs.
            </li>
            <li className="resume-social-link">
              Eclipse & IntelliJ IDEA, Maven, Spring, Hibernate, Tomcat, Git,
              Jenkins, MySQL
            </li>
          </div>

          <CertificateComponent spread="column" />
        </div>
      </div>
    </Wrapper>
  );
}

export default Resume;
const ResumeDark = styled.div`
  // Your styles here
  position: absolute;
  right: 50px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 19px;
  border: 1px solid ${(props) => (props.isDarkMode ? "#272424" : "#141414")};
  padding: 10px 15px;
  border-radius: 26px;
  & :hover {
    border: 1px solid #302e2e;
    padding: 10px 15px;
    background: #58626240;
    cursor: pointer;
  }
  > :nth-child(2) {
    color: aquamarine;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.isDarkMode ? "#141414" : "aliceblue")};

  font-family: "Spline Sans Mono", sans-serif;
  height: 100%;
  width: 100%;
  border-radius: 16px;
  padding: 0px 20px;
  margin-top: 20px;
  color: ${(props) => (props.isDarkMode ? "white" : "black")};
  padding-bottom: 50px;
  border: 1px #272424 solid;
  .career-summary {
    font-size: medium;
  }
  .resume-header {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px black solid;
    padding: 30px 0px;
    flex-direction: column;
  }
  .left-resume-header {
    display: flex;
    flex-direction: column;
    color: ${(props) => (props.isDarkMode ? "white" : "black")};
    line-height: 1.5;
    font-size: larger;
    text-align: center;
    align-items: center;
    .name {
      font-family: "cisnero";
      text-align: center;
      background: linear-gradient(to right, rgb(0 228 255), rgb(253 255 255));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 5px 9px 11px #000000, 1px -1px 0px #4f0000;
      font-size: 45px;
    }
    .position {
      align-items: center;
    }
  }
  .edu-info {
    display: flex;
    flex-direction: column;
    line-height: 1.5;
    padding-bottom: 20px;
  }
  .resume-info {
    display: flex;
    flex-direction: column;
    line-height: 1.5;
    border-radius: 12px;
    padding: 10px;
    position: relative;
    border: 1px solid #302e2e;
    background: ${(props) => (!props.isDarkMode ? "aliceblue" : "#141414")};
    box-shadow: 6px 6px 12px
        ${(props) => (!props.isDarkMode ? "aliceblue" : "#111111")},
      -2px -5px 9px ${(props) => (!props.isDarkMode ? "aliceblue" : "#191717")};
    > :nth-child(4) {
      position: absolute;
      color: #302e2e;
      top: 50%;
      right: 0;
      transform: translate(-50%, -50%);
      font-size: 38px;
    }
    .resume-year {
      color: #b90000;
    }
  }
  .resume-info-2 {
    display: flex;
    flex-direction: column;
    line-height: 1.5;
    border-radius: 12px;
    padding: 10px;
    position: relative;
    border: 1px solid #302e2e;
    background: ${(props) => (!props.isDarkMode ? "aliceblue" : "#141414")};
    box-shadow: 6px 6px 12px
        ${(props) => (!props.isDarkMode ? "aliceblue" : "#111111")},
      -2px -5px 9px ${(props) => (!props.isDarkMode ? "aliceblue" : "#191717")};

    .resume-year {
      color: #b90000;
    }
  }

  .right-resume-header {
    display: flex;
    flex-direction: column;
    text-align: center;
    color: ${(props) => (props.isDarkMode ? "white" : "black")};

    line-height: 1.5;
    .email {
    }
    .phone {
    }
  }

  .left-and-right-resume {
    display: flex;
    justify-content: space-between;
  }
  .resume-left {
    display: flex;
    flex-direction: column;
    padding-right: 20px;
    border-right: solid black 1px;
    flex: 1;
  }
  .school-section {
    padding: 20px 0px;
  }
  .education {
  }
  .work-experience {
    gap: 28px;
    display: flex;
    flex-direction: column;
  }
  .resume-right {
    display: flex;
    flex-direction: column;
    padding: 20px 20px;
    gap: 20px;
    flex: 0.05;
    flex-wrap: wrap;
  }
  .work-title {
    font-family: "ACCELERARE", sans-serif;
    font-size: 18px;
    color: ${(props) => (props.isDarkMode ? "white" : "black")};
    text-transform: uppercase;
  }
  .resume-skills {
    gap: 20px;
  }
  .resume-social {
  }
  .resume-certifications {
    border-top: 2px black solid;
  }
  li {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 15px;
    gap: 20px;
    list-style: hangul;
    line-height: 1.5;
  }
`;

import React from "react";
import styled from "styled-components";
function Resume() {
  return (
    <Wrapper>
      <div className="resume-header">
        <div className="left-resume-header">
          <div className="name">Zablon Charles</div>
          <div className="position">Software Engineer</div>
          <li className="career-summary">
            Certified Salesforce Administrator and Salesforce Developer with a
            background in Software Development, Project Management, and Data
            Analytics. An organized and result-driven individual with good
            communication and analytical skills. Skilled in working with
            Salesforce both declaratively and programmatically, and solving
            business problems with an analytical approach.
          </li>
        </div>
        <div className="right-resume-header">
          <div className="email">ZablonCharles@gmail.com</div>
          <div className="phone">201.267.5068</div>
        </div>
      </div>
      <div className="left-and-right-resume">
        <div className="resume-left">
          <div className="edu-info">
            <div className="work-title">Education</div>
            <div className="school">Saint Peter's University</div>
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

                <li>
                  Collaborated with cross-functional teams to comprehensively
                  understand business requirements for the implementation of
                  Salesforce Service Cloud and Field Service Lightning (FSL).
                </li>
                <li>
                  Designed, developed, tested, and deployed tailored solutions
                  and enhancements within the Salesforce platform, aligning with
                  the specific needs of our solar services business.
                </li>
                <li>
                  Customized and optimized Salesforce Service Cloud to address
                  the unique requirements of our service-oriented operations.
                </li>
                <li>
                  Implemented and maintained seamless integrations with other
                  systems, ensuring data consistency and accuracy throughout our
                  Salesforce environment.
                </li>
                <li>
                  Developed and managed Visualforce pages, Apex classes,
                  triggers, and Lightning components to enhance the
                  functionality of our Salesforce instance.
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
            </div>
            {/* indivdiual company */}
            <div className="company">
              <div className="resume-info">
                <div className="work-title">Saint Peter’s University </div>
                <div className="school">IT Intern</div>
                <div className="resume-year">January 2017 - June 2018</div>
                <div className="study">
                  Bachelor of Science in Computer Science
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
                  Conducted regular system backups and disaster recovery tests
                  to ensure system integrity and data protection.
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
                  Provided training and technical support to end-users to
                  enhance their proficiency and productivity.
                </li>
                <li>
                  Implemented IT policies and procedures to ensure compliance
                  with industry standards and regulations.
                </li>
                <li>
                  Managed and coordinated IT projects from conception to
                  completion, ensuring timely and successful delivery.
                </li>
              </div>
            </div>
            <div className="resume-certifications">
              <div className="resume-info">
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
        </div>
      </div>
    </Wrapper>
  );
}

export default Resume;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #141414;
  font-family: "Spline Sans Mono", sans-serif;
  height: 100%;
  width: 100%;
  border-radius: 16px;
  padding: 0px 20px;
  margin-top: 20px;
  color: white;
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
  }
  .left-resume-header {
    display: flex;
    flex-direction: column;
    color: white;
    line-height: 1.5;
    font-size: larger;
    .name {
    }
    .position {
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
    .resume-year {
      color: #b90000;
    }
  }

  .right-resume-header {
    display: flex;
    flex-direction: column;
    color: white;
    text-align: end;
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
    color: white;
    text-transform: uppercase;
    margin-top: 10px;
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
  }
`;

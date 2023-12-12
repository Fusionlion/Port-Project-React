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
            As a seasoned developer, I bring over four years of experience
            in designing,developing, and delivering user-centric software
            applications using JAVA/J2EE and Salesforce CRM technologies.. My commitment is to
            contribute valuable skills and experience to dynamic projects across full cycle development.
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
                <div className="school">
                  Software Developer - Java Full Stack Developer
                </div>
                <div className="resume-year">September 2022 - Current</div>
                <div className="study">
                  Bachelor of Science in Computer Science
                </div>
              </div>
              <li>
                Developed 2 high-quality software and web applications with 3
                interns and a senior developer.
              </li>
              <li>Analyzed and maintained 4 existing software applications.</li>
              <li>
                Designed highly scalable, testable code with 96% positive
                feedback from mentors.
              </li>
              <li>Discovered and fixed programming bugs.</li>
              <li>
                Collaborated with 3 designers, 2 managers, and other developers
                across the project teams.
              </li>
              <li>
                Worked with Quality Assurance team to determine if applications
                fit specification and technical requirements.
              </li>
              <li>
                Maintained the security and integrity of software and web
                applications.
              </li>
            </div>

            {/* indivdiual company */}
            <div className="company">
              <div className="resume-info">
                <div className="work-title">Revature</div>
                <div className="school">
                  Software Developer - Java Developer
                </div>
                <div className="resume-year">
                  November 2018 - September 2022
                </div>
                <div className="study">
                  Bachelor of Science in Computer Science
                </div>
              </div>

              <li>
                Wrote, tested, and maintained high-quality, efficient code in
                Java.
              </li>
              <li>
                Designed and implemented software solutions based on specified
                requirements.
              </li>
              <li>
                Worked closely with team members to troubleshoot and debug code.
              </li>
              <li>
                Continuously improved software development skills and stayed
                up-to-date with the latest technologies.
              </li>
              <li>
                Collaborated with cross-functional teams to ensure smooth
                deployment and operation of software.
              </li>
              <li>
                Participated in code reviews to ensure code quality and
                adherence to standards.
              </li>
              <li>Developed and maintained technical documentation.</li>
              <li>
                Contributed to the development and execution of project plans.
              </li>
              <li>Met project deadlines and deliverables.</li>
              <li>
                Ensured that software met all requirements and was reliable,
                scalable, and maintainable.
              </li>
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
            <li className="resume-skill">C++</li>
            <li className="resume-skill">Python</li>
          </div>
          <div className="resume-social">
            LinkedIn
            <li className="resume-social-link">LinkedIn</li>
          </div>
          <div className="resume-skills">
            Tech Stack
            <li className="resume-social-link">
              Spring, JMS, JSF, Struts, XML, Webservices, SOAP,J2EE Web
              Services,AngularJS,SOAP,React,Tomcat,JQuery
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
  background-color: white;
  font-family: "Spline Sans Mono", sans-serif;
  height: 100%;
  width: 100%;
  border-radius: 16px;
  padding: 0px 20px;
  color: black !important;
  padding-bottom: 50px;
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
    color: black;
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
    color: black;
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
    color: black;
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

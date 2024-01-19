import React from "react";
import { useState } from "react";
import styled from "styled-components";

const certificatesData = [
  {
    title: "Full Stack Java Development",
    icon: "https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png",
    description:
      "Earned certification in Full Stack Java Development, covering backend and frontend technologies.",
    date: "Issued on January 15, 2022",
  },
  {
    title: "Salesforce Developer Certification",
    icon:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png",
    description:
      "Achieved certification as a Salesforce Developer, demonstrating proficiency in Salesforce platform development.",
    date: "Issued on February 28, 2022",
  },
  {
    title: "Front-End Design Fundamentals",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174854.png",
    description:
      "Completed a course in Front-End Design, mastering the principles of user interface and experience design.",
    date: "Issued on March 10, 2022",
  },
  {
    title: "React.js Developer Certification",
    icon:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    description:
      "Attained certification as a React.js Developer, showcasing expertise in building dynamic and responsive web applications.",
    date: "Issued on April 5, 2022",
  },
];

const CertificateComponent = () => {
  const [visibleCertificates, setVisibleCertificates] = useState(3);

  const showMoreCertificates = () => {
    setVisibleCertificates(visibleCertificates + 3);
  };

  return (
    <Wrapper>
      <TopTitle>
        <div>Certificates</div>
        <div className="right-title">{certificatesData.length}</div>
      </TopTitle>
      <div className="horizontal-certs">
        {certificatesData
          .slice(0, visibleCertificates)
          .map((certificate, index) => (
            <CertificateCard key={index}>
              <TitleIconContainer>
                <Title>{certificate.title}</Title>
                <Icon src={certificate.icon} alt="Certificate Icon" />
              </TitleIconContainer>
              <Description>{certificate.description}</Description>
              <Date>{certificate.date}</Date>
            </CertificateCard>
          ))}
        {visibleCertificates < certificatesData.length && (
          <ShowMoreButton onClick={showMoreCertificates}>
            Show More
          </ShowMoreButton>
        )}
      </div>
    </Wrapper>
  );
};
const Scroll = styled.div`
  // Your styles here
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  color: white;
  padding: 20px 0px;
  justify-content: center;
  @media screen and (min-width: 999px) {
    flex-wrap: nowrap;
    justify-content: start;
    flex-direction: column;
    width: 100%;
    .horizontal-certs {
      display: flex;
      gap: 10px;
      width: 100%;
      overflow: scroll;
    }
  }
`;

const TopTitle = styled.div`
  font-family: "Spline Sans Mono", sans-serif;
  font-size: 14px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media screen and (min-width: 999px) {
    font-size: 17px;
  }
`;

const CertificateCard = styled.div`
  padding: 20px;
  border-radius: 14px;
  width: 100%;
  color: white;
  font-family: "Spline Sans Mono", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  line-height: 1.5;
  border: 1px solid #242222;
  background: url(/images/my-svg/lines.svg);
  min-height: 209px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: url(/images/my-svg/falling-rocks.svg);
  background-repeat: no-repeat;
  background-position: center center;
  @media screen and (min-width: 999px) {
    min-width: 500px;
    min-height: 289px;
  }
`;

const TitleIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-family: "magisse";
  font-size: 18px;
  margin-bottom: 10px;
`;

const Icon = styled.img`
  height: 30px;
  margin-left: 20px;
`;

const Description = styled.p`
  font-size: 13px;
  margin-bottom: 10px;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  display: -webkit-box;
  @media screen and (min-width: 999px) {
    font-size: 18px;
  }
`;

const Date = styled.p`
  font-size: 14px;
  color: #888;
`;

const ShowMoreButton = styled.button`
  padding: 10px 44px;
  text-align: center;
  font-size: 17px;
  background-color: black;
  border-radius: 26px;
  color: #dbc9c9;
  -webkit-transition: all 0.7s, color 0.7s;
  -webkit-transition: all 0.7s, color 0.7s;
  -webkit-transition: all 0.7s, color 0.7s;
  transition: all 0.7s, color 0.7s;
  cursor: pointer;
  border: #ffffff1f solid 1px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-family: "Spline Sans Mono", sans-serif;
  margin: 0px 69px;
  @media screen and (min-width: 999px) {
    margin: 0;
  }
`;

export default CertificateComponent;

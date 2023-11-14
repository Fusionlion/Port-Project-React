import React from "react";
import styled from "styled-components";
export default function ProjectArticle() {
  return (
    <Wrapper>
      <section>
        <div class="title">
          <h3>Your Comprehensive</h3>
          <h1>Health Companion</h1>
        </div>
      </section>

      <section>
        <div class="parallax-one">
          <h2>Fusion+</h2>
        </div>
      </section>

      <section>
        <div class="block">
          <p>
            <span class="first-character sc">F</span>usion stands as a testament
            to my commitment to leveraging technology for positive impact. As a
            software developer with a passion for technology, I dedicated my
            skills to creating this powerful and user-friendly mobile
            application. My goal is to contribute to the well-being of
            individuals by providing essential tools and information for
            managing their reproductive health. Fusion-Ion goes beyond the
            conventional period tracker, offering a suite of innovative features
            that transform it into a comprehensive health companion.
          </p>
          <p>
            Located in the vibrant tech scene of New Jersey and occasionally in
            Minnesota, I draw inspiration from my surroundings to craft
            solutions that address real-world needs. Fusion-Ion reflects not
            only my technical proficiency but also my dedication to making a
            meaningful difference in people's lives through accessible and
            innovative applications. As I continue on my journey to become an
            advanced software engineer, Fusion-Ion stands as a testament to my
            continuous pursuit of excellence in the realm of technology.
          </p>
          <ArticleImage src="https://user-images.githubusercontent.com/74889517/182246804-279dc992-6078-49f3-a4a7-775fbb677c00.png"></ArticleImage>
          <p>
            However, my journey was not confined to code alone. My
            entrepreneurial spirit emerged as I established my own service,
            providing doorstep electronics repair services to my community. This
            initiative underscored my commitment to delivering technical
            solutions and ingrained in me the value of customer-centricity. Upon
            arriving in the United States, my passion for technology continued
            to flourish. I ventured into iOS app development, creating two
            successful applications that demonstrated my innovation and mastery
            of mobile software development.
          </p>
          <ArticleImage src="https://user-images.githubusercontent.com/74889517/182249015-9292982d-095e-4414-8af5-76909f905cfa.png"></ArticleImage>
          <p>
            Fusion, a cutting-edge mobile application, offers a comprehensive
            set of features designed to empower individuals in managing their
            reproductive health effectively. One of the core functionalities of
            Fusion is its advanced period tracker, providing users with a
            user-friendly interface to log and monitor their menstrual cycles.
            This feature serves as a valuable tool for individuals to track
            their periods accurately, fostering a better understanding of their
            reproductive health.
          </p>
          <ArticleImage src="https://user-images.githubusercontent.com/74889517/182249026-b848efe2-f972-42e5-baad-fd9038d9caaf.png"></ArticleImage>
          <p>
            The app goes beyond mere period tracking by incorporating period
            cycle predictions. Fusion utilizes intelligent algorithms to analyze
            past menstrual data, offering users insights into their future
            cycles. This predictive capability enhances user preparedness and
            allows for better planning, contributing to a more informed and
            proactive approach to reproductive health.
          </p>
          <p>
            Fusion's Ovulation Calculator is another standout feature that aids
            individuals in family planning. By leveraging sophisticated
            calculations based on menstrual cycle data, the app predicts
            ovulation windows, assisting those trying to conceive or avoid
            pregnancy. This functionality aligns with Fusion's commitment to
            providing users with practical tools for making informed decisions
            about their reproductive journey.
          </p>
          <p>
            For individuals navigating pregnancy, Fusion offers a dedicated
            Pregnancy Calculator. This feature helps users estimate their due
            date, providing a convenient way to track the progression of their
            pregnancy. Fusion stands as a reliable companion throughout the
            entire reproductive process, from menstrual tracking to the stages
            of pregnancy. To enhance user engagement and adherence to their
            reproductive health goals, Fusion incorporates Reminders. Users can
            set personalized reminders for upcoming periods, ovulation windows,
            or any other relevant events. This feature ensures that users stay
            on top of their reproductive health routines, fostering a sense of
            control and well-being.
          </p>
          <p>
            Beyond its practical tools, Fusion is committed to educating and
            informing users about various aspects of reproductive health. The
            app serves as a valuable resource, offering educational content that
            empowers individuals with knowledge about their bodies, menstrual
            health, and fertility. Fusion's dedication to user education aligns
            with its mission to not only provide tools but also to foster a
            deeper understanding of reproductive well-being.
          </p>
        </div>
      </section>
    </Wrapper>
  );
}
const ArticleImage = styled.img`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  background-color: black;
  margin: 40px 0px;
  height: 700px;
  width: 100%;
  border-radius: 12px;
`; 
const Wrapper = styled.div`
  .sc {
    color: #3b8595;
  }
  .ny {
    color: #3d3c3a;
  }
  .atw {
    color: #c48660;
  }
 
  h1 {
    font-family: "Spline Sans Mono", sans-serif;
    font-size: 24px;
    font-weight: 400;
    text-transform: uppercase;
    color: white;
    padding: 0;
    margin: 0;
  }

  h2 {
    font-family: "Pixel12x10", sans-serif;
    font-size: 70px;
    letter-spacing: 10px;
    text-align: center;
    color: white;
    font-weight: 400;
    text-transform: uppercase;
    z-index: 10;
    opacity: 0.9;
  }

  h3 {
    font-family: "Spline Sans Mono", sans-serif;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 8px;
    text-transform: uppercase;
    color: white;
  }

  p {
    font-family: "Spline Sans Mono", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-bottom:15px;
  }
  .title {
    background: #afb3f1;
    padding: 60px;
    margin: 0 auto;
    text-align: center;
    font-size: 35px;
    letter-spacing: 8px;
    font-family: "Spline Sans Mono", sans-serif;
  }
  .title h1 {
    font-size: 35px;
    letter-spacing: 8px;
    font-family: "Spline Sans Mono", sans-serif;
  }
  .block-gray {
    background: #f2f2f2;
    padding: 60px;
  }
  block {
    color: white;
  }
  .block {
    background: linear-gradient(
      to bottom,
      #0c0f2000,
      transparent,
      transparent,
      transparent
    );
    padding: 60px;
    padding: 60px 0px;
    text-align: justify;
    color: aliceblue;
    border-top: #c48660 1px solid;
    /* border-bottom: #faebd71a 1px solid; */
  }

  .section-overlay-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.7;
  }
  .line-break {
    border-bottom: 1px solid black;
    width: 150px;
    margin: 0 auto;
  }

  .parallax-one {
    padding-top: 200px;
    padding-bottom: 200px;
    overflow: hidden;
    position: relative;
    width: 100%;
    background-image: url("/images/my-svg/undersea.svg");
    background-attachment: fixed;
    background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
  }

  .first-character {
    font-weight: 400;
    float: left;
    font-size: 84px;
    line-height: 64px;
    padding-top: 4px;
    padding-right: 8px;
    padding-left: 3px;
    font-family: "Source Sans Pro", sans-serif;
  }
`;

import React from "react";
import styled from "styled-components";

function BioSection() {
  return (
    <BioWrapper>
      <ProfileCard>
        <div class="topiccontent">
          <div class="topiclogoframe"></div>
          <div class="topicname">Zablon Charles</div>
          <div class="topicdesc1">I DESIGN, CODE AND WRITE</div>
          <div class="topicdesc2">
            Charles is the author of fusion. He started off his career as a
            self-taught designer and eventually traveled around the world for 2
            years. During his travels, he wrote a book which now has 5,000
            readers.
          </div>
          <div class="topicsocialgrid">
            <Icon src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png"></Icon>
            <Icon></Icon>
          </div>
        </div>
      </ProfileCard>
      <Wrapper>
        <Parallaxworldofugg>
          <section>
            <div class="title">
              <h3>Let's get some</h3>
              <h1>Background</h1>
            </div>
          </section>

          <section>
            <div class="parallax-one">
              <h2>software engineering</h2>
            </div>
          </section>

          <section>
            <div class="block">
              <p>
                <span class="first-character sc">F</span>rom my early days in
                Kenya to becoming a seasoned professional in the world of
                technology and coding, my path has been one of relentless
                dedication and unwavering passion. I first encountered the
                digital realm at a young age, even before my relocation to the
                United States. My innate curiosity led me to explore coding
                languages such as Lua, HTML, and CSS. I honed my skills and
                crafted my first website before reaching middle school. This
                early introduction to web development foreshadowed a lifelong
                fascination with technology.
              </p>
              <p class="line-break margin-top-10"></p>
              <p class="margin-top-10">
                However, my journey was not confined to code alone. My
                entrepreneurial spirit emerged as I established my own service,
                providing doorstep electronics repair services to my community.
                This initiative underscored my commitment to delivering
                technical solutions and ingrained in me the value of
                customer-centricity. Upon arriving in the United States, my
                passion for technology continued to flourish. I ventured into
                iOS app development, creating two successful applications that
                demonstrated my innovation and mastery of mobile software
                development.
              </p>
            </div>
          </section>

          <section>
            <div class="parallax-two">
              <h2>INDUSTRY EXPERIENCE</h2>
            </div>
          </section>

          <section>
            <div class="block">
              <p>
                <span class="first-character ny">B</span>eyond mobile apps, I
                delved into the world of Salesforce, a prominent platform for
                business solutions. My contributions to multiple projects
                exemplified my ability to optimize processes, enhance
                efficiency, and empower organizations to thrive. My proficiency
                in HTML and CSS allowed me to craft elegant and functional web
                solutions. I also gained valuable expertise in data entry,
                showcasing my meticulous attention to detail and commitment to
                precision.
              </p>
              <p class="line-break margin-top-10"></p>
              <p class="margin-top-10">
                During my journey as a software developer, my involvement with
                Salesforce marked a significant milestone. This robust platform
                not only expanded my horizons but also gave me invaluable
                industry experience that continues to shape my career.
                Salesforce is a powerhouse in the world of Customer Relationship
                Management (CRM) software. My involvement with Salesforce
                projects allowed me to gain insights into the real-world
                applications of technology within various industries. It was not
                just about writing code; it was about understanding the unique
                needs and challenges of businesses and organizations across
                different sectors.
              </p>
            </div>
          </section>

          <section>
            <div class="parallax-three">
              <h2>FULL STACK</h2>
            </div>
          </section>

          <section>
            <div class="block">
              <p>
                <span class="first-character atw">M</span>y journey through the
                dynamic world of technology has been a rich tapestry interwoven
                with expertise across multiple domains, each contributing to my
                evolution as a versatile and adaptable technology professional.
                This blend of skills encompasses Salesforce, Java, iOS, and
                frontend development, enabling me to tackle complex challenges
                and drive innovation in diverse projects and industries.Java,
                renowned for its portability and robustness, is at the heart of
                my programming skill set. Its significance extends beyond its
                syntax, encompassing a vast tech stack that includes: Spring
                Framework: Streamlining enterprise development. Hibernate:
                Enhancing database interaction. Maven and Gradle: Simplifying
                project management. JUnit and TestNG: Ensuring application
                reliability. IntelliJ IDEA and Eclipse: Providing feature-rich
                development environments. This comprehensive Java tech stack
                empowers me to craft efficient and scalable solutions across
                various domains..
              </p>
              <p class="line-break margin-top-10"></p>
              <p class="margin-top-10">
                Today, I stand as an accomplished software developer with a
                wealth of global experiences. My journey, which commenced when i
                was still in middle school, has led me to the forefront of the
                digital age. My portfolio offers a glimpse into the diverse
                projects, skills, and experiences that have defined my
                remarkable career. Whether you seek to connect, collaborate, or
                engage in the world of technology, I welcome you to join me on
                this transformative journey. Together, we can script the next
                chapter in the narrative of technology and innovation. With me,
                the future of technology is not just a possibility—it's a
                certainty.
              </p>
            </div>
          </section>
        </Parallaxworldofugg>
      </Wrapper>
    </BioWrapper>
  );
}

export default BioSection;

const BioWrapper = styled.div`
  backdrop-filter: blur(21px);
  border-radius: 18px;
  /* border: 1px #ffffff12 solid; */
  height: 100vh;
  width: 100%;
  border-radius: 14px;
  padding: 10px 15px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  overflow: hidden;
`;
const Icon = styled.img`
  background-image: url(https://w7.pngwing.com/pngs/277/988/png-transparent-social-media-computer-icons-linkedin-black-angle-text-logo.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 29px;
  height: 29px;
  margin: 0px auto;

  border-radius: 50px;
`;
const ProfileCard = styled.div`
  position: relative;

  height: 360px;
  /* background: var(--card-background);
  box-shadow: var(--card-box-shadow); */
  border-radius: 16px;
  padding: 97px 20px;
  cursor: pointer;
  transition: all 0.6s;

  .topiccontent {
    display: grid;
    gap: 10px;
    width: 246px;
    margin: 0px auto;
    text-align: center;
  }
  .topiclogoframe {
    background-image: url(https://cdna.artstation.com/p/assets/images/images/019/241/598/large/sabbir-ahmed-01.jpg?1562648853);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 88px;
    height: 88px;
    margin: 0px auto;
    border: solid #3e3b3b 1px;
    border-radius: 50px;
  }
  .topicname {
    font-family: "Oswald", sans-serif;
    font-style: normal;
    font-size: 24px;
    color: rgb(177 118 118);
    line-height: 29px;
    margin: 0px;
  }
  .topicdesc1 {
    font-style: normal;
    font-size: 13px;
    line-height: 130%;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 600;
    margin: 0px;
    text-transform: uppercase;
  }
  .topicdesc2 {
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 130%;
    color: rgba(255, 255, 255, 0.7);
    margin: 0px;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: scroll;
  }
  .topicsocialgrid {
    position: relative;
    width: 78px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1px;
    justify-items: center;
    margin: 40px auto;
  }
  .topicsocialsingleicon {
    width: 35px;
    height: 35px;
    align-self: bottom;
    padding: 2px;
    background: rgb(44 40 40 / 9%);
    border-radius: 30px;
    filter: invert(1);
    margin: 5px;
  }
`;
const Wrapper = styled.div`
  overflow: scroll;
  margin-left: 5px;
  gap: 50px;
  flex: 1;
  border-radius: 14px;
  
`;

const Parallaxworldofugg = styled.div`
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
    font-family: "Oswald", sans-serif;
    font-size: 24px;
    font-weight: 400;
    text-transform: uppercase;
    color: white;
    padding: 0;
    margin: 0;
  }

  h2 {
    font-family: "Oswald", sans-serif;
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
    font-family: "Oswald", sans-serif;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 8px;
    text-transform: uppercase;
    color: white;
  }

  p {
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }
  .title {
    background: #afb3f1;
    padding: 60px;
    margin: 0 auto;
    text-align: center;
    font-size: 35px;
    letter-spacing: 8px;
  }
  .title h1 {
    font-size: 35px;
    letter-spacing: 8px;
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
    margin: 0 auto;
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
    background-image: url("/images/my-svg/sea-animals.svg");
    background-attachment: fixed;
    background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
  }

  .parallax-two {
    padding-top: 200px;
    padding-bottom: 200px;
    overflow: hidden;
    position: relative;
    width: 100%;
    background-image: url("/images/my-svg/falling-stars.svg");
    background-attachment: fixed;
    background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-repeat: no-repeat;
    background-position: top left;
  }
  .parallax-three {
    padding-top: 200px;
    padding-bottom: 200px;
    overflow: hidden;
    position: relative;
    width: 100%;
    background-image: url("/images/my-svg/sea-animals.svg");
    background-attachment: fixed;
    background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
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

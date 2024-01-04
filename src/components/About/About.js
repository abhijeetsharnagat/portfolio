import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image
              src="abhi.jpg"
              alt="man-svgrepo"
            />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hi there! I'm <strong>Abhijeet Sharnagat </strong>, a passionate web developer hailing from Pune, India. My journey in the tech world started with hands-on experiences at QuantemJEE Academy and Celebal Technologies, where I delved into the MERN stack, AWS, and the intricacies of ReactJS.


            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">

              Hi there! I'm Abhijeet Sharnagat, a passionate web developer hailing from Pune, India. My journey in the tech world started with hands-on experiences at QuantemJEE Academy and Celebal Technologies, where I delved into the MERN stack, AWS, and the intricacies of ReactJS.

              Skills-wise, I'm your go-to person for HTML, CSS, JavaScript, Python, and more. Beyond coding, I bring creativity to the table with proficiency in Figma and Adobe Illustrator. Whether it's building a seamless educational platform or enhancing the user experience with Codechef, I thrive on turning ideas into tangible projects.

              Outside the coding realm, you'll find me securing first positions in debate competitions, recognized as the Best UI/UX Designer, and awarded for being the Best Anchor at various events. Currently, I'm the proud founder of Rhetoricians’ MITAOE, nurturing public speaking, leadership, and community involvement.


            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              Working collaboratively within a team towards a shared objective has been an incredibly rewarding and unique experience for me. I am eager to continue exploring exciting projects in the future, with a particular interest in web development and cross-platform mobile development.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>


            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;

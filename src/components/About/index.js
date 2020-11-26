import React from "react"
import ICP from "./icp"
import { AboutContainer } from "./style"

import icp1Img from "../../images/bachelor.jpg"
import icp2Img from "../../images/acca.jpg"
import icp3Img from "../../images/test-1.png"

const About = () => {
  const title = "Who Am I?"
  return (
    <AboutContainer id="about">
      <div className="content-container">
        <div className="special-section">
          <h2>{title}</h2>
        </div>
        <ICP
          img={icp1Img}
          alt={"test1"}
          title={"Education"}
          content={
            "University of Toronto Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum"
          }
          reverse={true}
        />
        <ICP
          img={icp2Img}
          alt={"test1"}
          title={"Qualifications"}
          content={
            "MBA ACCA Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum"
          }
        />
        <ICP
          img={icp3Img}
          alt={"test1"}
          title={"Lorem IpsumLorem Ipsum"}
          content={
            "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum"
          }
          reverse={true}
        />
      </div>
    </AboutContainer>
  )
}

export default About

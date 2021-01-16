import React from "react"
import ICP from "../shared/ICP"

import icp1Img from "../../images/bachelor.jpg"
import icp2Img from "../../images/acca.png"
import icp3Img from "../../images/test-1.png"

let educationContent = [
  { msg: "Master of Business Administration – McMaster University" },
  { msg: "Bachelor of Commerce, Finance - University of Toronto." },
]
let qualificationContent = [
  { msg: "Association of Chartered Certified Accountants (ACCA)" },
]
let experienceContent = [
  {
    msg:
      "Full-cycle accounting and tax preparation at a Public Accounting Firm.",
  },
]

const About = () => {
  const title = "Who Am I?"
  return (
    <section id="about" style={{ backgroundColor: "#fff" }}>
      <div className="content-container">
        <div className="special-section">
          <h2>{title}</h2>
        </div>
        <ICP
          img={icp1Img}
          alt={"test1"}
          title={"Education"}
          content={educationContent}
          reverse={true}
        />
        <ICP
          img={icp2Img}
          alt={"test1"}
          title={"Qualifications"}
          content={qualificationContent}
        />
        <ICP
          img={icp3Img}
          alt={"test1"}
          title={"Experiences"}
          content={experienceContent}
          reverse={true}
        />
      </div>
    </section>
  )
}

export default About

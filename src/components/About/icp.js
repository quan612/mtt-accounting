import React, { useEffect } from "react"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const ICP = ({ img, alt, title, content, reverse = false }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.25,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])
  return (
    <ICPWrapper reverse={reverse}>
      {/* <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 25 },
        }}
        transition={{ ease: "easeOut", duration: 1.25, delay: 0.35 }}
      > */}
      <div className="icp_img">
        <img src={img} alt={alt} />
      </div>
      <div className="icp_content">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
      {/* </motion.div> */}
    </ICPWrapper>
  )
}

const ICPWrapper = styled.div`
  padding: 20px 0;
  display: block;

  @media only screen and (min-width: 600px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    flex-direction: ${props => (props.reverse ? "row-reverse" : "row")};
  }

  .icp_img {
    @media only screen and (min-width: 600px) {
      width: 50%;
      text-align: center;
      padding: 0 1rem 0 0;
    }

    img {
      box-sizing: border-box;
      width: 100%;
      transition: 0.3s ease-in-out;

      @media (min-width: 600px) {
        /* height: 300px; */
        width: 100%;
        max-width: 600px;
      }
    }
  }

  .icp_content {
    @media only screen and (min-width: 600px) {
      width: 50%;
      max-width: 28em;
    }

    h3 {
      font-size: 2.25rem;
      font-weight: 500;
      color: #056aae;
      line-height: 1.2;
      margin-bottom: 0.5em;
    }

    p {
      text-align: left;
      font-size: 16px;
      font-weight: 400;
      color: #727272;
    }
  }
`

export default ICP

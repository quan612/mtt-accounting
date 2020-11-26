import React, { useEffect } from "react"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const Perk = ({ img, alt, title, content }) => {
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
    <PerkWrapper className="perk">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 25 },
        }}
        transition={{ ease: "easeOut", duration: 1.25, delay: 0.35 }}
      >
        <img src={img} alt={alt} />
        <h3>{title}</h3>
        <p>{content}</p>
      </motion.div>
    </PerkWrapper>
  )
}

const PerkWrapper = styled.div`
  padding: 20px 0;
  width: 100%;
  /* margin: 0 auto; */

  @media (min-width: 768px) {
    padding: 0;
    max-width: 500px;
  }

  @media (min-width: 992px) {
    padding: 0;
    max-width: 350px;
  }

  @media (min-width: 1200px) {
    max-width: 480px;
  }

  img {
    box-sizing: border-box;
    width: 100%;
    height: 320px;
    transition: 0.3s ease-in-out;

    @media (min-width: 992px) {
      height: 300px;
    }
    &:hover {
      transform: translateY(-10px);
      box-shadow: 5px 10px 5px 0px rgba(214, 214, 214, 1);
      transition: 0.3s ease-in-out;
    }
  }

  h3 {
    font-size: 20px;
    font-weight: 500;
    color: #ff4f7d;
  }

  p {
    text-align: left;
    font-size: 15px;
    font-weight: 400;
    color: #727272;
  }
`

export default Perk

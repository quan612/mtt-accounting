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
  flex-basis: 40%;
  flex-grow: 1;
  padding: 0 20px;
  margin-left: -10px;
  margin-bottom: 20px;

  @media (max-width: 700px) {
    flex-basis: 100%;
    padding: 0 10px;
  }

  img {
    box-sizing: border-box;
    width: 100%;
    transition: 0.3s ease-in-out;

    @media (min-width: 700px) {
      height: 280px;
    }
    &:hover {
      transform: translateY(-10px);
      box-shadow: 5px 10px 5px 0px rgba(214, 214, 214, 1);
      transition: 0.3s ease-in-out;
    }
  }

  h3 {
    text-align: center;
  }

  p {
    text-align: left;
  }
`

export default Perk

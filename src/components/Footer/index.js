import React from "react"

import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

import FooterTop from "./footerTop"
import FooterBottom from "./footerBottom"
import { FooterWrapper } from "./style"

// import socialIcons from "../../constants/social-icons"

const Footer = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.25,
  })

  React.useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <FooterWrapper>
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
        <FooterTop />
        <FooterBottom />
      </motion.div>
    </FooterWrapper>
  )
}

export default Footer

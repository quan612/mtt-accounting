import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

import { ICPWrapper } from "./style"

const ICP = ({ img, alt, title, content, reverse = false }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.4,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: reverse ? -100 : 100 },
      }}
      transition={{ ease: "easeOut", duration: 1.25, delay: 0.45 }}
    >
      <ICPWrapper reverse={reverse}>
        <div className="icp_img">
          <img src={img} alt={alt} />
        </div>
        <div className="icp_content">
          <h3>{title}</h3>
          {content.map((p, index) => {
            return (
              <>
                {p.title && <h4 key={index}>{p.title}</h4>}
                <p key={index}>{p.msg}</p>
              </>
            )
          })}
        </div>
      </ICPWrapper>
    </motion.div>
  )
}

export default ICP

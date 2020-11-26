import React from "react"
import FormikForm from "./formikForm"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

import { ContactWrapper } from "./style"

const Contact = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.25,
  })

  React.useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const title = "Contact Us."
  const subtitle =
    "We can get in touch by email, phone or by filling in the contact form below. We’d love to hear from you and we’ll get back to you within 24 hours."

  return (
    <ContactWrapper id="contact">
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
        <div className="content-container">
          <div className="special-section">
            <h2>{title}</h2>
          </div>
          <p>{subtitle}</p>
          <FormikForm />
        </div>
      </motion.div>
    </ContactWrapper>
  )
}

export default Contact

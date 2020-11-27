import React from "react"
import { Formik, Form, ErrorMessage } from "formik"
import Button from "../Button/button"

const axios = require("axios")
const endpoints = { contact: "/.netlify/functions/sendEmail" }

const FormikForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        message: "",
      }}
      onSubmit={async (values, { setErrors, setStatus, resetForm }) => {
        axios.post(endpoints.contact, JSON.stringify(values)).then(response => {
          if (response.status !== 200) {
            setErrors("Email cannot be sent.")
          } else {
            alert("Email is sent")
          }
        })
        resetForm({})
      }}
      validate={values => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
        const errors = {}
        if (!values.name) {
          errors.name = "Name Required"
        }
        if (!values.email || !emailRegex.test(values.email)) {
          errors.email = "Valid Email Required"
        }
        if (!values.message) {
          errors.message = "Message Required"
        }
        return errors
      }}
    >
      {formik => (
        <form
          name="contact"
          onSubmit={formik.handleSubmit}
          autoComplete="new-password"
        >
          <div className="input-area">
            <input
              type="text"
              name="name"
              aria-label="Name"
              required
              autoComplete="none"
              value={formik.values.name || ""}
              onChange={formik.handleChange}
            />
            <label className="label-name" htmlFor="name">
              <span className="content-name">Name</span>
            </label>
          </div>
          <ErrorMessage name="name" />

          <div className="input-area">
            <input
              type="email"
              name="email"
              aria-label="Email"
              required
              autoComplete="disabledEmail"
              value={formik.values.email || ""}
              onChange={formik.handleChange}
            />
            <label className="label-name" htmlFor="email">
              <span className="content-name">Email</span>
            </label>
          </div>
          <ErrorMessage name="email" />

          <div className="input-area">
            <input
              type="text"
              name="phone"
              aria-label="Phone"
              required
              autoComplete="on"
              value={formik.values.phone || ""}
              onChange={formik.handleChange}
            />
            <label className="label-name" htmlFor="phone">
              <span className="content-name">Phone</span>
            </label>
          </div>
          <ErrorMessage name="email" />

          <div className="input-area">
            <textarea
              type="text"
              name="message"
              rows="20"
              required
              autoComplete="off"
              aria-label="Message"
              value={formik.values.message || ""}
              onChange={formik.handleChange}
            />
            <label className="label-name" htmlFor="message">
              <span className="content-name">Message</span>
            </label>
          </div>
          <ErrorMessage name="message" />

          <div className="input-area button-area">
            <Button label="Send Contact Form" cta="Send" type="submit" />
          </div>
        </form>
      )}
    </Formik>
  )
}

export default FormikForm

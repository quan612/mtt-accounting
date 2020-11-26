import React from "react"
import { FooterBottomWrapper } from "./style"

const FooterBottom = () => {
  return (
    <FooterBottomWrapper>
      <div class="eib content_cell content_cell_80 copy_wrapper">
        © Minh Trang Tran Accountants &amp; Tax consultants BV -{" "}
        <a href="https://www.google.com" className="_link" target="_blank">
          Privacy policy
        </a>{" "}
        -{" "}
        <a href="https://www.google.com" className="_link" target="_blank">
          General Terms and Conditions
        </a>
      </div>
    </FooterBottomWrapper>
  )
}
export default FooterBottom

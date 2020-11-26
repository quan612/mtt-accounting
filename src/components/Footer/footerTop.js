import React from "react"
import { FooterTopWrapper } from "./style"

const FooterTop = () => {
  return (
    <FooterTopWrapper>
      <div className="eib content_cell content_cell_50">
        <p className="footer_text">Toronto office</p>
        <p>
          <a className="_link_top" href="tel:+3250381053">
            Tel: +1 647 468-0389
          </a>
          <br />
          <a
            className="_link_top"
            href="javascript:void(location.href='mailto:'+String.fromCharCode(98,114,117,103,103,101,64,118,97,110,114,101,121,98,114,111,117,99,107,46,98,101))"
          >
            minhtrangtran713@gmail.com
          </a>
        </p>
        <p style={{ marginTop: "14px" }}>
          <a
            className="_link_top"
            alt="LinkedIn"
            href="https://www.linkedin.com/in/minh-trang-tran-68941b8b/"
            // style="border:none !important;"
            target="_blank"
            title="LinkedIn"
          >
            <img
              src="https://www.vanreybrouck.be/UPLOADS/FILS/linkedin_logo.png"
              width="24"
            />
          </a>
        </p>
      </div>
      <div className="eib content_cell content_cell_50">
        <p className="footer_text">Mississauga office</p>
        <p>
          <a className="_link_top" href="tel:+3250381053">
            Tel: +1 647 468-0389
          </a>
          <br />
          <a
            className="_link_top"
            href="javascript:void(location.href='mailto:'+String.fromCharCode(98,114,117,103,103,101,64,118,97,110,114,101,121,98,114,111,117,99,107,46,98,101))"
          >
            minhtrangtran713@gmail.com
          </a>
        </p>
        <p style={{ marginTop: "14px" }}>
          <a
            className="_link_top"
            alt="LinkedIn"
            href="https://www.linkedin.com/in/minh-trang-tran-68941b8b/"
            // style="border:none !important;"
            target="_blank"
            title="LinkedIn"
          >
            <img
              src="https://www.vanreybrouck.be/UPLOADS/FILS/linkedin_logo.png"
              width="24"
            />
          </a>
        </p>
      </div>
    </FooterTopWrapper>
  )
}

export default FooterTop

import React from "react"
import { FooterTopWrapper } from "./style"

const FooterTop = () => {
  return (
    <FooterTopWrapper>
      <div className="eib content_cell content_cell_50 ">
        <div>
          <a className="_link_top" href="tel:+3250381053">
            Tel: +1 647 468 0389
          </a>
        </div>
        <div>
          <br />
          <a className="_link_top mt-2" href="#">
            info@xbaccountax.ca
          </a>
        </div>
        <div style={{ marginTop: "14px" }}>
          <a
            className="_link_top"
            alt="LinkedIn"
            href="https://www.linkedin.com/in/minh-trang-tran-68941b8b/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <img
              src="https://www.vanreybrouck.be/UPLOADS/FILS/linkedin_logo.png"
              width="24"
              alt=""
              className=" ml-auto  mr-auto"
            />
          </a>
        </div>
      </div>
      {/* <div className="eib content_cell content_cell_50">
        <p className="footer_text">Mississauga office</p>
        <p>
          <a className="_link_top" href="tel:+3250381053">
            Tel: +1 647 468 0389
          </a>
          <br />
          <a className="_link_top" href="#">
            info@xbaccountax.ca
          </a>
        </p>
        <p style={{ marginTop: "14px" }}>
          <a
            className="_link_top"
            alt="LinkedIn"
            href="https://www.linkedin.com/in/minh-trang-tran-68941b8b/"
            // style="border:none !important;"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <img
              src="https://www.vanreybrouck.be/UPLOADS/FILS/linkedin_logo.png"
              width="24"
              alt=""
            />
          </a>
        </p>
      </div> */}
    </FooterTopWrapper>
  )
}

export default FooterTop

import Link from "next/link";
import ScrollTopArrow from "../ScrollTopArrow"

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__partner">
        <div className="footer__container container">
          <div className="footer__m-general-extension-partner">
            <Link href={'/extensions'}>
              <a>
                <img src="/assets/imgs/2017/10/gen-ext-partner.png"
                     alt="Magento General Extension Partner" title="Magento General Extension Partner"/>
              </a>
            </Link>
            <ScrollTopArrow/>
          </div>
          <div className="row">
            <div className="footer-text">
              <img src="/assets/imgs/2017/01/tech1.png"/>
              <img src="/assets/imgs/2017/01/tech2.png"/>
              <img src="/assets/imgs/2017/01/tech3.png"/>
              <img src="/assets/imgs/2017/01/tech4.png"/>
              <img src="/assets/imgs/2017/01/tech5.png"/>
              <img src="/assets/imgs/2017/01/tech6.png"/>
              <img src="/assets/imgs/2017/01/tech7.png"/>
              <img src="/assets/imgs/2017/01/tech8.png"/>
              <img src="/assets/imgs/2017/01/tech9.png"/>
            </div>
          </div>

          <button className="footer__olark-launch-button">
            <svg>
              <path fill="#ffffff"
                    d="M28,3.2C28,1.5,26.5,0,24.8,0H3.2C1.5,0,0,1.5,0,3.2v11.5C0,16.5,1.5,18,3.2,18h21.5c1.8,0,3.2-1.5,3.2-3.2 V3.2z M24.7,14.8c-0.2,0.1-0.4,0.2-0.6,0.2c-0.2,0-0.4-0.1-0.6-0.3l-5-5.3l-3.6,3c-0.3,0.2-0.6,0.3-0.9,0.3s-0.7-0.1-0.9-0.4l-3.6-3 l-5,5.3c-0.2,0.2-0.4,0.3-0.6,0.3c-0.2,0-0.4-0.1-0.6-0.2c-0.3-0.3-0.4-0.8,0-1.2l4.9-5.3L3.3,4.5C3,4.2,2.9,3.6,3.2,3.3 C3.5,2.9,4,2.9,4.4,3.2l9.6,7.9l9.6-7.9c0.4-0.3,0.9-0.2,1.2,0.1c0.3,0.4,0.2,0.9-0.1,1.2l-4.8,3.9l4.9,5.3 C25.1,14,25,14.5,24.7,14.8z"></path>
            </svg>
            <span>Contact Us Here</span>
          </button>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom__container">
          <div className="footer__empty">

          </div>
          <div className="footer__copyright">
            <p>Copyright © 2014-2020. All Rights Reserved by M-integration.</p>
            <p>Magento development, Custom Web development, IT Security</p>
          </div>
          <ul className="footer__social-links">
            <li>
              <a id="social-s" href="skype:sales@m-integration.com?chat"></a></li>
            <li><a target="_blank" id="social-in" href="https://www.linkedin.com/company/18011425/"></a></li>
            <li><a id="social-m" href="mailto:sales@m-integration.com"></a></li>
          </ul>
        </div>

      </div>

    </footer>
  )
}
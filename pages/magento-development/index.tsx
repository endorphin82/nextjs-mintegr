import TitleOfAnyPage from "../../components/TitleOfAnyPage";
import RightSidebar from "../../components/RightSidebar";
import {MainLayout} from "../../components/MainLayout";
import Link from "next/link";

export default function Page() {
  return (
    <MainLayout>
      <TitleOfAnyPage/>
      <div className="row">
        <div className="left-sidebar">

          <div id="post-4324" className="page post-4324 type-page status-publish hentry">
            <p className="custom-text-os">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Quality development is the key to a
              successful business project. E-commerce business has become more technologically sophisticated, online
              shopping is gaining a growing audience. Modern stores must meet the ever-growing expectations of
              customers, such as high performance, security, and flexibility.</p>
            <p>
              <img className="alignnone size-full"
                   src="/assets/imgs/magento-development/magento.png" alt="magento"/>
            </p>
            <p className="custom-text-os">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We have enough experience to accomplish
              any kinds of requirements. Deep understanding of the Magento architecture allows us to extend platform
              for
              different queries including marketplaces and mixed systems.</p>
            <h4 className="custom-h4">Our services include the following:</h4>
            <ul id="ul-li-arrow" className="fa-ul custom-icon-ul">
              <li><i className="fa-li fa fa-angle-right" aria-hidden="true"></i>
                <p className="custom-text-os">
                  <Link href={'/migration/'}>
                    <a>Migration</a>
                  </Link>
                  1.x - 2.x
                </p>
              </li>
              <li><i className="fa-li fa fa-angle-right" aria-hidden="true"></i>
                <p className="custom-text-os">
                  <Link href={'/creating-new-store-scratch/'}>
                    <a>Creating new store from scratch</a>
                  </Link>
                </p>
              </li>
              <li><i className="fa-li fa fa-angle-right" aria-hidden="true"></i>
                <p className="custom-text-os">
                  <Link href={'/design/'}>
                    <a>Custom Design</a>
                  </Link>
                </p>
              </li>
              <li><i className="fa-li fa fa-angle-right" aria-hidden="true"></i>
                <p className="custom-text-os">
                  <Link href={'/technical-support/'}>
                    <a>Ongoing support</a>
                  </Link> for the existing projects
                </p>
              </li>
              <li><i className="fa-li fa fa-angle-right" aria-hidden="true"></i>
                <p className="custom-text-os">
                  <Link href={'/extending-extensions/'}>
                    <a>Extending extensions</a>
                  </Link>
                </p>
              </li>
              <li><i className="fa-li fa fa-angle-right" aria-hidden="true"></i>
                <p className="custom-text-os">
                  <Link href={'/3rd-party-integration/'}>
                    <a>3rd party integration</a>
                  </Link>
                </p>
              </li>
              <li><i className="fa-li fa fa-angle-right" aria-hidden="true"></i>
                <p className="custom-text-os">
                  <Link href={'/amazon-ebay-synchronizations/'}>
                    <a>Amazon, eBay synchronizations</a>
                  </Link>
                </p>
              </li>
              <li><i className="fa-li fa fa-angle-right" aria-hidden="true"></i>
                <p className="custom-text-os">
                  <Link href={'/server-configuration/'}>
                    <a>Server configuration</a>
                  </Link>
                </p>
              </li>
              <li><i className="fa-li fa fa-angle-right" aria-hidden="true"></i>
                <p className="custom-text-os">
                  <Link href={'/optimization-frontend-backend-side/'}>
                    <a>Optimization (frontend/backend) side</a>
                  </Link>
                </p>
              </li>
              <li><i className="fa-li fa fa-angle-right" aria-hidden="true"></i>
                <p className="custom-text-os">
                  <Link href={'/installation-configuration-search-engines-solr-sphinx/'}>
                    <a>Installation and configuration of search engines (Solr, Sphinx)</a>
                  </Link>
                </p>
              </li>
              <li><i className="fa-li fa fa-angle-right" aria-hidden="true"></i>
                <p className="custom-text-os">
                  <Link href={'/seo-optimization/'}>
                    <a>SEO optimization</a>
                  </Link>
                </p>
              </li>
            </ul>
            <p/>
            <h4 className="custom-h4">We offer:</h4>
            <ul className="fa-ul custom-icon-ul">
              <li><i className="fa-li fa fa-bar-chart fa-lg" aria-hidden="true"></i>
                <p className="custom-text-os">Attractive pricing / performance / quality</p>
              </li>
              <li><i className="fa-li fa fa-users fa-lg" aria-hidden="true"></i>
                <p className="custom-text-os">10+ highly qualified Magento backend &amp; front-end Developers</p>
              </li>
              <li><i className="fa-li fa fa-calendar fa-lg" aria-hidden="true"></i>
                <p className="custom-text-os">Accurate deadlines</p>
              </li>
              <li><i className="fa-li fa fa-unlock-alt fa-lg" aria-hidden="true"></i>
                <p className="custom-text-os">We comply with all the conditions of the NDA, 100% security for your
                  business</p>
              </li>
              <li><i className="fa-li fa fa-thumbs-up fa-thumbs-o-up fa-lg" aria-hidden="true"></i>
                <p className="custom-text-os">Continuous and transparent work process</p>
              </li>
              <li><i className="fa-li fa fa-reply-all fa-lg" aria-hidden="true"></i>
                <p className="custom-text-os">Daily reports on the various channels of your choice (e-mail, chat,
                  telephone, Skype)</p>
              </li>
            </ul>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p className="custom-text-os upper"><b>We offer future owners of online stores to start your business with
              the best platform that includes the latest trends in e-commerce in the whole world and as result, you
              will
              get fast, advanced, competitive and a secure store</b>
            </p>
          </div>
        </div>
        <RightSidebar/>
      </div>
    </MainLayout>
  )
}

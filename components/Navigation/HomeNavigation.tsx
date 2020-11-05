import { Card, Avatar } from "antd"
import { Navigation } from "./Navigation"
import Slider from "react-slick"
import { useState, useEffect, useRef } from "react"

const { Meta } = Card

export function HomeNavigation() {
  const [nav1, setNav1] = useState()
  const [nav2, setNav2] = useState()

  const settings1 = {
    variableWidth: false,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    dots: false,
    className: "top-slider",
    arrows: false,
    infinite: true,
    speed: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    asNavFor: nav2,
    adaptiveHeight: false
  }

  const settings2 = {
    slidesToShow: 1,
    className: "bottom-slider",
    arrows: false,
    swipeToSlide: true,
    focusOnSelect: true,
    dots: true,
    infinite: true,
    speed: 0,
    slidesToScroll: 1,
    asNavFor: nav1,
    useCSS: true,
    adaptiveHeight: false,
    equalizeHeight: true
  }

  const onMouseEnterHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
    const divParent = e.currentTarget.parentElement
    // @ts-ignore
    const sliderIndex = divParent.parentElement.getAttribute("data-index")
    // @ts-ignore
    nav1.slickGoTo(Number(sliderIndex), true)
  }

  return (
    <>
      <Navigation />
      <Slider
        {...settings1}
        // @ts-ignore
        ref={slider => setNav1(slider)}
      >
        <div onMouseEnter={(e) => onMouseEnterHandler(e)}>
          <Card

            title={<Avatar size={64} src="/assets/imgs/homeheader/2312dws.png" />}
            hoverable
          >
            <h3 className="title-header">Development</h3>
            <p className="ant-card__content">&nbsp;&nbsp;&nbsp;&nbsp;Full cycle service of e-commerce, custom web
              development, website design, upgrade and support services for your business! We provide professional
              solutions that fit your unique business needs for convenience and efficiency for your success.</p>
            <p className="ant-card__read-more-button"><span>Read more</span></p>
          </Card>
        </div>
        <div onMouseEnter={(e) => onMouseEnterHandler(e)}>

          <Card

            title={<Avatar size={64} src="/assets/imgs/homeheader/support.png" />}
            hoverable
          >
            <h3 className="title-header">Resources</h3>
            <p className="ant-card__content">&nbsp;&nbsp;&nbsp;&nbsp;Dedicated team, highly qualified backend and
              frontend developers for full-time and part-time who can work remotely as per your requirements. We
              guarantee full control of the timing of the project, competitive prices, 100% security and quality of
              workflow.</p>
            <p className="ant-card__read-more-button"><span>Read more</span></p>
          </Card>
        </div>
        <div onMouseEnter={(e) => onMouseEnterHandler(e)}>

          <Card

            title={<Avatar size={64} src="/assets/imgs/homeheader/support3.png" />}
            hoverable
          >
            <h3 className="title-header">Support</h3>
            <p className="ant-card__content">&nbsp;&nbsp;&nbsp;&nbsp;Permanent protection and daily checks to your
              website and make efficient and quick fixes for bugs and issues, monitoring of technical problems,
              optimization and improve the quality and productivity as a result you get a fast, advanced, competitive
              e-commerce store.</p>
            <p className="ant-card__read-more-button"><span>Read more</span></p>
          </Card>
        </div>
      </Slider>

      <Slider
        {...settings2}
        // @ts-ignore
        ref={slider => setNav2(slider)}
      >
        <div>
          <h3 className="camera_caption">To reach maximum potential sales and growth, you must invest in
            professionals!</h3>
        </div>
        <div>
          <h3 className="camera_caption">&nbsp; </h3>
        </div>
        <div>
          <h3 className="camera_caption">5+ years experience! 50+ E-commerce stores! A+ Class software developers</h3>
        </div>
      </Slider>
      <div className="camera_line" />
    </>
  )
}
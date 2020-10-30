import {Card, Avatar} from 'antd';
import {Navigation} from "./Navigation";
import Slider from "react-slick";
import {useState, useEffect, useRef} from "react";

const {Meta} = Card;

export function HomeNavigation() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const slider1 = useRef();
  const slider2 = useRef();
  //
  // return (
  //   <>
  //     <h2>Slider Syncing (AsNavFor)</h2>
  //     <h4>First Slider</h4>
  //     <Slider
  //       dots={true}
  //       autoplay={true}
  //       autoplaySpeed={1000}
  //       asNavFor={nav2}
  //       ref={slider1 => setNav1(slider1)}
  //     >
  //       <div>
  //         <h3>1</h3>
  //       </div>
  //       <div>
  //         <h3>2</h3>
  //       </div>
  //       <div>
  //         <h3>3</h3>
  //       </div>
  //       <div>
  //         <h3>4</h3>
  //       </div>
  //       <div>
  //         <h3>5</h3>
  //       </div>
  //       <div>
  //         <h3>6</h3>
  //       </div>
  //     </Slider>
  //     <h4>Second Slider</h4>
  //     <Slider
  //       asNavFor={nav1}
  //       ref={slider2 => setNav2(slider2)}
  //       slidesToShow={1}
  //       swipeToSlide={true}
  //       focusOnSelect={true}
  //     >
  //       <div>
  //         <h3>1</h3>
  //       </div>
  //       <div>
  //         <h3>2</h3>
  //       </div>
  //       <div>
  //         <h3>3</h3>
  //       </div>
  //       <div>
  //         <h3>4</h3>
  //       </div>
  //       <div>
  //         <h3>5</h3>
  //       </div>
  //       <div>
  //         <h3>6</h3>
  //       </div>
  //     </Slider>
  //   </>
  // );
  return (
    <>
      <Navigation/>
      <div className="cards">
        <Card
          title={<Avatar size={64} src="/assets/imgs/homeheader/2312dws.png"/>}
          hoverable
        >

          <h1 className="title-header">Development</h1>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        {/*<Card*/}
        {/*  title={<Avatar size={64} src="/assets/imgs/homeheader/2312dws.png"/>}*/}
        {/*  hoverable*/}
        {/*>*/}

        {/*  <h1 className="title-header">Development</h1>*/}
        {/*  <p>Card content</p>*/}
        {/*  <p>Card content</p>*/}
        {/*</Card>*/}
        {/*<Card*/}
        {/*  title={<Avatar size={64} src="/assets/imgs/homeheader/2312dws.png"/>}*/}
        {/*  hoverable*/}
        {/*>*/}

        {/*  <h1 className="title-header">Development</h1>*/}
        {/*  <p>Card content</p>*/}
        {/*  <p>Card content</p>*/}
        {/*</Card>*/}
      </div>

    </>
  )
}
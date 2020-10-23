import {useState} from "react"
import {UpOutlined} from '@ant-design/icons';

const ScrollTopArrow = () => {

    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    };
    const scrollTop = () => {
        // (typeof window !== "undefined") &&

        window.scrollTo({top: 0, behavior: 'smooth'});

    };

    (typeof window !== "undefined") && window.addEventListener('scroll', checkScrollTop)

    return (
        <div className="scrollTop" onClick={scrollTop}
             style={{display: showScroll ? 'flex' : 'none'}}/>
    );
}

export default ScrollTopArrow;
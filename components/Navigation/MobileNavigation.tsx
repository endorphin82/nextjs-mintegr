import {useSelector} from 'react-redux'
import {useSetIsShowMenu} from "../../redux/hooks";
import {Menu, ActivityIndicator, NavBar} from 'antd-mobile';
import {useState} from "react";
import {useRouter} from 'next/router'
import Link from "next/link";

const data = [
  {
    value: '1',
    label: 'Home',
    isLeaf: true,
    link: '/'
  },
  {

    value: '2',
    label: 'Services',
    children: [
      {
        label: 'Magento Development',
        value: '1',
        link: "/magento-development",
        disabled: false,
      },
      {
        label: 'Custom Web Development',
        link: '/custom-web-development',
        value: '2',
      }, {
        label: 'Security Services',
        link: '/security-services',
        value: '3',
      }],
  }, {
    value: '3',
    label: 'Partnerships',
    children: [
      {
        label: 'Outsourcing',
        link: '/outsourcing',
        value: '1',
      }, {
        label: 'Outstaffing',
        link: '/outstaffing',
        value: '2'
      }],
  },
  {
    value: '4',
    label: 'Company',
    children: [
      {
        label: 'About',
        link: '/about',
        value: '1',
      },
      {
        label: 'Contacts',
        link: '/contacts',
        value: '2',
      },
      {
        label: 'Testimonials',
        link: '/about/testi',
        value: '3',
      }],
  },
  {
    value: '5',
    label: 'Faq',
    children: [
      {
        label: 'General',
        link: '/general',
        value: '1',
      },
      {
        label: 'Magento-2',
        link: '/magento-2',
        value: '2',
      }],
  },
  {
    value: '6',
    label: 'Portfolio',
    isLeaf: true,
    link: '/portfolio'
  },
];

export function MobileNavigation() {
  const router = useRouter()
  const isShowMenu = useSelector(state => state.hamburger.isOpen)
  const setIsShowMenu = useSetIsShowMenu()
  const [initData, setInitData] = useState([]);
  const clientHeight = useSelector(state => state.client_height.clientHeight)

  const onChange = (value) => {
    data.forEach((dataItem) => {
      if (dataItem.value === value[0]) {
        if (dataItem.link != null) {
          router.push(dataItem.link)
          setIsShowMenu(false)
        }

        if (dataItem.children && value[1]) {
          dataItem.children.forEach((cItem) => {
            if (cItem.value === value[1]) {
              router.push(cItem.link)
              setIsShowMenu(false)
            }
          });
        }
      }
    });
  }

  const handleClick = (e) => {
    e.preventDefault(); // Fix event propagation on Android
    setIsShowMenu(!isShowMenu)

    // mock for async data loading
    if (initData.length == 0) {
      setTimeout(() => {
        setInitData(
          [...data]
        )
      }, 100);
    }
  }

  const onMaskClick = () => {
    setIsShowMenu(false)
  }

  const onOkHandle = () => {
    setIsShowMenu(false)
  }

  const menuEl = (
    <Menu
      onOk={onOkHandle}
      className="foo-menu"
      data={initData}
      value={['1', '3']}
      onChange={onChange}
      // height={clientHeight * 0.6}
    />
  );
  const loadingEl = (
    <div style={{
      width: '100%',
      height: clientHeight * 0.6,
      display: 'flex',
      justifyContent: 'center'
    }}>
      <ActivityIndicator size="large"/>
    </div>
  );
  return (
    <div className={isShowMenu ? 'menu-active' : ''}>
      <div>
        <NavBar
          // leftContent={}
          rightContent={<a><img onClick={handleClick} src="/assets/imgs/menu.svg"
                                                 className="am-icon am-icon-md" alt=""/></a>}
          mode="light"
          // icon={<img src="/assets/imgs/menu.svg"
          //            className="am-icon am-icon-md" alt=""/>}
          onLeftClick={handleClick}
          className="top-nav-bar"
        >
          M-INTEGRATION
        </NavBar>
      </div>
      {isShowMenu ? initData ? menuEl : loadingEl : null}
      {isShowMenu ? <div className="menu-mask" onClick={onMaskClick}/> : null}
    </div>
  )
}


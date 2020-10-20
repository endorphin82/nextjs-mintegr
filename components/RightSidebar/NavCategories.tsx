import Link from "next/link";

export const NavCategories = () => {
  return (
    <div className="right-sidebar__nav-categories">
      <h2>Categories</h2>
      <ul className='right-sidebar__nav'>
        <li>
          <Link href={'/magento-development'}>
            <a>Magento Development</a>
          </Link>
        </li>
        <li>
          <Link href={'/custom-web-development'}>
            <a>Custom Web Development</a>
          </Link>
        </li>
        <li>
          <Link href={'/security-services'}>
            <a>Security Services</a>
          </Link>
        </li>
        <li>
          <Link href={'/outsourcing'}>
            <a>Outsourcing</a>
          </Link>
        </li>
        <li>
          <Link href={'/outstaffing'}>
            <a>Outstaffing</a>
          </Link>
        </li>
        <li>
          <Link href={'/about'}>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href={'/contacts'}>
            <a>Contacts</a>
          </Link>
        </li>
        <li>
          <Link href={'/about/testi'}>
            <a>Testimonials</a>
          </Link>
        </li>
        <li>
          <Link href={'/general'}>
            <a>General</a>
          </Link>
        </li>
        <li>
          <Link href={'/magento-2'}>
            <a>Magento 2</a>
          </Link>
        </li>
        <li id="portfolio">
          <Link href={'/portfolio'}>
            <a>Portfolio</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
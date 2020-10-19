import Link from "next/link";

export default function RightSidebar (){
  return(
    <div className="right-sidebar">
      <h2>Categories</h2>
      <ul className='right-sidebar__nav'>
        <li>
          <Link href={'/magento-development'}>
            <a>magento development</a>
          </Link>
        </li>
        <li>
          <Link href={'/custom-web-development'}>
            <a>custom web development</a>
          </Link>
        </li>
        <li>
          <Link href={'/security-services'}>
            <a>security services</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
import {useRouter} from "next/router";
import {routerToTitle} from "../../lib/help";
import Link from "next/link";

export default function TitleOfAnyPage() {
  const router = useRouter()
  const routerTitle = routerToTitle(router)
  return (
    <>
      <h1 className="title-header">{routerTitle}</h1>
      <ul className="breadcrumb breadcrumb__t">
        <li>
          <Link href={'/'}>
            <a>Home&nbsp;</a>
          </Link>
        </li>
        <li className="divider">
        </li>
        <li className="active">
           &nbsp;{routerTitle}
        </li>
      </ul>
    </>
  )
}
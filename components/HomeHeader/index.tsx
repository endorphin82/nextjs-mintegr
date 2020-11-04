import { HomeNavigation } from "../Navigation/HomeNavigation"

export function HomeHeader() {
  return (
    <span className="darker-effect">
      <div className="header">

        <div className="container">
          <HomeNavigation />
        </div>

      </div>
    </span>
  )
}
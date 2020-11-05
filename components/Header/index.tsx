import { Navigation } from "../Navigation/Navigation"

export function Header() {
  return (
    <div className="darker-effect">
      <div className="header">
        <div className="container">
          <Navigation />
        </div>
      </div>
    </div>
  )
}
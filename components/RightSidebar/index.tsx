import {NavCategories} from "./NavCategories"
import {GetQuote} from "./GetQuote";

export default function RightSidebar() {
  return (
    <div className="right-sidebar">
      <NavCategories/>
      <GetQuote/>
    </div>
  )
}
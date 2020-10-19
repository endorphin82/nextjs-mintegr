import {MainLayout} from "../../components/MainLayout";
import TitleOfAnyPage from "../../components/TitleOfAnyPage";
import RightSidebar from "../../components/RightSidebar";

export default function Page() {
  return (
    <MainLayout>
      <TitleOfAnyPage/>
      <div className="row">
        <div className="left-sidebar">
          asdas
        </div>
        <RightSidebar/>
      </div>
    </MainLayout>
  )
}
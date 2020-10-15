import styles from '../styles/Home.module.css'
import {MainLayout} from "../components/MainLayout";

export default function Home() {
  return (
    <div className={styles.container}>
      <MainLayout>
        content
      </MainLayout>
    </div>
  )
}

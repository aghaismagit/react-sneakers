import { type FC } from 'react'
import styles from './NotFound.module.scss'
export const NotFoundPage: FC = () => {
  return (
    <section>
      <h1 className={styles.not_found}>Error code 404: Page not found</h1>
    </section>
  )
}

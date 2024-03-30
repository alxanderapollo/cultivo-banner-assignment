'use client'
import { useState } from 'react'
import Button from '../components/Button'
import styles from './page.module.css'

export default function Home() {
  const [buttonClicked, setButtonClicked] = useState(false)

  const handleStateChange = () => {
    setButtonClicked(!buttonClicked)
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
      </div>

      <div className={styles.bannerRectangle}>
        <div className={styles.left}>
          <div className='fileImage'></div>
          <div className={styles.file_img_and_text}>
            <div style={{ fontSize: '20px' }}>Next Step</div>
            <div style={{ fontSize: '30px' }}>Expert Report</div>
          </div>
        </div>
        <div className={styles.right}>
          {buttonClicked ? (
            <div className={styles.rightItems}>
              We received your messge. Please feel free to get in touch again if
              you would like to include any further details or ask any other
              questions. We are eager to assist you.
            </div>
          ) : (
            <div className={styles.rightItems}>
              Please get in touch if you would like an expert report for this
              site. Benefits include:
              <ul className={styles.listItems}>
                <li>Key insights from our expert team </li>
                <li>An in-depth analysis of the site</li>
                <li>Recommendations of next steps to take</li>
              </ul>
            </div>
          )}

          <div>
            <Button
              buttonClicked={buttonClicked}
              handleStateChange={handleStateChange}
            />
          </div>
        </div>
      </div>
    </main>
  )
}

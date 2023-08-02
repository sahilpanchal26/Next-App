import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Lamania. All rights reserved.</div>
      <div className={styles.social}>
        <Image src='/1.png'height={15} width={15} className={styles.icon} alt='social-1'/>
        <Image src='/2.png'height={15} width={15} className={styles.icon} alt='social-2'/>
        <Image src='/3.png'height={15} width={15} className={styles.icon} alt='social-3'/>
        <Image src='/4.png'height={15} width={15} className={styles.icon} alt='social-4'/>
      </div>
     </div>
  )
}

export default Footer
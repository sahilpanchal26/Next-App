import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

export type ItemValue = {
  _id : string
  uid : string
  img : string
  title : string
  desc : string

}

// server side fetching dynamic data
async function getData() {
  const res = await fetch('https://localhost:3000/api/posts', {
   cache:"no-store",
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

const Blog = async () => {
  const data = await getData()
  return (
    <div className={styles.mainContainer}>
      {data.map((item: ItemValue) => (
        <Link href={`/blog/${item._id}`} className={styles.container} key={item.uid}>
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Blog
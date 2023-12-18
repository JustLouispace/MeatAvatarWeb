import Head from 'next/head'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'

const Meta = () => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content="Meat Avatar คือแบรนด์ที่ผลิตเนื้อจากพืชผัก (plant-based meat) โดยใช้วัตถุดิบในประเทศไทย เพื่อให้คนไทยสามารถเข้าถึงเนื้อประเภทนี้ได้ง่ายขึ้น สิ่งที่ทำให้ Meat Avatar ทั้งยังมีProduct สำหรับคนไทยและชาวเอเชีย เช่น หมูกรอบ หมูสับ และไข่ดาว ซึ่งเป็นวัตถุดิบขาประจำในมื้ออาหารไทยและเอเชีย นอกจากคนกินจะสุขภาพดี เนื้อแพลนต์เบสด์ยังดีต่อโลกด้วย เพราะการลดการบริโภคเนื้อสัตว์จะช่วยลดการเลี้ยงปศุสัตว์ ซึ่งมีส่วนให้เกิดภาวะโลกร้อนถึง 18 เปอร์เซ็นต์"
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  )
}

export default Meta

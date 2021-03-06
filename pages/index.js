import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import img1 from '../public/images/img1.jpg';
import img2 from '../public/images/img2.jpg';
import img3 from '../public/images/img3.jpg';
import img4 from '../public/images/img4.jpg';

const images=[img1,img2,img3,img4];

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <footer className={styles.footer} style={{marginTop: '400rem'}}>
          <div style={{display:"grid",gap:"12rem"}}>
          {
            images.map((img,index)=>(<Image
              src={img}
              width={500}
              height={340}
              alt="Vercel Logo"
              placeholder="blur"
              key={index}
            />))
          }

          </div>
   
      </footer>
    </div>
  );
}

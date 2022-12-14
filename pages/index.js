import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
// import bootstrap from 'bootstrap'
import { isEmpty } from 'lodash';
import axios from 'axios';

import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons"

import { faPlus } from "@fortawesome/free-solid-svg-icons"


export async function getStaticProps() {
  const { data } = await axios.get("https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=1&format=json")
  return {
    props: { product: data },
  }
}






export default function Home({ product }) {
  const { data } = product;
  const { products } = data;
  console.log(product);
  return (

    <div className={styles.container}>
      <Head>
        <title>Trann Trimm</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.logo}>
            TANNTRIM
          </div>
          <div className={styles.icon}>
            <FontAwesomeIcon className={styles.search} icon={faMagnifyingGlass} />
            <FontAwesomeIcon className={styles.user} icon={faUserAlt} />
            <FontAwesomeIcon className={styles.bookmark} icon={faBookmark} />
            <FontAwesomeIcon className={styles.bag} icon={faShoppingBag} />
          </div>
          <div className={styles.nav}>
            <ul className={styles.items}>
              <li className={styles.cart}>Bags</li>
              <li className={styles.travel}>Travel</li>
              <li className={styles.accesories}>Accesories</li>
              <li className={styles.gift}>Gifting</li>
              <li className={styles.jwel}>Jewelery</li>
            </ul>
          </div>
          </div>
      
          {/* Main Frame data  */}
          

            
            <div className={styles.cont}>
              {!isEmpty(products) && products.length ? products.map(items => (
              <div key={items.id} className={styles.list}>
                <a  href="#">
                  <div className={styles.image}>
                    <img src="https://tjori.gumlet.io/media-image/big/252428-2018-02-06-17:10:35.377053-big-image.jpg" alt="" />
                  
                  <div className={styles.desc}>
                    <p className={styles.title}>{items.name}</p>
                    <div className={styles.detail}>
                      <span className={styles.rupee}>???</span>
                      <span className={styles.price}>{items.special_price}</span>
                      <span className={styles.orig_price}>{items.price}</span>
                      <span className={styles.dis}>50%</span>
                    </div>
                  </div>
                  </div>
                </a>         
          </div>
            )) : null}
         </div>
          </main>


    </div>
  )
}



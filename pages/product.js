import React from 'react'
import styles from '../styles/product.module.css'



const product = () => {

    return (

        <>
           <div className={styles.list}>
            <a href="#">
                <div className={styles.image}>
                    <img src="https://tjori.gumlet.io/media-image/big/252428-2018-02-06-17:10:35.377053-big-image.jpg" alt="" />
                </div>
                <div className={styles.desc}>
                    <p className={styles.title}>Abhi k liye kUch bhi</p>
                    <div className={styles.detail}>
                    <span className={styles.rupee}>₹</span>
                    <span className={styles.price}>4899</span>
                    <span className={styles.orig_price}>8799</span>
                    <span className={styles.dis}>50%</span>
                    </div>
                </div>
            </a>
           </div>
        </>

    );
}

export default product




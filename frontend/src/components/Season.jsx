import React from 'react'
import styles from "./Season.module.css"

function Season() {
  return (
    <div className={styles.season}>
    <div className={styles.nsitem}>
      <img
        src="https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt="" className={styles.nsitem}
      />
    </div>
    <div className={styles.nsitem}>
        <h3 className={styles.nstitlesm}>WINTER NEW ARRIVALS</h3>
        <h1 className={styles.nstitle}>New Season</h1>
        <h1 className={styles.nstitle}>New Collection</h1>
      
    </div>
    <div className={styles.nsitem}>
      <img
        src="https://images.pexels.com/photos/7856965/pexels-photo-7856965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt="" className={styles.nsitem}
      />
    </div>
  </div>
  )
}

export default Season

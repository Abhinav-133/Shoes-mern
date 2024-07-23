import React from "react";
import styles from "./Marquee.module.css"

function Marquee() {
  return (
    <div>
       <div className={styles.spotlight}>
            <h1>Choose Your Own</h1>

        </div>
      <div class={styles.marqueeContainer}>
        <div class={styles.marqueeContent}>
          <img
            src="https://images.unsplash.com/photo-1579446565308-427218a2c60e?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 1" className={styles.marqueeImg}
          />
          <img
            src="https://images.unsplash.com/photo-1654130491481-dc83a0a05e4e?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 2" className={styles.marqueeImg}
          />
          <img
            src="https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG5pa2UlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Image 3" className={styles.marqueeImg}
          />
          <img
            src="https://images.unsplash.com/photo-1520316587275-5e4f06f355e6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 4" className={styles.marqueeImg}
          />
          <img
            src="https://images.unsplash.com/photo-1607330852600-c7f1c8c9eda0?q=80&w=1414&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 5" className={styles.marqueeImg}
          />
          <img
            src="https://images.unsplash.com/photo-1580902215245-bd46881c72c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 6" className={styles.marqueeImg}
          />
          <img
            src="https://images.unsplash.com/photo-1533681018184-68bd1d883b97?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 7" className={styles.marqueeImg}
          />
          <img
            src="https://images.unsplash.com/photo-1710472171218-da46dce3faf9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=" Image 8" className={styles.marqueeImg}
          />
        </div>
      </div>
    </div>
  );
}

export default Marquee;

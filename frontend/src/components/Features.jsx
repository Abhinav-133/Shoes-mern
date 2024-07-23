import React from "react";
import styles from "./Features.module.css";

function Features() {
  return (
    <div className={styles.features}>
      <div className={styles.feature}>
        <img
          src="https://raw.githubusercontent.com/ZeroOctave/ZeroOctave-Javascript-Projects/main/assets/Images/sneaker-images/shipping.png"
          alt=""
          className={styles.featureicon}
        />
        <span class={styles.featureTitle}>FREE SHIPPING</span>
        <span class={styles.featureDesc}>
          Free worldwide shipping on all orders.
        </span>
      </div>
      <div className={styles.feature}>
        <img
          src="https://raw.githubusercontent.com/ZeroOctave/ZeroOctave-Javascript-Projects/main/assets/Images/sneaker-images/return.png"
          alt=""
          className={styles.featureicon}
        />
        <span class={styles.featureTitle}>30 DAYS RETURN</span>
        <span class={styles.featureDesc}>
        No question return and refund in 14 days        </span>
      </div>
      <div className={styles.feature}>
        <img
          src="https://raw.githubusercontent.com/ZeroOctave/ZeroOctave-Javascript-Projects/main/assets/Images/sneaker-images/gift.png"
          alt=""
          className={styles.featureicon}
        />
        <span class={styles.featureTitle}>GIFT CARDS</span>
        <span class={styles.featureDesc}>
        Buy gift cards and use coupon codes easily.        </span>
      </div>
      <div className={styles.feature}>
        <img
          src="https://raw.githubusercontent.com/ZeroOctave/ZeroOctave-Javascript-Projects/main/assets/Images/sneaker-images/contact.png"
          alt=""
          className={styles.featureicon}
        />
        <span class={styles.featureTitle}>CONTACT US</span>
        <span class={styles.featureDesc}>
        Keep in touch via email and support system        </span>
      </div>
    </div>
  );
}

export default Features;

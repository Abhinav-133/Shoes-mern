import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import styles from "./CarouselHome.module.css"

export default function CarouselHome() {
  return (
    <MDBCarousel interval={500}>
      <MDBCarouselItem itemId={1}>
        <img src='https://web-champions-reimagine-round1.vercel.app/assests/images/court-royale-2-low-shoe-fjdwrF.png' className={styles.carouselImage} alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src='https://web-champions-reimagine-round1.vercel.app/assests/images/Nike%20shoes%20image.jpg' className={styles.carouselImage} alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src='https://web-champions-reimagine-round1.vercel.app/assests/images/taylor-smith-aDZ5YIuedQg-unsplash.jpg' className={styles.carouselImage} alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={4}>
        <img src='https://web-champions-reimagine-round1.vercel.app/assests/images/Nike%20black%20shoe.jpg' className={styles.carouselImage} alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={5}>
        <img src='https://web-champions-reimagine-round1.vercel.app/assests/images/jeff-tumale-SD9Jyl1xNQ4-unsplash.jpg' className={styles.carouselImage} alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={6}>
        <img src='https://web-champions-reimagine-round1.vercel.app/assests/images/nike%20green%20shoe.jpg' className={styles.carouselImage} alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={7}>
        <img src='https://web-champions-reimagine-round1.vercel.app/assests/images/warren-jones-LFlVuWLjYEo-unsplash.jpg' className={styles.carouselImage} alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={8}>
        <img src='https://web-champions-reimagine-round1.vercel.app/assests/images/danilo-capece-NoVnXXmDNi0-unsplash.jpg' className={styles.carouselImage} alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
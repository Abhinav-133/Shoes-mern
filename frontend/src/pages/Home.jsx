import React, { useState, useEffect } from "react";
import CarouselHome from "../components/CarouselHome";
import Marquee from "../components/Marquee";
import Marquee2 from "../components/Marquee2";
import Season from "../components/Season";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  const [shoesCat, setshoesCat] = useState([]);
  const [shoesItems, setshoesItems] = useState([]);

  const loadData = async () => {
    try {
      let response = await fetch(`${process.env.REACT_APP_URL}/api/shoesdata`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      response = await response.json();
      setshoesCat(response.shoes_category);
      setshoesItems(response.shoes_items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Navbar />
      <CarouselHome />
      <div >
        {shoesCat.map((cat, index) => (
          <div key={index}>
            <h1
              style={{
                fontSize: "5vw",
                color: "black",
                fontWeight: "bold",
                margin: "2rem",
                fontFamily: "poppins",
              }}
              
            >
              {cat.categoryName}
            </h1>
            <hr />
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              {shoesItems
                .filter((item) => item.categoryName === cat.categoryName)
                .map((filterItems) => (
                  <div
                    key={filterItems.id}
                    className="col-12 col-md-6 col-lg-3"
                  >
                    <Card
                      Item={filterItems}
                      options={filterItems.options}
                      name={filterItems.name}
                      description={filterItems.desc}
                      image={filterItems.img}
                      price={filterItems.price}
                      id={filterItems.id}
                    />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
      <Marquee />
      <Features />
      <Marquee2 />
      <Season />
      <Footer/>
    </div>
  );
}

export default Home;

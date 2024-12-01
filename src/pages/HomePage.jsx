// src/pages/HomePage.jsx
import Footer from "../components/Footer";
import ImageAliceCarousel from "../components/ImageAliceCarouse";
import '../styles/homePage.css'
import img1 from '/homeImage/1.png'
import img2 from '/homeImage/2.png'
import img3 from '/homeImage/4.jpg'
import img4 from '/homeImage/5.jpg'
import img5 from '/homeImage/6.jpg'
import img6 from '/homeImage/7.jpg'


// import img3 from '/homeImage/3.png'

export default function HomePage() {
    const imageItems = [
      img1,
      img2,
      img3,
      img4,
      img5,
      img6
    ]
    return (
      <div>
        <div className="carousel-container">
          <ImageAliceCarousel 
          items={imageItems} 
          autoPlay 
          autoPlayInterval={3000} 
          infinite />
        </div>
        <h1>首页</h1>
        <p>欢迎来到我们的官网！</p>
      </div>
    );
  }
// src/pages/HomePage.jsx
import Footer from "../components/Footer";
import ImageAliceCarousel from "../components/ImageAliceCarouse";
import '../styles/homePage.css'
import img1 from '/homeImage/1.png'
import img2 from '/homeImage/2.png'
// import img3 from '/homeImage/3.png'

export default function HomePage() {
    const imageItems = [
      <div className="item"><img src={img1} alt="Image 1"/></div>,
      <div className="item"><img src={img2} alt="Image 2"/></div>,
      // <div className="item"><img src={img3} alt="Image 3"/></div>,
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
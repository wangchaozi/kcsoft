import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../styles/imageAliceCarouse.css'
// 对react-alice-carousel组件进行封装
const ImageAliceCarousel = ({ items, autoPlay, autoPlayInterval, infinite }) => {
    if (!items || items.length === 0) return null;
    // 定义响应式配置对象
    // 根据不同的屏幕宽度，定义在轮播中显示的项目数量
    const responsive = {
        0: { items: 1 },
    };

    return (
        <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        autoPlay={autoPlay}
        autoPlayInterval={autoPlayInterval}
        infinite={infinite}
        />
    );
};

export default ImageAliceCarousel;
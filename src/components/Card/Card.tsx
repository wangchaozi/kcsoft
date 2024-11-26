// 简单组件，传入活动文字描述及照片即可
import React from "react"
import "../Card/styles/Card.css"

interface Card {
  url: string;
  description: string;
}

export default function Card(props: Card) {
  return (
    <div className="card">
      <img className="img" src={ props.url } alt="" />
      <p className="description">{ props.description }</p>
    </div>
  )
}

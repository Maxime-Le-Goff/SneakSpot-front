import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faStar } from "@fortawesome/free-regular-svg-icons"
import { useState } from "react"

const SneakerDecriptionCard = ({ model, price, img, brand, description,color }) => {
  return (
    <div className="card-03">
			<div className="contentBox-01" >
				<span className="like"><FontAwesomeIcon icon={faHeart} /></span>
				<div className="main-image">
					<img src={img} alt={model} />
				</div>
			</div>
			<div className="contentBox-02">
				<div className="sub-image">
					{/* <a href="#"><img src="https://github.com/JackCree/CSSexercices/blob/main/Product-Card-UI/nike-air-zoom-01.png?raw=true" alt="thumb image of the front view of the shoe" /></a> */}
					{/* <a href="#"><img src="https://github.com/JackCree/CSSexercices/blob/main/Product-Card-UI/nike-air-zoom-02.png?raw=true" alt="thumb image of the back view of the shoe" /></a>
					<a href="#"><img  src="https://github.com/JackCree/CSSexercices/blob/main/Product-Card-UI/nike-air-zoom-03.png?raw=true" alt="thumb image of the profile view of the shoe" /></a>
					<a href="#"><img  src="https://github.com/JackCree/CSSexercices/blob/main/Product-Card-UI/nike-air-zoom-04.png?raw=true" alt="thumb image of the behind view of the shoe" /></a> */}
				</div>				
			</div>
			<div className="contentBox-03">
				<div className="branding">
					<span>{model}</span>
					<h2>{brand.name}</h2>
				</div>
				<div className="ratings">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
				</div>
				<div className="paragraph">
					<p>{description}</p>
					<span>Read More</span>
				</div>
				<div className="prices">
					<span>$</span>
					<span>{price}</span>
					<div className="space"></div>
					<a className="bg-coral-red" href="#">ADD to CARD</a>
				</div>
			</div>
		</div>
  )
}

export default SneakerDecriptionCard
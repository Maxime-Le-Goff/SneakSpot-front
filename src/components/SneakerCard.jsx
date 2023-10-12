import { useState } from "react"
import StarRating from "./StarRating";
import { Heart } from "lucide-react";

const SneakerCard = ({ model, price, img, brand, description,color, rating }) => {
	const brandStyle = {
		'--brand': `"${brand.name}"`, // Set the --brand CSS variable
	};
	const [isHeartOn, setIsHeartOn] = useState(false);

  return (
    <div className="card-03">
			<div className="contentBox-01" style={brandStyle} >
				<span 
					className={`${isHeartOn ? 'text-red-500' : 'text-zinc-500' }`} 
					onClick={() => {setIsHeartOn(!isHeartOn)}}
				>
				<Heart />
				</span>
				<div className="main-image">
					<img src={img} alt={model} draggable={false} />
				</div>
			</div>
			<div className="contentBox-02">			
			</div>
			<div className="contentBox-03">
				<div className="branding">
					<span>{model}</span>
					<h2>{brand.name}</h2>
				</div>
				<div className="ratings">
					<StarRating rating={rating} maxRating={5} />
				</div>
				<div className="paragraph">
					<p>{description}</p>
					<span>Read More</span>
				</div>
				<div className="prices">
					<span>$</span>
					<span>{price}</span>
					<div className="space"></div>
					<a className="bg-coral-red hover:bg-red-500" href="#">ADD to CARD</a>
				</div>
			</div>
		</div>
  )
}

export default SneakerCard
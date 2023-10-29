import { useState } from "react"
import StarRating from "./StarRating";
import { Heart } from "lucide-react";
import axios from "axios";

const SneakerCard = ({ id, model, price, img, brand, description,color, rating, setOpenDialog }) => {

	const brandStyle = {
		'--brand': `"${brand.name}"`,
	};
	const [isHeartOn, setIsHeartOn] = useState(false);
	const [isAddedToCart, setIsAddedToCart] = useState(false);

	const handleAddToCart = async () => {

		if(localStorage.getItem("token")) {
			const token = localStorage.getItem("token");
			const email = localStorage.getItem('user');
			const data = {
				id: id,
				email: email,
			};
			try {
				const response = await axios.post('http://localhost:8080/api/product_to_cart',data, {
					headers: {
						'Authorization': `Bearer ${token}`
					},
				});
				if (response.data.success) {
					setIsAddedToCart(true);
					setTimeout(() => {
						setIsAddedToCart(false)
					}, 3000)
		
			} else {
				console.log('Error:', response);
			}
			} catch (error) {
				console.log(error);
			}
		} else {
			setOpenDialog(true);
		}
	}

  return (
	<>
    <div className="card-03">
			<div className="contentBox-01" style={brandStyle} >
			{isAddedToCart && (
				<div className="bg-emerald-400 p-5 rounded-lg text-white flex justify-center items-center">
					<p>Item added to cart</p>
				</div>
			)}
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
					<a 
						className="bg-coral-red hover:bg-red-500"
						onClick={() => handleAddToCart() }	
					>
						ADD to CART
					</a>
				</div>
			</div>
		</div>
		
		</>
  )
}

export default SneakerCard
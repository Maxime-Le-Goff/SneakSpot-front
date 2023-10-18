import { Star } from "lucide-react";

const StarRating = ({ rating, maxRating }) => {
    const starIcons = [];
    for (let i = 1; i <= maxRating; i++) {
        const filled = i <= rating;
        starIcons.push(
          <span key={i} className={` ${filled ? 'text-yellow-500' : 'text-zinc-400'}`}>
            <Star />
          </span>
        );
      }
  return (
    <div className="flex">
      {starIcons}
    </div>
  )
}

export default StarRating
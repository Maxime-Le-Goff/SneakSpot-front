const StarRating = ({ rating, maxRating }) => {
    const starIcons = [];
    for (let i = 1; i <= maxRating; i++) {
        const filled = i <= rating;
        starIcons.push(
          <span key={i} className={`text-lg ${filled ? 'text-yellow-500' : 'text-zinc-400'}`}>
            &#9733;
          </span>
        );
      }
  return (
    <div>{starIcons}</div>
  )
}

export default StarRating
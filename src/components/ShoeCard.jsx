const ShoeCard = ({ imgURL, changeBigShoeImg, bigShoeImg}) => {
    
    const handleClick =() => {
        if(bigShoeImg !== imgURL.img) {
            console.log(bigShoeImg, imgURL.img);
            changeBigShoeImg(imgURL.img)
        }
    }
  return (
    <div 
        className={`border-2 rounded-xl ${bigShoeImg === imgURL.img ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1`}
        onClick={handleClick}
        >
        <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 roundedxl max-sm:p-4">
            <img 
                src={imgURL.img}
                alt="shoe collection"
                className="h-[200px] aspect-square"
            />
            
        </div>
    </div>
  )
}

export default ShoeCard
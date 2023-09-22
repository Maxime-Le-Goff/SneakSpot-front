const ShoeCard = ({ imgURL, changeBigShoeImg, bigShoeImg}) => {
    const handleClick =() => {
        if(bigShoeImg !== imgURL.img) {
            changeBigShoeImg(imgURL.img)
        }
    }
  return (
    <div 
        className={`border-2 rounded-x1 ${bigShoeImg === imgURL ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1`}
        onClick={handleClick}
        >
        <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 roundedxl max-sm:p-4">
            <img 
                src={imgURL.img}
                alt="shoe collection"
                width={127}
                height={103}
            />
            
        </div>
    </div>
  )
}

export default ShoeCard
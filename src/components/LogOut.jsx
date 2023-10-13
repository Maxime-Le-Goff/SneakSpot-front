const LogOut = () => {
  return (
    <div>
        <div className="flex items-center sm:w-[80%] w-[95%] h-20 bg-pale-blue rounded-md">
            <User2 className="mx-7" />
            <input className="h-12 w-[100%] bg-transparent border-none outline-none text-coral-red text-lg" placeholder="Name" type="text" />
        </div>
        <div className="flex items-center sm:w-[80%] w-[95%] h-20 bg-pale-blue rounded-md">
            <MapPin className="mx-7" />
            <input className="h-12 w-[100%] bg-transparent border-none outline-none text-coral-red text-lg" placeholder="Adress" type="text" />
        </div>
    </div>
  )
}

export default LogOut
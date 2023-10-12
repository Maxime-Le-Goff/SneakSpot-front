const Dialog = ({ open }) => {

  return (
    <dialog open={open} className="w-[50%] h-52 z-50 border border-x-emerald-500 rounded-xl absolute top-[35%] left-[25%] ">
    <div className="flex flex-col justify-center items-center">
        <h2 className="font-montserrat font-semibold text-xl mt-5">Dialog Title</h2>
        <div className="flex">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" className="border border-disabled rounded-full" >
          </input>
        </div>
        <button>Close</button>
      </div>
    </dialog>
  )
}

export default Dialog
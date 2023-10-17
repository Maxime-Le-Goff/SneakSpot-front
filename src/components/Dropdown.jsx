import { LogOut, Truck } from "lucide-react"
import { Link } from "react-router-dom"

const Dropdown = () => {
  return (
    <div className="absolute top-10 left-0 w-[200px] -translate-x-[45%] bg-white border border-slate-200 rounded-md overflow-hidden">
        <ul className="">
        <div className="flex gap-3 p-4 hover:bg-slate-50 cursor-pointer">
          <Truck />
          <li className="">
            My Orders
          </li>
        </div>
        <div className="flex gap-3 p-4 hover:bg-slate-50 cursor-pointer">
          <LogOut />
          <li>
            Log Out
          </li>
        </div>
        </ul>
    </div>
  )
}

export default Dropdown
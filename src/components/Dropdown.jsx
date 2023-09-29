import { Link } from "react-router-dom"

const Dropdown = ({ name }) => {
  return (
    <li className="font-montserrat text-white-400 font-semibold px-5">
        <Link
            to="#"
        >
            {name}
        </Link>
    </li>
  )
}

export default Dropdown
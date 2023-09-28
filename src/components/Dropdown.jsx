import { Link } from "react-router-dom"

const Dropdown = ({ name }) => {
  return (
    <li>
        <Link
            to="#"
        >
            {name}
        </Link>
    </li>
  )
}

export default Dropdown
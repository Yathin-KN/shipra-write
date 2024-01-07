import { Link } from "react-router-dom"
import Write from "./write"
import ShipraLogo from "../assets/Shipra_logo.svg"
const Project = () => {
  return (
    <div>
        <Link to={"/home"} className=" w-screen">
           <img src={ShipraLogo} className="px-4 py-4"></img>
        </Link>
        <Write selectedCard={"project"} />
    </div>
  )
}

export default Project
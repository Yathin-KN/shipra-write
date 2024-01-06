import { Link } from "react-router-dom"
import Write from "./write"

const Project = () => {
  return (
    <div>
         <Link to={"/home"} className="py-4 px-4 w-screen bg-slate-50 z-50 fixed">
           <img src="https://6596b5a88f29e103c1024276--cool-macaron-1a73d4.netlify.app/images/Shipra_logo.svg"></img>
        </Link>
        <Write selectedCard={"project"} />
    </div>
  )
}

export default Project
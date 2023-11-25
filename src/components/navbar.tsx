import { Link } from "react-router-dom"

const Navbar  = ()=>{
    return(
        <nav>
            <Link to="/" className=""> All </Link>
            <Link to="/?todos=active" className=""> Active </Link>
            <Link to="/?todos=completed" className=""> Completed </Link>
        
        </nav>
        // query string start with ? and contain two key value pairs
    )
}
export default Navbar


import { Link , useSearchParams } from "react-router-dom"

const Navbar  = ()=>{
const [searchParams] = useSearchParams();
// eslint-disable-next-line prefer-const
let todosData = searchParams.get("todos");

    return(

        <nav>
            <Link to="/" className={todosData === null ? "active" : ""}> All </Link>
            <Link to="/?todos=active" className={todosData === "active" ? "active" : ""}> Active </Link>
            <Link to="/?todos=completed" className={todosData === "completed" ? "active" : ""}> Completed </Link>
        
        </nav>
        // query string start with ? and contain two key value pairs
    )
}
export default Navbar


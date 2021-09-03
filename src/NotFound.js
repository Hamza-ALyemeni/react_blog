import { Link } from "react-router-dom"

const NotFound = () => {
    return (
         <div>
             <h2>Sorry</h2>
             <p>there's no such page</p>
             <Link to='/'> Go back to home page</Link>
        </div> 
);
}
 
export default NotFound;
import {Link} from 'react-router-dom'
const NotFound = () => {
    return (  
        <div className="notFound">
            <h2>Sorry!</h2>
            <p>Page not found</p>
            <Link to='/'>back to homepage...</Link>
        </div>
    );
}
 
export default NotFound;
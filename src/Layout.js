import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Layout = () => {
    return (
        <>
        
           <nav> 
            <button class="btn">
                <Link to="/MyInput">InputboxColors</Link>
            </button>
            <button class="btn">
                <Link to="/TasksList">Tasks</Link>
            </button>
            <button class="btn">
                <Link to="/ItemsList">Items</Link>
            </button>
            <button class="btn">
                <Link to="/UserList">Userform</Link>
            </button>
            </nav>
          
    
        <Outlet />
        </>
      )
    };

export default Layout;
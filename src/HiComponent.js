import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function HiComponent(){
    return(
    <>
    <div className='row'>
        <div className='col-sm-1'></div>
        <div className='col-sm-2'>    
            <h2 >HI</h2>
            <p>This is first component left-top side</p>
        </div>
        <div className='col-sm-9'></div>
    </div> 
    </> 
    );
}
export default HiComponent;


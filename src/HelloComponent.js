import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
function HelloComponent(){
    return(
        <>
        <div className='row'>
            <div className='col-sm-4'></div>
            <div className='col-sm-4'></div>
            <div className='col-sm-2'></div>
            <div className='col-sm-2'>
                <h2>Hello</h2>
            </div>    
        </div>
        </>
    );
}
export default HelloComponent;
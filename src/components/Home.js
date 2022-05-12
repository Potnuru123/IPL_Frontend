import React from "react";
import { Link } from "react-router-dom";
import Homelogo from "../IPL-fantacy-League1.png";
import './Home.css';

 function Home(){
    return(
        <>
        <div>
           
            <img src={Homelogo} alt="Homelogo" className="Homelogo" style={{padding:"10px",height:"710px",width:"1520px",}}/>
            
            <button class="top-right" style={{height:"30px",width:"90px",background:"white"}}> <Link to='Login'>Login</Link> </button>
            
            <button class="top-left" style={{height:"30px",width:"90px",background:"white"}}><Link to='SignUp'>SignUp</Link></button>

        </div>

        </>
    )
}
export default Home;
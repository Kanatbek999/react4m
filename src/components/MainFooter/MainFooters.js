import React from "react";
 import './MainFooters.css'
import footer from '../../image/footer.svg'
import footer1 from '../../image/footer1.svg'
import footer2 from '../../image/footer2.svg'


const MainFooter = () => {
   
    return (
        <div className="container">
            <div className="footer">
                <div className="footer__home">
                 <ul>
                    <li>Home</li>
                    <li>info</li>
                    <li>help</li>
                </ul>

                </div>
                
                <div className="footer__number">
                    <li>+996550565644</li>
                    <li>+996707545455</li>
                    <li>+996707071754</li>

                </div>
                <ul>
                    
                </ul>
                <div className="footer__img">
                <img src={footer}></img>
                <img src={footer1}></img>
                <img src={footer2}></img>
              
            </div>
         
              </div>
        </div>
    )
}

export default MainFooter;
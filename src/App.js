import MainHeader from "./components/MainHeader/MainHeader";
import MainFooter from "./components/MainFooter/MainFooters";

import './App.css'
import fon from './image/Rectangle.png'
import foto1 from './image/maple1.png'
import foto2 from './image/maple2.png'
import foto3 from './image/maple3.png'
import our from './image/our.png'
import your from './image/your.png'

function App() {
  return (
    <>
 <MainHeader/>
 <main>


<section>
      <div className="shop">
        <img className="fon" src={fon}/>
  <div className="shop__element">
    <p className="shop__all">ALL COLLECTIONS</p>
      <h1 className="shop__text">Elevate Your Everyday</h1>
      <button className="shop__btn">SHOP ALL</button>
      </div>
      <p className="shop__title">If your happy place is at the dinner table, we totally get that. That’s why we created products to help you find slow moments in a fast world.</p>
      <ul>
        <li className="shop__ul">Shop all →</li>
      </ul>
 </div>
</section>



<section>
  <div className="maple">
    <h1 className="maple__txt">Maple Board Collection</h1>
    <div className="maple__img">
        <img src={foto1}></img>
        <img src={foto2}></img>
        <img src={foto3}></img> 
        </div>
        <div className="mapleall__title">
        <h2>Maple Board - Short</h2>
        <h2>Maple Board - Long</h2>
        <h2>Maple Board - Wide</h2>
    </div>
    <div className="maple__price">
      <p>$98.00</p>
      <p>$125.00</p>
      <p>$158.00</p>
    </div>
  </div>
</section>


<section>
  <div className="our">
       <img className="our__img" src={our}/>
       <div className="our__titles">
       <h1 className="our__text">Our Design Story</h1>
       <p className="our__title">We believe in thoughtful, intentional living. So we promise not to clutter your cabinets with one-off pieces you’ll rarely use. Our collection only includes items you’ll reach for every day. Because mindful living should be simple, not stressful.</p>

       </div>
    
  </div>
</section>
<section>
<div className="your">
  <div className="your__titles">
<h1 className="your__text">Your Table Your Time</h1>
<p className="your__title">Our modern lives keep us in constant motion. But what keeps us moving isn’t always what moves us. Our time at the table is our pause button. Meals can become moments and moments can become memories. So grab a plate, pull up a seat, and stay a while</p>
</div>
<img className="your__img" src={your} />
</div>
</section>


<section>
<div className="register">
    <h1 className="reg__text">Sign up to our newsletter</h1>
    <div className="inputs">
      <input className="input" type="text" placeholder="Name"></input>
      <button className="reg__btn" type="button">Subscribe</button>
    </div>
    
</div>
</section>
</main> 
    <MainFooter/>
    </>
  );
}

export default App;

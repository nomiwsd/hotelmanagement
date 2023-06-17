import React from 'react'
import instore from '../Assets/instore.PNG'
import Curb from '../Assets/curb.PNG'
import drivethru from '../Assets/drivethru.PNG'
import oatmeal from '../Assets/oatmeal.webp'
import ordernow from '../Assets/ordernow.webp'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
function Order() {
  return (
    <div>
        <Header/>
      <div class="head2">
        <h1 class="h1">ORDER, PICKUP AND DELIVERY OPTIONS</h1>
        <p id="h2">Order and pay ahead of time</p>
        <p id="detail">Whether you’re on a phone, tablet or laptop, your Starbucks order is at your fingertips. Explore the menu, customize your order just how you like it, and find the store location that’s best for you.</p>
    </div>    
<br/> <br/> <br/>
    <div class="ordernow">
        <img id="i1" src={ordernow} alt="App" width="670px" height="350px"/>
    </div>
    <div class="ordertext">
        <br/> <br/> <br/>
        <p id="h2" style={{textAlign: 'center'}}>Order on the app</p>
        <p id="detail" style={{textAlign: 'center'}}>Say hello to one of the easiest ways to get your order.<br/>
            We’ll tell you how long until your order is ready and let <br/>
            you save your favorites for next time.</p>
            <a href="file:///F:/Web%20Project/order%20on%20the%20app.html" class="btnap"> Download the App </a>
    </div>
    <div class="head3">
        <br/> <br/> <br/>
        <p id="h2" style={{textAlign: 'center'}}>Order online</p>
        <p id="detail" style={{textAlign: 'center'}}>Can’t download the app or don’t have your phone on<br/>
            hand? You can still order just as fast. Treat yourself to your <br/>
            drink or food of choice.</p>
            <a href="file:///F:/Web%20Project/Menu%20page.html" class="btnor"> Order now </a>
    </div>
    <div class="head3img">
        <img id="i2" src={ordernow} alt="order now img" width="674px" height="345.5px"/>
    </div>
    <br/> <br/> <br/> <br/> <br/>
    <div class="head4">
        <p id="h2">Pick up with ease</p>
        <p id="detail">We offer a variety of ways to get your order store by store. Whether you’re in a car or on foot, you’ve got options when it comes to getting your order.</p> 
    </div>
    <br/> <br/> <br/> <br/>
    <div class="instore">
        <img src={instore} alt="instore image" width="674px" height="345px"/>
    </div>
    <div class="head5">
        <br/> <br/> <br/>
        <p id="h2">In store</p>
        <p id="detail">Save time by ordering ahead and paying on the app. Once your order is placed, come inside, head to the waiting area, and we’ll call your name when it’s ready.</p> 
    </div>
    <br/> <br/> <br/>
    <div class="drivethru">
        <img id="i4" src={drivethru} alt="drive thru" width="674px" height="345px"/>
    </div>
    <div class="head6">
        <br/> <br/> <br/>
        <p id="h2">Drive-thru</p>
        <p id="detail">Drive up, check out the menu, and order from the comfort of your car. You can also order ahead of time on the app—just let the barista know when you pull in.</p> 
    </div>
    <br/> <br/> <br/>
    <div class="curb">
        <img id="i5" src={Curb} alt="curb" width="674px" height="345px"/>
    </div>
    <div class="head7">
        <br/> <br/> <br/>
        <p id="h2">Curbside</p>
        <p id="detail">See if a store near you has Curbside Pickup available on the app. Order and pay ahead of time, drive to the store, and park in one of our designated Curbside spots. Use the app to let us know you’re here, stay buckled-in, and we’ll bring your order right to your car.</p> 
    </div>

    <br/> <br/> <br/> <br/> <br/> <br/>

    <hr/>

    <br/> <br/>
    <Footer/>
    </div>
  )
}

export default Order

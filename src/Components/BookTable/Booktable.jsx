import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

function Booktable() {
  return (
    <div>
        <Header/>
      <div class="col-lg-6 mx-auto"><div class="book-table becom-membr wow bounce" data-wow-delay="0.5s"><div class="membr-contnt text-center"><h2 class="h2 font-weight-bold fs-50 mb-0">Book A Table</h2>
      <form class="bcom-membr"><select class="minimal mb-3"><option>Booking Type</option><option>Lunch</option><option>Midnight Dinner </option><option>Early Evening </option></select><select class="minimal mb-3"><option>Number of people</option><option>Three to Five person</option><option>Two person</option></select><div class="d-lg-flex"><input class="mb-3 mr-3" type="date"/><input class="mb-3" type="time"/></div></form><div class="mt-3"><button type="submit" class="submitbtn p-2">Enquire Now</button></div></div></div></div>
      <Footer/>
    </div>
  )
}

export default Booktable

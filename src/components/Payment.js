import React from "react"
import "./Payment.css"



const Services = () => {
  return (
    <>
    <div>
    <div class="card mt-50 mb-50">
            <div class="card-title mx-auto">
                PAYMENT
            </div>
            <div class="nav">
                <ul class="mx-auto">
                    <li class="active"><a href="#">Payment</a></li>
                </ul>
            </div>
            <form>
                <span id="card-header">Saved cards:</span>
                <div class="row row-1">
                    <div class="col-2"><img class="img-fluid" src="https://img.icons8.com/color/48/000000/mastercard-logo.png"/></div>
                    <div class="col-7">
                        <input type="text" placeholder="**** **** **** 3193"/>
                    </div>
                    <div class="col-3 d-flex justify-content-center">
                        <a href="#">Remove card</a>
                    </div>
                </div>
                <div class="row row-1">
                    <div class="col-2"><img  class="img-fluid" src="https://img.icons8.com/color/48/000000/visa.png"/></div>
                    <div class="col-7">
                        <input type="text" placeholder="**** **** **** 4296"/>
                    </div>
                    <div class="col-3 d-flex justify-content-center">
                        <a href="#">Remove card</a>
                    </div>
                </div>
                <span id="card-header">Add new card:</span>
                <div class="row-1">
                    <div class="row row-2">
                        <span id="card-inner">Card holder name</span>
                    </div>
                    <div class="row row-2">
                        <input type="text" placeholder="Bojan Viner"/>
                    </div>
                </div>
                <div class="row three">
                    <div class="col-7">
                        <div class="row-1">
                            <div class="row row-2">
                                <span id="card-inner">Card number</span>
                            </div>
                            <div class="row row-2">
                                <input type="text" placeholder="5134-5264-4"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-2">
                        <input type="text" placeholder="Exp. date"/>
                    </div>
                    <div class="col-2">
                        <input type="text" placeholder="CVV"/>
                    </div>
                </div>
                <button class="btn d-flex mx-auto"><b>Pay</b></button>
            </form>
        </div>
    </div>
    </> 
  )
}

export default Services

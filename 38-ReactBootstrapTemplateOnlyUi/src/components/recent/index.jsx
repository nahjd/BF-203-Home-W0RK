import React from 'react'
import "./recent.css"
function index() {
    return (
        <div className='recent'>
            <p>PORTFOLIO</p>
            <h1>Recent Projects</h1>
            <div className="carts">
                <div className="cart1">
                    <h3>Stationary</h3>
                    <span>A yellow pencil with envoleps on a clean,blue backdrop!</span>
                </div>

                <div className="cart2">

                    <h3>Ice Cream</h3>
                    <span>A dark blue background with a colored pencil, a clip, and a tiny ice cream cone!</span>

                </div>
                <div className="cart3">

                    <h3>STRAWBERRIES</h3>
                    <span>Strawberries are such a tasty snack, especially with a little sugar on top!</span>

                </div>

                <div className="cart4">
                    <h3>Workspace</h3>
                    <span>A yellow workspace with some scissors, pencils, and other objects.</span>
                </div>
            </div>
        </div>
    )
}

export default index
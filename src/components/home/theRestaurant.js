import React from 'react';

function TheRestaurant (){
    return (
        <div>
            <div id="theRestaurantImage">
                <p>We make mediterranian food
                <br/> (and some other crazy things)</p>
                <hr id="textUnderline" />
                <img src={require("../images/chefknifeanimation.jpg")} alt="Chef knife" />
            </div>

            <div className="descriptionBox">
                    <h2>The Restaurant</h2>
                    <p>The eatery is set over a series of rooms,
                    where an intimate wood-clad bar with marble detailing and a feature chandelier by lighting designer
                    Lindsey Adelman, gracefully unfolds into a splendid stainless-steel show kitchen,
                    two dining rooms and a leafy outdoor terrace.
                    Food by fashionable Madrid-based enterprise The Company of Wolves is modern tapas; expect fancy versions of classic
                    dishes such as jamón ibérico con pan con tomate or gambas al ajillo.</p>
            </div>
        </div>
    );
};

export default TheRestaurant;
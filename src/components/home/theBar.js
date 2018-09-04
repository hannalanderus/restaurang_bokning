import React from 'react';

function TheBar (){
    return (
        <div>
            <div id="theBarImage">
                <p>We turn drinks into a piece of art</p>
                <hr id="textUnderline" />
                <div id="theBarbox">  
                    <div className="martini">   
                        <h3>Espresso Martini</h3>     
                        <p>Have you ever wondered how passionate
                        craftsmanship might tast like?
                        Come and try our creatively designed cocktails and
                        experience it yourself.</p>
                    </div>

                    <hr id="cocktailLine" />

                    <img src={require("../images/espressomartini1.png")} alt="Espresso Martini"/>

                    <hr id="bestQualityLine" />

                    <div className="martiniQuality">
                        <h3>Best Quality</h3>
                        <p>Local products simply taste better. That is why we source our products largely
                        from farmers and suppliers from our country.</p>
                    </div>
                </div>
            </div>

            <div className="descriptionBox">
                    <h2>The Bar</h2>
                    <p>Make yourself comfortable before or after a meal.
                    The bar of Juana La Loca contains a central counter topped with
                    pale stone, which contrast with the overall palatte of the dark 
                    Sapan wood veneer walls, ceilings,
                    and hardwood floors. The low-profile furniture and soft lighting
                    from small fixtures in the ceiling add a vaguely nostalic but
                    edgy refinement. An atmosphere soon to realize will make you 
                    feel more than comfortable.</p>
            </div>
        </div>
  );
};

export default TheBar;
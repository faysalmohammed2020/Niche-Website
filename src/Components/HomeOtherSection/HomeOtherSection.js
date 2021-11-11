import React from 'react';
import './HomeOtherSection.css'
import counterone from '../../images/counter-1.png';
import counterTwo from '../../images/counter-2.png';
import counterThree from '../../images/counter-3.png';
import counterFour from '../../images/counter-4.png';

const HomeOtherSection = () => {
    return (
    < div className="counter-container">
    <div className="counter-section">

            <div>
        < div className ="counter">
            <div className="counter-1">
                <img src={counterone}/>
                <div className="counter-text">
                <h1>2500</h1>
                <p>HAPPY CLIENT</p>
                </div>
        </div>
        <div className="counter-2">
            <img src={counterTwo}/>
            <div className="counter-text">
            <h1>490</h1>
            <p>COFFEE CUPS</p>
            </div>
        </div>
        <div className="counter-3">
            <img src={counterThree}/>
            <div className="counter-text">
            <h1>50</h1>
            <p>BRANCHES</p>
            </div>
        </div>  
        <div className="counter-4">
            <img src={counterFour}/>
            <div className="counter-text">
            <h1>345</h1>
            <p>EMPLOYEES</p>
            </div>
        </div>  
        </div>
            </div>

    </div>
    </div>
    );
};

export default HomeOtherSection;
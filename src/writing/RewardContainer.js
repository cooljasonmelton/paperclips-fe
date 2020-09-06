import React, {useState} from 'react';

// router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// images
import cutePic from './cute-animal-pic.jpg'

// styling
import './Write.css';

// components


const RewardContainer = () => {
    const [rewardNum, setRewardNum] = useState(1)

    const setClass = num => {
        const classArr = ["rew-img"];
        if (rewardNum === num) classArr.push('active')
        if (rewardNum > num) classArr.push('previous')
        if (rewardNum < num) classArr.push('next')
        return classArr.join(' ')
    }

    return (
        <div className="RewardContainer">
            <div className="rew-carousel">
                <img className={setClass(1)} src={cutePic} />  
                <img className={setClass(2)} src={cutePic} />      
                <img className={setClass(3)} src={cutePic} />     
                <div className="rew-controls">
                    <button className="rew-button"> 
                        {"<"} 
                    </button>
                    <button className="rew-button"> 
                        {">"} 
                    </button> 
                </div> 
            </div>
        </div>
    );
}

export default RewardContainer;

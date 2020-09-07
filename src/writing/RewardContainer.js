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
            <div className="rew-carousel cfb">
                <img className={setClass(1)} src={cutePic} />  
                <img className={setClass(2)} src={cutePic} />      
                <img className={setClass(3)} src={cutePic} />     
            </div>
            <div className="rew-controls cfb">
                <button className="rew-button prev"
                    onClick={() => setRewardNum(rewardNum - 1)}
                    disabled={rewardNum <= 1}> 
                    {"<"} 
                </button>
                <button className="rew-button next"
                    onClick={() => setRewardNum(rewardNum + 1)}
                    disabled={rewardNum >= 3}>  {/* when i have reg images, set to imgs length */}
                    {">"} 
                </button> 
            </div> 
        </div>
    );
}

export default RewardContainer;

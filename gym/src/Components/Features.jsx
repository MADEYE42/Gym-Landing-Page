import React from 'react';
import FeatureBox from './FeatureBox';
import image1 from '../assets/1.svg';
import image2 from '../assets/2.svg';
import image3 from '../assets/3.svg';
import image4 from '../assets/4.svg';


const Features = () => {
  return (
    <div id='features'>
        <h1>Features</h1>
        <div className="a-container">
            <FeatureBox image = {image1} title="Weight Lifting"/>
            <FeatureBox image = {image2} title="Specific Muscle" />
            <FeatureBox image = {image3} title="Flex Your Muscle" />
            <FeatureBox image = {image4} title="Cardio Exercise" />
        </div>
    </div>
  )
}

export default Features
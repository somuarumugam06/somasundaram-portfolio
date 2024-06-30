import React from 'react';
import "./About.css";
import photography from "../../../assets/photo_bg_two.jpg";
import award from "../../../assets/award.jpg";

const About = () => {
    return (
        <div className='a'>
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img 
                        src={photography} 
                        alt="photography-icon" 
                        className="a-img" 
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className='a-title'>About Me</h1>
                <p className='a-sub'>I am a  fresher front-end developer by my work and passion, I love creating interactive, cool, creative and beautiful apps</p>
                <p className='a-desc'>I have basically created apps using HTML5, CSS3, Javascript, Reactjs, and you can check them in the below section of my portfolio. and explore new places. I like photography, apart from coding of course. If you find my portfolio interesting enough and you want to work with me, do not hesitate to drop a mail at my email id mentioned in the contact section. You can also call me on my contact number mentioned.</p>
                
            </div>
        </div>
    )
}

export default About

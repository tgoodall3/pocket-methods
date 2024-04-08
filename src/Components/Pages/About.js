import React from 'react';
import '../../Styles/about.css';
import Charlie from '../../Assets/images/charlie.webp';
import Banner from '../../Assets/images/about-banner.webp';
import BW from '../../Assets/images/about-bw.png';
import Flyer from '../../Assets/images/about-flyer.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


function About() {
    return (
        <div className="about-container">
            <div className="about-header">
            <h1 className='about-head'>About us</h1>
            <p className='about-p' data-aos='fade-left'>Welcome to Pocket Methods! We are a dedicated team of musicians and educators passionate about helping you become the best musician you can be. Whether you're just starting out or looking to take your skills to the next level, we have the resources and exercises to guide you on your musical journey. <br/> <br/>
            At Pocket Methods, we believe that music is a universal language that brings people together. That's why our exercises are designed to cater to different skill levels and musical interests. We want to help you connect with the music you love and develop your own unique musical voice. <br/> <br/> 
            Our mission is to provide a motivating and inclusive learning experience for students, teachers, and parents in the field of instrumental music. We aim to connect learners with music content standards while honoring their diverse musical experiences. Through Pocket Methods, we strive to empower musicians of all skill levels to grow, connect with the music they love, and become versatile and comprehensive players. 
            </p>
            </div>
            <div className='ceo'>
            <img className='ceoImg' src={Charlie} />
            <div className="ceo-info" data-aos='fade-in'>
            <h3 className="ceo-name">Charlie Edmonds - CEO & Founder</h3>
            <p className="ceo-title">As a middle school band director, I found myself creating beginning band exercises that connected to music content standards and made my students feel seen and heard in their first year of instrumental music learning. For many of my students, Black gospel music was that resonating connection that honored the musical experiences they brought with them to school. Pocket brings this motivating learning experience to the fingertips of any student, teacher, or parent. I hope you enjoy it!</p>
            </div>
            </div>
            {/* <h2>For the versatile, comprehensive player.</h2> */}
            <div className='banner-wrap'>
    
            <img className='banner' src={Banner} data-aos='fade-up'/>

            </div>
            {/* <p>Whether you’re a beginner or a seasoned musician, Pocket has something for everyone. Our exercises are designed to help you grow as a musician and connect with the music you love. We offer a variety of exercises that cater to different skill levels and musical interests. Our exercises are designed to help you grow as a musician and connect with the music you love. We offer a variety of exercises that cater to different skill levels and musical interests.</p> */}
            <div className='content' data-aos='fade-up'>
                <div className='content-left'>
                    <h2>Our Mission</h2>
                    <p>Our mission is to provide a motivating and inclusive learning experience for students, teachers, and parents in the field of instrumental music. We aim to connect learners with music content standards while honoring their diverse musical experiences. Through Pocket, we strive to empower musicians of all skill levels to grow, connect with the music they love, and become versatile and comprehensive players.</p>
                </div>
                <div className='content-right'>
                    <img className='bw' src={BW} />
                </div>
            </div>
        </div>
    );
}

export default About;

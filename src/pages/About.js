import React from 'react';
import fishing2021 from './images/fishing_2021.jpg'

const About = () => {
    return(
        <div>
            <h1>About Me</h1>
            <p>This website will be used as my personal portfolio to demonstrate my knowledge of coding, skills in 3D, and additional details relating to full representing my ability.
                <br/>
                If you wish to learn about my qualifications and specializations, click on the "R&#233;sum&#233;" link above.
                <br/>
                If you're looking to see my portfolio of projects and various other works, click on the "Gallery" link.
                <br/>
                Alternatively, if you're interesting in my GitHub repository or are looking for my LinkedIn account, they can be found in the "Find Me" link in the navbar.
            </p>
            <hr/>
            <h2>Who is Thomas Hammer?</h2>
            <figure>
                <img src={fishing2021} alt="Thomas Hammer fishing from 2021"/>
                <figcaption>Fishing at Canadice Lake</figcaption>
            </figure>
            <p>I was diagnosed with autism at a young age, naturally I faced many hardships both academically and socially. I often had to have equations and problems explained to me in detail and struggled to grasp certain concepts, to this day Math still kicks my ass. Socially I was what some would call the "weird kid". I didn't understand or pick up on many social cues, much of the time I was playing catch up to everyone else and often dealt with bullying as a result. This, unfortunately, began to develop into social anxiety where I further isolated myself.
                <br/>
                After school I decided to immediately go into the workforce, I was exhausted and needed to get a taste of what the real world was like. After working 3 separate jobs I found myself realizing that working low-paying dead-end jobs were not what I wanted to do for the rest of my life. I decided to pursue my passion that I had slowly been developing over the years in digital media and the arts. My love for video games and movies growing up has nurtured my desire to create something of my own eventually. The decision was clear.
                <br/>
                I started my Freshman year at Penn State Behrend majoring in Digital Media, Arts, and Technology where I currently continue my studies to one day create something of my own for people to look up to and enjoy. I am currently 24 and a senior, looking to graduate in May of 2024.
            </p>
        </div>
    );
}

export default About;
import React from 'react';
import Common from './Common';
import web from './images/hero-img.png'
function About(props) {
    return (
        <div>
            <Common
            name="Wellcome to About page"
            imgsrc={web}
            visit="/contact"
            des="
            We use the most advanced technology to provide you with the best products.
            We have more than 20 years of experience in the field of technology
            Contact us for the best products"
            
            btnname="Contact me"
            />
        </div>
    );
}

export default About;
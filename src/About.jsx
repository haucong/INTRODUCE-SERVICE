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
            btnname="Contact me"
            />
        </div>
    );
}

export default About;
import React from 'react';
import web from '../src/images/img2.svg'
import Common from './Common';

function Home() {
    return (
        <>
            <Common
                name='Grow your business with'
                imgsrc={web}
                visit = "/services"
                btnname="Get Start"
            />
        </>
    );
}

export default Home;
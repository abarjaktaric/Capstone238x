import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';
import '../css/Home.css';
//* rubric79 - Used internal css *//

const Home = () => {
    return (
        <main>
            <div className="page home-page">
                {/* rubric04 - Page Header with Welcoming text in headings */}
                <div className="page-header">
                    <div className="container">
                        <h2>Welcome to our online web shop</h2>
                        <h3>Find all you need!</h3>
                    </div>
                </div>
                {/* rubric01 - Displaying Carousel in Home Page*/}
                <Carousel />
                <div className="">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="center">
                                    <h3>Why Grocery Cloud</h3>
                                    <p>Aliquam hendrerit eros malesuada varius vehicula. Mauris laoreet, purus et facilisis porttitor, libero ipsum sodales lacus, vel auctor ipsum lectus eu sapien. Nullam sed mauris ut orci dignissim gravida. Cras interdum metus et mauris interdum rhoncus. Sed ipsum nisi, feugiat eget sapien vel, ultrices tincidunt libero. Praesent malesuada felis a urna pulvinar, quis maximus lacus rhoncus. Vivamus bibendum gravida sodales. Nam sagittis porta volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean ut lorem arcu. Fusce tempor felis ut risus eleifend blandit. Donec tempor quis nunc ut placerat. Pellentesque non luctus eros, sed interdum massa.</p>
                                    {/* rubric05 - Link Shop All  */}
                                    {/* rubric12 - with route to /shopping -> Shopping Page */}
                                    <Link className="btn btn-primary center" to="/shopping">Shop All</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;
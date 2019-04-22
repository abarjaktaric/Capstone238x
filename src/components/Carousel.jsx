import React, { Component } from 'react';
import CarouselItems from './CarouselItems';

class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slideIndex: 0,
            checked: false
        };

        this.handlePrev = this.handlePrev.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleTimer = this.handleTimer.bind(this);
    }
    //* rubric08 - handleNext function subtract new state for slideIndex unless state is zero than state go back to 4 *//
    handlePrev() {
        if (this.state.slideIndex === 0) {
            this.setState(prevState => ({
                slideIndex: 4
            }));
        } else {
            this.setState((prevState, props) => {
                return { slideIndex: prevState.slideIndex - 1 }
            })
        }
    }
    //* rubric07 - handleNext function add new state for slideIndex unless state is 4 than state go back to zero *//
    handleNext() {
        if (this.state.slideIndex === 4) {
            this.setState(prevState => ({
                slideIndex: 0
            }));
        } else {
            this.setState((prevState, props) => {
                return { slideIndex: prevState.slideIndex + 1 }
            })
        }
    }

    handleTimer = (event, props) => {
        this.setState({ checked: event.target.checked }, () => {
            //* rubric10 - if checkbox is checked setInterval for changing slides every 3000ms *//
            if (this.state.checked) {

                this.interval = setInterval(() => {
                    if (this.state.slideIndex === 4) {
                        this.setState(prevState => ({
                            slideIndex: 0
                        }));
                    } else {
                        this.setState(prevState => ({
                            slideIndex: prevState.slideIndex + 1
                        }));
                    }
                }, 3000);
            //* rubric10 - if not clear Interval *//
            } else {
                clearInterval(this.interval);
                this.setState(prevState => ({
                }));
            }
        })
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <section>
                {/* rubric01 - Carousel wrapper calling CarouselItems component that render sides */}
                <div className="carousel">
                    <div className="carousel-container">
                        {/* rubric11 - translate style for animation on slide wrapper */}
                        <div className="carousel-wrapper" style={{ 'transform': `translateX(-${this.state.slideIndex * (100)}%)` }}>
                            <CarouselItems />
                        </div>
                    </div>
                    <div className="carousel-arrows">
                        {/* rubric02 - Carousel left arrow key button */}
                        {/* rubric07 - Click on arrow calls handlePrev function */}
                        <button className="arrows" id="left" onClick={this.handlePrev}><i className="fas fa-angle-left"></i></button>
                        {/* rubric03 - Carousel right arrow key button*/}
                        {/* rubric07 - Click on arrow calls handleNext function */}
                        <button className="arrows" id="right" onClick={this.handleNext}><i className="fas fa-angle-right"></i></button>
                    </div>
                 
                    <div className="carousel-toggle">
                        <div className="container right">
                           {/* rubric06 - Carousel toggle switch with label */}
                            <label>
                                {/* rubric10 - Checkbox in initial state is false ->  on change calling function handleTimer */}
                                <input type="checkbox" checked={this.state.checked} onChange={this.handleTimer} />
                                Toggle Slide Show
                            </label>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Carousel;
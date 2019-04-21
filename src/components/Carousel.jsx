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
                <div className="carousel">
                    <div className="carousel-container">
                        <div className="carousel-wrapper" style={{ 'transform': `translateX(-${this.state.slideIndex * (100)}%)` }}>
                            <CarouselItems />
                        </div>
                    </div>
                    <div className="carousel-arrows">
                        <button className="arrows" id="left" onClick={this.handlePrev}><i className="fas fa-angle-left"></i></button>
                        <button className="arrows" id="right" onClick={this.handleNext}><i className="fas fa-angle-right"></i></button>
                    </div>
                    <div className="carousel-toggle">
                        <div className="container right">
                            <label>
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
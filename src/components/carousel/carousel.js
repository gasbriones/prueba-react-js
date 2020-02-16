import React, { useState } from 'react';
import PropTypes from "prop-types";
import './style.scss'

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import {CPU, IMG_EXTENSION, RAM} from "../../constants/constants";


const CustomCarousel = (props) => {
    const {items} = props;
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {
                items.map((item) => {
                    return (
                        <CarouselItem
                            onExiting={() => setAnimating(true)}
                            onExited={() => setAnimating(false)}
                            key={item._id}
                            className='carousel__item'
                        >
                            <img src={item.urlImagePath + '/' + item.model + '.'+IMG_EXTENSION} alt={item.altText} />
                            <div className='carousel__item-info'>
                                <h1 className='carousel__item-info__title'>{item.brand + ' ' + item.model}</h1>
                                <table className='carousel__item-info__table'>
                                    <tr>
                                        <td>
                                            <i className="fa fa-microchip" />{` ${CPU}: ${item.cpu}`}
                                        </td>
                                        <td>
                                            <i className="fa fa-microchip" />{` ${RAM}: ${item.ram}`}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>{item.type}</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h2>${item.price}</h2>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                        </CarouselItem>
                    );
                })
            }
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
};

CustomCarousel.defaulProps = {
    items: []
};

CustomCarousel.propTypes = {
    items: PropTypes.array
};

export default CustomCarousel;
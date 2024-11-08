import React from 'react';
import { Carousel, Flex } from 'antd';
import Category from './Category/Category';
import './TopCategories.css';
import Image from '../../assets/chair/Image.png';
import Image1 from '../../assets/chair/Image1.png';
import Image2 from '../../assets/chair/Image2.png';
import Image3 from '../../assets/chair/Image3.png';
import Image4 from '../../assets/chair/Image2.png';
import Image5 from '../../assets/chair/Image1.png';
import Image6 from '../../assets/chair/Image2.png';
import Image7 from '../../assets/chair/Image3.png';

const TopCategories = () => {
    return (
        <Carousel autoplay className='categories-carousel' dots={false}>
            <div className="slide">
                <Flex className='categories' justify='space-between'>
                    <Category image={Image} />
                    <Category image={Image1} />
                    <Category image={Image2} />
                    <Category image={Image3} />
                </Flex>
            </div>
            <div className="slide">
                <Flex className='categories' justify='space-between'>
                    <Category image={Image1} />
                    <Category image={Image5} />
                    <Category image={Image7} />
                    <Category image={Image6} />
                </Flex>
            </div>
        </Carousel>
    );
};

export default TopCategories;
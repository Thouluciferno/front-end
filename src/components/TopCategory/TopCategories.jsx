import React from 'react';
import { Carousel, Flex } from 'antd';
import { Link } from 'react-router-dom';
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
                    <Link to="/products/1"><Category image={Image} /></Link>
                    <Link to="/products/2"><Category image={Image1} /></Link>
                    <Link to="/products/3"><Category image={Image2} /></Link>
                    <Link to="/products/4"><Category image={Image3} /></Link>
                </Flex>
            </div>
            <div className="slide">
                <Flex className='categories' justify='space-between'>
                    <Link to="/products/5"><Category image={Image1} /></Link>
                    <Link to="/products/6"><Category image={Image5} /></Link>
                    <Link to="/products/7"><Category image={Image7} /></Link>
                    <Link to="/products/8"><Category image={Image6} /></Link>
                </Flex>
            </div>
        </Carousel>
    );
};

export default TopCategories;
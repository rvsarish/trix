import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import Message from './Message';
import { useGetTopProductsQuery } from '../slices/productsApiSlice';

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === products.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);
    return () => clearInterval(interval);
  }, [products]);

  return isLoading ? null : error ? (
    <Message variant='danger'>{error?.data?.message || error.error}</Message>
  ) : (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <Carousel
        activeIndex={index}
        onSelect={() => {}}
        pause={false}
        className='bg-primary mb-4'
      >
        {products.map((product) => (
          <Carousel.Item key={product._id}>
            <Link to={`/product/${product._id}`}>
              <Image
                src={product.image}
                alt={product.name}
                fluid
                style={{ width: '400px', height: '300px' }}
              />
              <Carousel.Caption className='carousel-caption'>
                <h2 className='text-white text-right'>
                  {product.name} ₹{product.price}
                </h2>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;

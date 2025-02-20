import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface LogoCarouselProps {
  logos: string[];
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({ logos }) => {
  const CustomPrevArrow = (props: any) => (
    <button
      {...props}
      className="absolute left-2 z-10 p-3 bg-white shadow-lg rounded-full -translate-y-1/2 top-1/2 hover:bg-gray-100 transition"
    >
      <FaChevronLeft size={20} className="text-gray-600" />
    </button>
  );

  const CustomNextArrow = (props: any) => (
    <button
      {...props}
      className="absolute right-2 z-10 p-3 bg-white shadow-lg rounded-full -translate-y-1/2 top-1/2 hover:bg-gray-100 transition"
    >
      <FaChevronRight size={20} className="text-gray-600" />
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1280, // Laptops
        settings: {
          slidesToShow: 4,
          centerMode: true,
          centerPadding: '0px',
        },
      },
      {
        breakpoint: 1024, // Tablets grandes
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: '0px',
        },
      },
      {
        breakpoint: 768, // Tablets menores
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: '0px',
        },
      },
      {
        breakpoint: 480, // Celulares pequenos
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '0px',
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto relative px-4">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center px-2">
            <div className="w-32 h-32 flex items-center justify-center bg-white shadow-md rounded-lg mx-auto">
              <img
                src={logo}
                alt={`Logo ${index}`}
                className="max-w-[80%] max-h-[80%] object-contain"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoCarousel;
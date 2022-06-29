import { ReactNode } from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface MultiSliderProps {
  children: ReactNode;
}

interface ArrowsProps {
  className?: string;
  onClick?: () => void;
}

const settings = {
  className: 'skills',
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        speed: 2000,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
      }
    }
  ]
};

function PrevArrow({ onClick }: ArrowsProps) {

  return (
    <div
      onClick={onClick}
      style={{
        width: 0,
        fontSize: 25,
        display: 'block',
        position: 'absolute',
        color: 'var(--green-100)',
        cursor: 'pointer',
        paddingRight: 20,
        top: '50%',
        left: -10,
      }}
    >
      <IoIosArrowBack />
    </div>
  );
}

function NextArrow({ onClick }: ArrowsProps) {

  return (
    <div
      onClick={onClick}
      style={{
        width: 0,
        fontSize: 25,
        display: 'block',
        color: 'var(--green-100)',
        cursor: 'pointer',
        position: 'absolute',
        top: '50%',
        right: 0,
        marginRight: 15
      }}
    >
      <IoIosArrowForward />
    </div>
  );
}

export function MultiSlider({ children }: MultiSliderProps) {
  return (
    <Slider {...settings}>
      {children}
    </Slider>
  )
}
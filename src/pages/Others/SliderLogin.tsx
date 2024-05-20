
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function MobileCarousel({ children }) {
  const settings = {
    arrows: false,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 500,
        settings: {
          centerMode: true,
          centerPadding: "0px",
          infinite: false,
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="block sm:hidden w-full h-screen overflow-hidden relative">
      <Slider {...settings} className="h-full">
        {children}
      </Slider>
      <style jsx>{`
        .slick-dots {
          position: absolute;
          bottom: 10px;
          width: 100%;
          display: flex !important;
          justify-content: center;
        }
        .slick-dots li {
          margin: 0;
          width: 40px;
          color: #f0173c;
        }
        .slick-dots li button:before {
          color: #0bffff; /* Color of the dots */
        }
      `}</style>
    </div>
  );
}

export default MobileCarousel;

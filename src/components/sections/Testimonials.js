import SwiperCore, {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid]);
const Testimonials = () => {
  const props = {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  };
  return (
    <div className="content testimonials">
      {/* title */}
      <div className="title">Recommendations</div>
      {/* content */}
      <div className="row testimonials-items">
        {/* client item */}
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="revs-carousel default-revs">
            <Swiper {...props} className="owl-carousel">
              <SwiperSlide className="item">
                <div className="revs-item">
                  <div className="text">
                    A young talented and passionate front end developer with great attention to detail.
                  </div>
                  <div className="user">
                    <div className="info">
                      <div className="name">Dmytro Bakhtin</div>
                      <div className="company">Full Stack Developer at Solutions Plus Limited </div>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item">
                <div className="revs-item">
                  <div className="text">
                    Excellent work. A well-managed website that reflects professionalism and user-centric focus
                  </div>
                  <div className="user">
                    <div className="info">
                      <div className="name">Rosaura</div>
                      <div className="company">Founder of My Little Chef at Home </div>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
              </SwiperSlide>
              <div className="swiper-pagination"></div>
            </Swiper>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Testimonials;

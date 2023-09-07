import React from "react";
import SimpleSlider from "./Carousel";
import ReviewCard from "./ReviewCard";
import ReviewCarousel from "./ReviewCarousel";

const Gallery = () => {
  return (
    <div className="md:px-24 px-6 mt-10 " id="gallery">
      <h1 className="text-center font-bold  md:text-5xl text-4xl text-green">
        Gallery
      </h1>
      <p className="text-center mt-3 font-semibold">
        Browse Through Our Gallery of Unforgettable Graduation Moments.
      </p>
      {/* <div className="group flex mx-auto justify-between items-center w-96 mt-3">
        <button className="focus:bg-green bg-slate-400 rounded-md px-3 py-1 text-white/80">
          PHOTOSHOOTS
        </button>
        <button className="focus:bg-green bg-slate-400 rounded-md px-3 py-1 text-white/80">
          SOUVENIRS
        </button>
        <button className="focus:bg-green bg-slate-400 rounded-md px-3 py-1 text-white/80">
          MERCHANDISE
        </button>
      </div> */}
      <SimpleSlider />
      <div className="md:mt-24  mt-10 mb-24">
        <div className="lg:grid lg:grid-cols-2 gap-4">
          <div className="">
            <p className="text-green lg:text-5xl font-bold text-4xl text-center lg:text-left">
              TESTIMONIALS
            </p>
            <h1 className="text-green font-bold text-2xl my-3 text-center lg:text-left">
              Client Reviews{" "}
            </h1>
            <p className="text-justify">
              Hear From Our Graduates: Heartfelt Experiences Shared by Those
              We've Proudly Served. Discover how our meticulous attention to
              detail in gown fittings, the artistry of our photoshoots, and the
              exceptional quality of our merchandise have left an indelible mark
              on our clients.
              <p className="my-3">
                Read these genuine testimonials that reflect the joy, pride, and
                satisfaction of our graduates
              </p>
              <p>
                Join the chorus of voices celebrating their remarkable journey
                through our services, making their graduations truly
                unforgettable.
              </p>
            </p>
          </div>
          <ReviewCarousel />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

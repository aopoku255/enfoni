import React from "react";
import SimpleSlider from "./Carousel";
import ReviewCard from "./ReviewCard";
import ReviewCarousel from "./ReviewCarousel";

const Gallery = () => {
  return (
    <div className="w-full">
      <h1 className="text-center font-bold  text-5xl text-green mt-48">
        Gallery
      </h1>
      <p className="text-center w-128 mx-auto mt-3">
        From personalised gown fittings to professional photography sessions, we
        ensure every detail is perfected.{" "}
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
      <div className="mt-24 px-16 mb-12">
        <div className="grid grid-cols-2">
          <div className="w-128">
            <p className="text-green">TESTIMONIALS</p>
            <h1 className="text-green font-bold text-2xl my-3">
              Client Reviews{" "}
            </h1>
            <p>
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

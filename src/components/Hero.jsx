import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative">
      <div className="absolute inset-0">
        {/* 3D Background Scene */}
        <Spline
          scene="https://prod.spline.design/6kCH3vzJ3G8VgRfM/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="grid lg:grid-cols-2 items-center gap-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-semibold text-pink-700 ring-1 ring-pink-200/60">
                Sweet, Cold & Crafted with Love
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
                Scoop into Happiness with Premium Ice Creams
              </h1>
              <p className="mt-4 text-lg text-gray-700 max-w-prose">
                Discover small-batch, artisanal flavors made from fresh ingredients. Delivered
                to your door, perfectly frozen.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <a href="#flavors" className="inline-flex items-center justify-center rounded-full bg-pink-600 px-6 py-3 text-white font-semibold shadow hover:bg-pink-700">
                  Shop Flavors
                </a>
                <a href="#about" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-pink-600 font-semibold ring-1 ring-pink-200 hover:bg-pink-50">
                  Learn More
                </a>
              </div>
            </div>
            <div className="lg:justify-self-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-200/50 via-white/40 to-rose-200/40 rounded-3xl blur-2xl pointer-events-none" />
                <img
                  src="https://images.unsplash.com/photo-1528712306091-ed0763094c98?q=80&w=1400&auto=format&fit=crop"
                  alt="Ice cream scoops"
                  className="relative rounded-3xl shadow-xl w-full max-w-md mx-auto"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

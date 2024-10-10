import { Parallax } from "react-parallax";

const SectionBanner = ({ bgImg, heading, subHeading }) => {
    return (
        <Parallax
            blur={{ min: -30, max: 30 }}
            bgImage={bgImg}
            bgImageAlt="Menu"
            strength={-100}
        >
            <div className="hero min-h-[400px] lg:min-h-[700px]">
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="bg-[#151515] bg-opacity-60 px-5 py-3 sm:px-32 sm:py-10 lg:px-60 lg:py-20">
                        <h1 className="mb-5 text-3xl md:text-6xl font-bold title-font uppercase text-white">
                            {heading}
                        </h1>
                        <p className="mb-5 title-font uppercase text-white">
                            {subHeading}
                        </p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default SectionBanner;

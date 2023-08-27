import chefService from "../../../assets/home/chef-service.jpg";

const IntroH = () => {
    return (
        <section
            className="my-20 py-12 md:py-24 px-8 md:px-20 flex justify-center items-center"
            style={{
                backgroundImage: `url(${chefService})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundAttachment: "fixed",
            }}
        >
            <div className="bg-white text-center p-6 sm:p-12 md:p-16 lg:p-20">
                <h2 className="uppercase title-font text-4xl lg:text-5xl mb-5">
                    Bistro Boss
                </h2>
                <p className="text-sm sm:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam sunt doloribus inventore perspiciatis vel nam
                    saepe soluta animi cupiditate cum iusto expedita dolor
                    labore debitis, nobis autem. Molestiae, quas ex? Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. A corporis
                    natus distinctio exercitationem nulla porro.
                </p>
            </div>
        </section>
    );
};

export default IntroH;

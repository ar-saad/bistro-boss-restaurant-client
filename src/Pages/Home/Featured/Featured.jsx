import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredItemImg from "../../../assets/home/featured.jpg";

const Featured = () => {
    return (
        <section
            style={{
                backgroundImage: `url(${featuredItemImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundAttachment: "fixed",
            }}
        >
            <div className="bg-[#151515] bg-opacity-70 my-20 p-20 pt-5">
                <SectionTitle
                    subHeading={"Check it out"}
                    heading={"From our menu"}
                    color="white"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 -mt-3 text-white">
                    <div className="flex justify-end">
                        <img src={featuredItemImg} className="w-3/4" alt="" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h3 className="text-lg 2xl:text-xl">March 20, 2023</h3>
                        <h3 className="text-lg 2xl:text-xl">
                            Where can I get some?
                        </h3>
                        <p className="xl:w-3/4 text-sm">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Veritatis neque debitis incidunt velit ut
                            doloribus minus quam quas voluptas accusantium ipsum
                            vel odit vitae, doloremque sit porro quos quasi
                            voluptates!
                        </p>
                        <div className="mt-2">
                            <button className="btn bg-transparent hover:bg-[#1F2937] text-white border-0 border-b-2 border-white hover:border-transparent">
                                Read more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;

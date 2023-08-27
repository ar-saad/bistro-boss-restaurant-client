import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import AddToCartBtn from "../../../components/Buttons/AddToCartBtn";

const ChefRecommend = () => {
    const [recommendedItems, setRecommendedItems] = useState([]);
    useEffect(() => {
        fetch("menu.json")
            .then((res) => res.json())
            .then((data) => {
                const filter = data.filter(
                    (item) => item.attribute === "chefRecommend"
                );
                setRecommendedItems(filter);
            });
    }, []);

    return (
        <section className="w-11/12 sm:w-9/12 mx-auto my-20">
            <SectionTitle
                subHeading={"Should Try"}
                heading={"Chef Recommends"}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {recommendedItems.map((item) => (
                    <div
                        key={item._id}
                        className="bg-[#F3F3F3] flex flex-col justify-between text-center"
                    >
                        <div>
                            <div>
                                <img src={item.image} className="w-full" />
                            </div>
                            <div className="mt-5 px-6">
                                <h3 className="font-semibold text-lg 2xl:text-lg">
                                    {item.name}
                                </h3>
                                <p className="text-sm mt-1">{item.recipe}</p>
                            </div>
                        </div>
                        <div className="my-5">
                            <AddToCartBtn />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ChefRecommend;

import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import GeneralButton from "../../../components/Buttons/GeneralButton";

const PopularMenu = () => {
    const [popularItems, setPopularItems] = useState([]);

    useEffect(() => {
        fetch("menu.json")
            .then((res) => res.json())
            .then((data) => {
                const filterMenu = data.filter(
                    (item) => item.category === "popular"
                );
                setPopularItems(filterMenu);
            });
    }, []);

    console.log(popularItems);

    return (
        <section className="my-20">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"From our menu"}
            />
            <div className="w-11/12 sm:w-9/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
                {popularItems.map((item) => (
                    <MenuItems key={item._id} data={item} />
                ))}
            </div>
            <div className="text-center mt-12">
                <GeneralButton data={"View full menu"} />
            </div>
        </section>
    );
};

export default PopularMenu;

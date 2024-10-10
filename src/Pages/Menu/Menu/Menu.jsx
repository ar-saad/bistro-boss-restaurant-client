import { Helmet } from "react-helmet-async";
import SectionBanner from "./../../Shared/SectionBanner/SectionBanner";
import menuBg from "../../../assets/menu/menu-bg.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuByCategory from "../../Shared/MenuByCategory/MenuByCategory";

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <SectionBanner
                bgImg={menuBg}
                heading={"Our Menu"}
                subHeading={"Would you like to try a dish?"}
            />
            <SectionTitle heading={"Today's Offer"} subHeading={"Don't Miss"} />
            <MenuByCategory category={"offer"} />
        </div>
    );
};

export default Menu;

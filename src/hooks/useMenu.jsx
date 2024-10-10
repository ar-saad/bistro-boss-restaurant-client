import { useState, useEffect } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch("menu.json")
            .then((res) => res.json())
            .then((data) => {
                const filterMenu = data.filter(
                    (item) => item.category === "popular"
                );
                setMenu(filterMenu);
            });
    }, []);

    return [menu];
};

export default useMenu;

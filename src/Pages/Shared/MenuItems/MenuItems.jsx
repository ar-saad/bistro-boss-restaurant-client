const MenuItems = ({ data }) => {
    const { name, image, price, recipe } = data;
    return (
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
            <div className="sm:col-span-3 sm:pr-5">
                <img
                    src={image}
                    className="sm:w-[110px] sm:h-[85px] sm:rounded-full sm:rounded-tl-none"
                    alt=""
                />
            </div>
            <div className="sm:col-span-8">
                <h3 className="text-xl title-font">{name}------------</h3>
                <p className="mt-1 text-sm">{recipe}</p>
            </div>
            <div className="flex sm:justify-end">
                <p className="text-[#BB8506] text-lg">${price}</p>
            </div>
        </div>
    );
};

export default MenuItems;

const SectionTitle = ({ subHeading, heading, color }) => {
    return (
        <div className="flex flex-col justify-center items-center text-center my-12">
            <p className="text-[#D99904] text-sm 2xl:text-lg italic">
                ---{subHeading}---
            </p>
            <h1
                className={`text-3xl 2xl:text-4xl uppercase border-y-[3px] border-[#E8E8E8] mt-3 py-3 px-10 ${
                    color === "white" ? "text-white" : "text-[#151515]"
                }`}
            >
                {heading}
            </h1>
        </div>
    );
};

export default SectionTitle;

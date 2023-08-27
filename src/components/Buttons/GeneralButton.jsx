const GeneralButton = ({ data }) => {
    return (
        <button className="btn bg-transparent hover:bg-[#1F2937] hover:text-white border-0 border-b-2 border-[#1F2937]">
            {data}
        </button>
    );
};

export default GeneralButton;

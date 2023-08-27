const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <div className="footer grid-cols-1 md:grid-cols-2 gap-0 text-neutral-content">
                <div className="bg-[#1F2937] p-10 w-full">
                    <div className="w-full flex justify-center md:justify-end">
                        <div className="text-center">
                            <h3 className="text-2xl 2xl:text-[32px] font-medium mb-3">
                                Contact Us
                            </h3>
                            <p className="font-medium my-1">
                                123 ABS Street, Uni 21, Bangladesh
                            </p>
                            <p className="font-medium my-1">+88 123456789</p>
                            <p className="font-medium my-1">
                                Mon - Fri: 08:00 - 22:00
                            </p>
                            <p className="font-medium my-1">
                                Sat - Sun: 10:00 - 23:00
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#111827] p-10 w-full h-full">
                    <div className="w-full flex justify-center md:justify-start">
                        <div className="text-center">
                            <h3 className="text-2xl 2xl:text-[32px] font-medium mb-3">
                                Follow Us
                            </h3>
                            <p className="font-medium my-1">
                                Join us on social media
                            </p>
                            <p className="font-medium my-1">
                                Facebook Instagram Twitter
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer footer-center p-4 bg-[#151515]">
                <div>
                    <p className="text-white 2xl:text-xl">
                        Copyright &copy; {currentYear} - All right reserved by
                        Abdur Rahman Saad
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

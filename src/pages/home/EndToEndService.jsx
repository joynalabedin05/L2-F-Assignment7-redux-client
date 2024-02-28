import { FaGlobe } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa";
import { FaAtom } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { useSelector } from "react-redux";

const EndToEndService = () => {
    const { darkMode } = useSelector((store) => store.theme);

    return (
        <div>
            <div className="mt-10 text-center">
            <h1 className="text-4xl font-bold ">Unique Management</h1>
                <p className="my-5">Maersk provides a range of integrated supply chain and <br /> logistics products designed to meet the needs of all types of businesses. Contact us today and learn how.</p>
                
            </div>
            <div className={`bg-gray-50 ${darkMode ? "bg-black text-white" : ""}  p-7 rounded mt-10`}>
            <div className="mt-5">
            <h1 className="text-3xl mb-5 ">End-to-end services for your unique business <br /> needs</h1>
                <p className="mb-10">Your business is like no other. Supply Chain Management gives you an intricate ecosystem designed to make your <br /> supply chain work exactly like you want it to. Maersk SCM gives you a setbr  of tools to continuously improve, digitise and <br />optimise your global supply chain while actively managing exceptions.</p>
                
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
            <div className="flex gap-5 border p-3">
                <div className="flex justify-center items-center">
                <FaGlobe size={30} />
                </div>
                <div>
                    <h1 className="text-2xl">Global partner with local solutions</h1>
                    <p className="mt-3">Our global and local know-how helps improve <br /> your supply chain while keeping your overall goals <br /> in mind.</p>
                </div>
            </div>
            <div className="flex gap-5 border p-3">
                <div className="flex justify-center items-center">
                <FaAtom size={30} />
                </div>
                <div>
                    <h1 className="text-2xl">Customisation</h1>
                    <p className="mt-3">Our global and local know-how helps improve <br /> your supply chain while keeping your overall goals <br /> in mind.</p>
                </div>
            </div>
            <div className="flex gap-5 border p-3">
                <div className="flex justify-center items-center">
                <FaBullseye size={30} />
                </div>
                <div>
                    <h1 className="text-2xl">Visibility and actionable insights</h1>
                    <p className="mt-3">Our global and local know-how helps improve <br /> your supply chain while keeping your overall goals <br /> in mind.</p>
                </div>
            </div>
            <div className="flex gap-5 border p-3">
                <div className="flex justify-center items-center">
                <FaHandshake size={30} />
                </div>
                <div>
                    <h1 className="text-2xl">A trusted partner</h1>
                    <p className="mt-3">Our global and local know-how helps improve <br /> your supply chain while keeping your overall goals <br /> in mind.</p>
                </div>
            </div>
        </div>
        </div>
       
        </div>
    );
};

export default EndToEndService;
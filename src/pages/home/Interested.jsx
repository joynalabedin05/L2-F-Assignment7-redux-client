
import { FaMailBulk } from "react-icons/fa";
const Interested = () => {
    return (
        <div className="my-20">
            <h1 className="text-5xl font-semi-bold">Are you interested?</h1>
            <div className="md:flex gap-7 border p-5 mt-7 w-1/2 md:mx-auto md:mr-40 ml-3">
                <div className="flex mt-5">
                <FaMailBulk size={40} />
                </div>
                <div>
                    <h1 className="text-xl font-bold">Email us</h1>
                    <p className="mt-3">Get a demo of our SCM platform and tools, or speak directly with one of <br /> our experts.</p>
                    <button className="bg-blue-500 text-white p-3 mt-4 rounded font-bold">Contact us</button>
                </div>
            </div>
        </div>
    );
};

export default Interested;
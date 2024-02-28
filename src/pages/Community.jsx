import { useSelector } from "react-redux";


const Community = () => {
    const {darkMode} = useSelector((store)=>store.theme);

    return (
        <div className="my-14">
            <div className="flex justify-between items-center">
                <h1 className="text-4xl text-sky-700">Community Gratitute Wall:</h1>
                <div>
                <button className="mt-4 bg-blue-500 text-white p-2 rounded"> Post Comments</button>
                </div>
            </div>
            <div className="mt-10 grid grid-cols-2">
                <div className={`flex gap-5 bg-gray-50  ${darkMode ? "bg-black text-white" : ""}  p-3 rounded-md`}>
                    <img className="w-1/2" src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1709078400&semt=sph" alt="" />
                    <div className="w-1/2">
                        <h1 className="text-center text-2xl font-bold mb-4">name</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur elit. Consequuntur esse odio officiis tempore nihil deleniti nulla pariatur corporis, provident velit?... <button className="bg-blue-500 text-white px-1 rounded">see more</button> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;

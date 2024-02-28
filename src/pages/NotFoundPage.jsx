import { Link } from "react-router-dom";


const NotFoundPage = () => {
    return (
        <div>
            <img className=" mx-auto my-5" src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg" alt="" />
            <div className=" w-32 mx-auto bg-blue-500 text-white px-3 py-2 rounded"><Link className="mx-auto" to="/" >Back To Home</Link></div>
        </div>
    );
};

export default NotFoundPage;
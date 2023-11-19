import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="text-center mt-10">
            <h2 className="text-5xl">404</h2>
            <h2 className="text-2xl">Page Not Found</h2>
            <Link className="underline" to='/'>Go Home</Link>
        </div>
    );
};

export default NotFound;
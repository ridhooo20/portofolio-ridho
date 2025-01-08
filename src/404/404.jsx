import { useRouteError } from "react-router-dom";

const erorPage =()=>{
    const eror = useRouteError();

    return (
        <div className="flex flex-col justify-center min-h-screen bg-white">
            <h1 className="text-xl">404</h1>
            <p>Sorry Page Not Found</p>
            <p>{eror.statusText || eror.message}</p>
        </div>
    );

}

export default erorPage;
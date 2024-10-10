import "./loader.css"

export default function Loader() {
    return(
        <div className="h-screen flex justify-center items-center bg-yellow-200">
            <div className="loader">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}
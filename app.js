import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="http://www.psdtemplatedesign.com/wp-content/uploads/edd/2017/12/logo-design.jpg"
                    alt="Logo"
                />
            </div>
        </div>

        // <div className="nav-item">
        //     <ul>
        //         <li>Home</li>
        //         <li>Contact Us</li>
        //         <li>About Us</li>
        //         <li>Card</li>
        //     </ul>
        // </div>
    );
};
const card= () => {
return 
}

const AppLayout = () => {
    return <Header />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

import React from "react";
export default function Navbar(){
    return(
        <header className="nav-container">
            <div className="nav-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Logo_2013_Google.png/320px-Logo_2013_Google.png" 
                alt="logo"
                className="nav-logo-img"
                />
                <span className="nav-logo-name">AdVit</span>
            </div>
            <nav className="nav-links">
                <a href="#home" className="nav-link active">Home</a>
                <a href="#review" className="nav-link">Reviews</a>
                <a href="#upload" className="nav-link">Upload</a>
                <a href="#History" className="nav-link">Pre Uploads</a>
            </nav>

            <div className="nav-credits">
                <span className="credits-text">I AM GONNA ROCK YOUR WORLD</span>
                <span className="credits-icon">👻</span>
                <spam className="credits-value">10</spam>
            </div>
        </header>
    );
}
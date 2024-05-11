import React from 'react';
import "./Gallery.css";

function Gallery() {
    return (
        <div>
            <div className="navbar">
                <div className="logo">logo</div>
                <div className="pc-menu">
                    <div>Gallery</div>
                    <div>Blog</div>
                </div>
            </div>
            <div className="container">
                <h2>📸 Gallery</h2>
                <div className="gallery-container">
                    <div className="picture-card">
                    <img src="/minion.jpg" alt="Minion" />

                        <h4>1</h4>
                        <p>2024.3.25</p>
                    </div>
                    <div className="picture-card">
                        <img src="/minion.jpg" alt="2" />
                        <h4>2</h4>
                        <p>2024.3.25</p>
                    </div>
                    <div className="picture-card">
                        <img src="/minion.jpg" alt="3" />
                        <h4>3</h4>
                        <p>2024.3.25</p>
                    </div>
                    <div className="picture-card">
                        <img src="/minion.jpg" alt="4" />
                        <h4>4</h4>
                        <p>2024.3.25</p>
                    </div>
                    <div className="picture-card">
                        <img src="/minion.jpg" alt="5" />
                        <h4>5</h4>
                        <p>2024.3.25</p>
                    </div>
                    <div className="picture-card">
                        <img src="/minion.jpg" alt="6" />
                        <h4>6</h4>
                        <p>2024.3.25</p>
                    </div>
                    <div className="picture-card">
                        <img src="/minion.jpg" alt="7" />
                        <h4>7</h4>
                        <p>2024.3.25</p>
                    </div>
                    <div className="picture-card">
                        <img src="/minion.jpg" alt="8" />
                        <h4>8</h4>
                        <p>2024.3.25</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Gallery;
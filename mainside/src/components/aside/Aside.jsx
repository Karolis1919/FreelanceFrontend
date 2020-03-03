import React from 'react';
import './aside.scss';

function Aside(){
    return(
        <div id="sidebar-nav" className="sidebar">
            <div className="sidebar-scroll">
                <nav>
                    <ul className="nav">
                        <li><a href="#" className="active"><i className="lnr lnr-home"></i> <span>Dashboard</span></a></li>
                        <li><a href="#" className=""><i className="lnr lnr-code"></i> <span>Add Category</span></a></li>
                        <li><a href="#" className=""><i className="lnr lnr-code"></i> <span>Freelancer Ads</span></a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Aside;
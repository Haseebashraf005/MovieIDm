import React from 'react'

const Header = ({ onToggle ,title }) => {

    // console.log(title)





    return (
        // <!-- Page Content -->
        <header>

            <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
                <div className="d-flex align-items-center">
                    <i className="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle" onClick={onToggle}></i>
                    <h2 className="fs-2 m-0">{title}</h2>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle second-text fw-bold" href="#" id="navbarDropdown"
                                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fas fa-user me-2"></i>Haseeb Ashraf
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><a className="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>



        // <!-- /#page-content-wrapper -->
    )
}

export default Header
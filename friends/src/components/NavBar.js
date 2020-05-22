import React from 'react';

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-primary">
            <a class="navbar-brand" href="#"><i class="fas fa-user-friends"></i> Friends!</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </nav>
        </div>
    );
};

export default NavBar;

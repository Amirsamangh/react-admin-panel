import React from 'react';

const Avatar = ({name , imagePath}) => {
    return (
            <div className="pt-1 pb-2 mb-4 d-flex flex-column justify-content-center align-items-center avatar_li position-relative">
                <span className="avatar_box">
                    <img
                        className="w-100 rounded-circle mb-3"
                        src={imagePath}
                        alt="user"
                    />
                </span>
                <div className="sidebar_avatar_name text-center hiddenable">
                    {name}
                </div>
            </div>
    );
}

export default Avatar;

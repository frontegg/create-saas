import * as React from 'react';
import './ProfileImage.scss';

type Props = {
    image: string
}
const ProfileImage: React.FC<Props> = ({image}) => {
    return (
            <div className="profile-image">
                <img src={image} alt=""/>
            </div>
    )
}

export default ProfileImage
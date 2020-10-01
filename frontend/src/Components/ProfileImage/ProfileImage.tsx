import React from 'react';
import './ProfileImage.scss';

type ProfileImageProps = {
  image: string;
};

const ProfileImage: React.FC<ProfileImageProps> = (props: ProfileImageProps) => {
  const { image } = props;
  return (
    <div className='profile-image'>
      <img src={image} alt='' />
    </div>
  );
};

export default ProfileImage;

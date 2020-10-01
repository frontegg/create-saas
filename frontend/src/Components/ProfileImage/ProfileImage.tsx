import React from 'react';
import './ProfileImage.scss';

type ProfileImageProps = {
  src: string;
  alt?: string;
};

const ProfileImage: React.FC<ProfileImageProps> = (props: ProfileImageProps) => {
  const { src, alt = '' } = props;
  return (
    <div className='profile-image'>
      <img src={src} alt={alt} />
    </div>
  );
};

export default ProfileImage;

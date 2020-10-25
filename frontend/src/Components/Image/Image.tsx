import React from 'react';

const basename = process.env.PUBLIC_URL;

interface ImageProps extends React.HTMLAttributes<HTMLElement> {
  src: string;
  alt?: string;
}

const Image: React.FC<ImageProps> = (props: ImageProps) => {
  const { src, className, alt = '' } = props;
  return <img src={basename + src} alt={alt} className={className} />;
};

export default Image;

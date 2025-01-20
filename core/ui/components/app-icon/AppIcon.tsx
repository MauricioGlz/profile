import React from 'react';
import Image from 'next/image';

interface AppIconProps {
  imageUrl: string;
  boldText: string;
  normalText: string;
}

const AppIcon: React.FC<AppIconProps> = ({ imageUrl, boldText, normalText }) => {
    const imageStyle = {
        margin: 'auto',
        cursor: 'pointer'
    }
  return (
    <div className="max-w-xs  overflow-hidden">
      <Image
          width={116}
          height={116}
          src={imageUrl}
          sizes="(max-width: 116px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={boldText}
          style = {imageStyle}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{boldText}</div>
        <p className="text-gray-700 text-base">{normalText}</p>
      </div>
    </div>
  );
};

export default AppIcon;

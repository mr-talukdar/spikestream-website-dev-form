import { useState } from 'react';
import { Oval } from 'react-loader-spinner'
const ImageSkeleton = ({ src, alt }) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    return (
        <div className="h-full w-full">
            {isLoading ? (
                <div className="h-full w-full bg-[#202020] flex justify-center items-center rounded-lg">
                    <Oval
                        height={40}
                        width={40}
                        color="#FF8933"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel='oval-loading'
                        secondaryColor="#444"
                        strokeWidth={4}
                        strokeWidthSecondary={4}

                    />
                </div>
            ) : null}
            <img
                src={src}
                alt={alt}
                className={isLoading ? 'hidden' : 'block object-cover h-full w-full  object-cover rounded-md'}
                onLoad={handleImageLoad}
            />
        </div >

    );
};

export default ImageSkeleton;

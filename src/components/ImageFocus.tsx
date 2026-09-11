import { useState, useEffect } from 'react'

interface ImageFocusProps{
    src: string;
    alt: string;
    className?: string;
}

const ImageFocus: React.FC<ImageFocusProps> = ({src, alt, className = ''}) => {
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if(event.key === 'Escape'){
                setIsFocused(false);
            }
        }

        if(isFocused == true){
            window.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }
        else{
            document.body.style.overflow = 'unset';
        }

        return() => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        }
    }, [isFocused]);
    
    return(
        <>
            <img
                src={src}
                alt={alt}
                onClick={() => setIsFocused(true)}
                className={`${className} cursor-pointer hover:opacity-90 transition-opacity`}
                loading="lazy"
             />

             {isFocused && (
                <>
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm transition-opacity">
                        <button onClick={() => setIsFocused(false)}>
                            &times
                        </button>
                        <img
                            src={src}
                            alt={alt}
                            onClick={(e) => e.stopPropagation()}
                            className="max-w-full max-h-[90vh] object-contain shadow-2xl"
                        />
                    </div>
                </>

             )}
        </>

    )
}

export default ImageFocus;
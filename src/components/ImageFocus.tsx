import { useState, useEffect } from 'react'
import { X } from 'lucide-react';

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
                role="button"
                tabIndex={0}
                aria-label={`Ampliar: ${alt}`}
                onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setIsFocused(true) } }}
                onClick={() => setIsFocused(true)}
                className={`${className} cursor-pointer hover:opacity-90 transition-opacity`}
                loading="lazy"
             />

             {isFocused && (
                <>
                    <div onClick={() => setIsFocused(false)}
                        role="dialog" aria-modal="true" aria-label={alt}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-gray-400/50 backdrop-blur-sm transition-opacity"
                    >
                        <button onClick={(e) => { e.stopPropagation(); 
                                                setIsFocused(false)
                                }}
                                className="absolute top-4 right-4 text-white text-4xl cursor-pointer hover:text-gray-300 transition-colors"
                                aria-label="Fechar imagem ampliada"
                        >
                            <X size={32} />
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
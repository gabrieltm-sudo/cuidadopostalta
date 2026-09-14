import { useEffect, useState } from 'react'

const FontButtons = () => {
    const minScale = 1;
    const maxScale = 1.4;

    const getInitialScale = () => {
        const stored = localStorage.getItem('fontScale');
        if(!stored){
            return minScale;
        }

        const parsed = parseFloat(stored);
        if(isNaN(parsed) || parsed<minScale || parsed>maxScale){
            return minScale;
        }

        return parsed;
    }
    
    const [scale, setScale] = useState<number>(getInitialScale);
    
    useEffect(() => {
        document.documentElement.style.fontSize = `${scale*100}%`;
        localStorage.setItem('fontScale', scale.toString());
    }, [scale]);

    const increaseFont = () => {
        setScale(prev => Math.min(prev + 0.1, maxScale));
    }

    const decreaseFont = () => {
        setScale(prev => Math.max(prev - 0.1, minScale));
    }

    const resetFont = () => {
        setScale(1);
    }

    return (
        <div className="fixed bottom-6 right-6 z-50 flex border-2 border-[#003366] divide-x-2 bg-white rounded-sm overflow-hidden">
            <button onClick={decreaseFont} className="min-h-11 min-w-11 px-4 py-2 font-bold text-[#003366] cursor-pointer hover:bg-gray-100 active:bg-gray-200" aria-label="Diminuir tamanho da fonte" title="Diminuir tamanho da fonte">
                A<sup>-</sup>
            </button>
            <button onClick={resetFont} className="min-h-11 min-w-11 px-4 py-2 font-bold text-[#003366] cursor-pointer hover:bg-gray-100 active:bg-gray-200" aria-label="Redefinir tamanho da fonte" title="Redefinir tamanho da fonte">
                A
            </button>
            <button onClick={increaseFont} className="min-h-11 min-w-11 px-4 py-2 font-bold text-[#003366] cursor-pointer hover:bg-gray-100 active:bg-gray-200" aria-label="Aumentar tamanho da fonte" title="Aumentar tamanho da fonte">
                A<sup>+</sup>
            </button>
        </div>
    )
}

export default FontButtons;
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Step {
  id: number;
  image: string;
  text: string;
}

interface StepCarouselProps {
  steps: Step[];
}

{/* Uso das setas do teclado para navegar entre as imagems do carrosel */}
const StepCarousel = ({ steps }: StepCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if(event.key === 'ArrowLeft'){
        prevSlide();
      }

      if(event.key === 'ArrowRight'){
        nextSlide();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [currentIndex, steps.length]);

  if (!steps || steps.length === 0) return null;

  const nextSlide = () => {
    if (currentIndex < steps.length - 1) setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative flex flex-col border-2 border-gray-200 bg-gray-50">
      
      {/* Área Superior: Imagem, Indicadores e Setas */}
      <div className="relative flex h-80 w-full items-center justify-center md:h-96">
        
        {/* Indicadores Superiores (Quadrados Flat) */}
        <div className="absolute top-4 flex gap-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Ir para o passo ${index + 1}`}
              aria-current={currentIndex === index ? 'step' : undefined}
              className={`h-3 transition-all cursor-pointer ${
                currentIndex === index ? 'w-5 bg-[#003366]' : 'w-3 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Imagem */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="flex h-full transition-transform duration-700 ease-out" 
            style={{width: `${steps.length*100}%`, transform: `translateX(-${currentIndex*(100/steps.length)}%)`,}}
          >
            {steps.map((step) => (
              <div key={step.id}
                className="flex h-full w-full flex-none items-center justify-center p-12"
                style={{width: `${100/steps.length}%`}}
              >
                {step.image ? (
                  <img src={step.image} alt={`Ilustração do passo ${step.id}`} className="h-full w-full object-contain"/>
                ) : (
                  <div className="text-center font-bold text-gray-400">
                    [Imagem: {step.id}]
                  </div>
                )}
              </div>
              ))}
          </div>
        </div>

        {/* Imagem anterior - Comentado */}
        {/*{steps[currentIndex].image ? (
          <img
            src={steps[currentIndex].image}
            alt={`Ilustração do passo ${steps[currentIndex].id}`}
            className="h-full w-full object-contain"
          />
        ) : (
          <div className="font-bold text-gray-400 text-center">
            [Imagem: Passo {steps[currentIndex].id}]
          </div>
        )}*/}

        {/* Botão Anterior (Seta Esquerda) */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="absolute left-0 top-1/2 flex min-h-16 min-w-11 -translate-y-1/2 items-center justify-center bg-black/5 text-[#003366] transition-colors hover:bg-black/10 active:bg-black/20 disabled:opacity-30 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003366]"
          aria-label="Passo anterior"
        >
          <ChevronLeft size={36} />
        </button>

        {/* Botão Próximo (Seta Direita) */}
        <button
          onClick={nextSlide}
          disabled={currentIndex === steps.length - 1}
          className="absolute right-0 top-1/2 flex min-h-16 min-w-11 -translate-y-1/2 items-center justify-center bg-black/5 text-[#003366] transition-colors hover:bg-black/10 active:bg-black/20 disabled:opacity-30 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003366]"
          aria-label="Próximo passo"
        >
          <ChevronRight size={36} />
        </button>
      </div>

      {/* Área Inferior: Faixa de Legenda */}
      <div className="flex min-h-11 w-full items-center justify-center bg-gray-600 p-4 text-center text-white">
        <p className="text-base font-bold md:text-lg">
          {steps[currentIndex].id}. {steps[currentIndex].text}
        </p>
      </div>

    </div>
  );
};

export default StepCarousel;
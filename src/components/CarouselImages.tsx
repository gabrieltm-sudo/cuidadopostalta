import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Step {
  id: number;
  image: string;
  text: string;
}

interface StepCarouselProps {
  steps: Step[];
}

const CarouselImages = ({ steps }: StepCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!steps || steps.length === 0) return null;

  const nextSlide = () => {
    if (currentIndex < steps.length - 1) setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  return (
    <div className="flex flex-col border-2 border-[#003366] bg-white">
      <div className="relative flex h-80 w-full items-center justify-center border-b-2 border-[#003366] bg-gray-50 p-4">
        {steps[currentIndex].image ? (
          <img
            src={steps[currentIndex].image}
            alt={`Ilustração do passo ${steps[currentIndex].id}`}
            className="h-full w-full object-contain"
          />
        ) : (
          <div className="font-bold text-gray-400">
            [Espaço para Imagem: Passo {steps[currentIndex].id}]
          </div>
        )}
      </div>

      <div className="flex flex-col items-center justify-between gap-4 p-4 sm:flex-row">
        
        <div className="flex w-full items-center justify-between gap-4 sm:w-auto">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="flex min-h-11 min-w-11 cursor-pointer items-center justify-center border-2 border-[#003366] text-[#003366] hover:bg-gray-100 active:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Passo anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <span className="font-bold text-[#003366] whitespace-nowrap">
            {currentIndex + 1} / {steps.length}
          </span>

          <button
            onClick={nextSlide}
            disabled={currentIndex === steps.length - 1}
            className="flex min-h-11 min-w-11 cursor-pointer items-center justify-center border-2 border-[#003366] text-[#003366] hover:bg-gray-100 active:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Próximo passo"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="w-full text-center font-bold text-[#003366] sm:text-left sm:text-lg">
          {steps[currentIndex].id}. {steps[currentIndex].text}
        </div>
      </div>
    </div>
  );
};

export default CarouselImages;
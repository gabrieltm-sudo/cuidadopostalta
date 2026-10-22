import { X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface ReferenceModalProps {
  isOpen: boolean;
  onClose: () => void;
  references: string[];
}

// Transforma URLs do texto em links clicáveis
const renderReference = (text: string) =>
  text.split(/(https?:\/\/\S+)/g).map((part, i) =>
    /^https?:\/\//.test(part) ? (
      <a
        key={i}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        className="break-all font-medium text-[#003366] underline underline-offset-2 hover:text-blue-700"
      >
        {part}
      </a>
    ) : (
      <span key={i}>{part}</span>
    )
  );

const ReferenceModal = ({ isOpen, onClose, references }: ReferenceModalProps) => {
  const [visible, setVisible] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Trava o scroll do fundo, fecha com Esc e dispara a animação de entrada
  useEffect(() => {
    if (!isOpen) {
      setVisible(false);
      return;
    }

    document.body.style.overflow = 'hidden';
    const frame = requestAnimationFrame(() => {
      setVisible(true);
      closeButtonRef.current?.focus();
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    // Fundo escurecido (clicar fora fecha o modal)
    <div
      onClick={onClose}
      className={`fixed inset-0 z-100 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm transition-opacity duration-200 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Caixa do Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="reference-modal-title"
        onClick={(e) => e.stopPropagation()}
        className={`flex max-h-[85vh] w-full max-w-2xl flex-col border-4 border-[#003366] bg-white transition-all duration-200 ${
          visible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-2 scale-95 opacity-0'
        }`}
      >
        {/* Cabeçalho */}
        <div className="flex items-center justify-between gap-4 border-b-2 border-[#003366] px-6 py-4 md:px-8">
          <h2 id="reference-modal-title" className="text-xl font-bold text-[#003366] sm:text-2xl">
            Referências Bibliográficas
          </h2>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="flex min-h-11 min-w-11 shrink-0 cursor-pointer items-center justify-center bg-gray-100 text-[#003366] transition-colors hover:bg-gray-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003366]"
            aria-label="Fechar referências"
          >
            <X size={24} />
          </button>
        </div>

        {/* Lista de Referências (rola dentro do modal) */}
        <div className="flex-1 overflow-y-auto px-6 py-5 md:px-8">
          <ol className="flex flex-col gap-4 text-left text-base leading-7 text-gray-700">
            {references.map((ref, index) => (
              <li
                key={index}
                className="flex gap-4 border-l-4 border-[#003366] bg-gray-50 p-4"
              >
                <span className="font-bold text-[#003366]" aria-hidden="true">
                  {index + 1}.
                </span>
                <p className="min-w-0 flex-1">{renderReference(ref)}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Rodapé */}
        <div className="flex justify-end border-t-2 border-gray-200 px-6 py-4 md:px-8">
          <button
            onClick={onClose}
            className="min-h-11 cursor-pointer border-2 border-[#003366] bg-[#003366] px-6 py-2 font-bold text-white transition-colors hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003366]"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReferenceModal;
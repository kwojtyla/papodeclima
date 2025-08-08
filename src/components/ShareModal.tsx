import React, { useState } from "react";
import { Facebook, Link2, Check } from "lucide-react";
import { cn } from "../lib/utils";
import X from "../../public/icons/X";
import WhatsApp from "../../public/icons/WhatsApp";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  score: number;
  correctAnswers: number;
  totalQuestions: number;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  correctAnswers,
  totalQuestions,
}) => {
  const [isCopied, setIsCopied] = useState(false);
  if (!isOpen) return null;

  const shareText = `Acabei de fazer o quiz Papo de Clima e acertei ${correctAnswers} de ${totalQuestions} questões! Faça você também e ajude a combater a desinformação sobre mudanças climáticas nos manguezais! 🌿`;
  const url = window.location.href;

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + " " + url)}`,
  };

  const handleShare = (platform: keyof typeof shareLinks) => {
    window.open(shareLinks[platform], "_blank", "width=600,height=400");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-[url('/background-modal.webp')] p-6 rounded-xl shadow-lg max-w-sm w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-bold text-primary mb-4 text-center">
          Compartilhe seus resultados
        </h3>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => handleShare("facebook")}
            className={cn(
              "p-3 rounded-full transition-colors duration-200",
              "bg-[#1877F2] hover:bg-[#0d6ae4] text-white"
            )}
          >
            <Facebook className="w-6 h-6" />
          </button>
          <button
            onClick={() => handleShare("twitter")}
            className={cn(
              "p-3 rounded-full transition-colors duration-200",
              "bg-black hover:bg-gray-800 text-white"
            )}
          >
            <X size={24} />
          </button>
          <button
            onClick={() => handleShare("whatsapp")}
            className={cn(
              "p-3 rounded-full transition-colors duration-200",
              "bg-[#25D366] hover:bg-[#1da850] text-white"
            )}
          >
            <WhatsApp />
          </button>
          <button
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(shareText + " " + url);
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 3000);
              } catch (err) {
                console.error("Failed to copy text: ", err);
              }
            }}
            className={cn(
              "p-3 rounded-full transition-colors duration-200",
              "bg-gray-600 hover:bg-gray-700 text-white"
            )}
          >
            {isCopied ? (
              <Check className="w-6 h-6" />
            ) : (
              <Link2 className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

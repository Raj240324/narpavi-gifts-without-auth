
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const WhatsAppFloat = () => {
  const { toast } = useToast();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in placing an order for your gifts from Narpavi Gifts.");
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
    toast({
      title: "Opening WhatsApp",
      description: "Redirecting to WhatsApp for quick orders...",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        size="lg"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl animate-pulse hover:animate-none transition-all duration-300 hover:scale-110"
        title="Quick Order via WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default WhatsAppFloat;

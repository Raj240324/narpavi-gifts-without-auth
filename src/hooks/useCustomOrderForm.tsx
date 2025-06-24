import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export interface CustomOrderFormData {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  orderType: string;
  description: string;
  budgetRange: string;
  timeline: string;
}

export const useCustomOrderForm = () => {
  const [formData, setFormData] = useState<CustomOrderFormData>({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    orderType: '',
    description: '',
    budgetRange: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: keyof CustomOrderFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const submitOrder = async () => {
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Order Submitted!",
        description: "Thank you for your custom order request. We'll contact you within 24 hours.",
      });

      // Reset form
      setFormData({
        customerName: '',
        customerEmail: '',
        customerPhone: '',
        orderType: '',
        description: '',
        budgetRange: '',
        timeline: ''
      });

      setIsSubmitting(false);
    }, 1000);

    return true;
  };

  return {
    formData,
    isSubmitting,
    handleInputChange,
    submitOrder
  };
};

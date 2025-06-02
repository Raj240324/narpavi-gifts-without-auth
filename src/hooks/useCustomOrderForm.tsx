
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

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

    try {
      const { error } = await supabase
        .from('custom_orders')
        .insert({
          customer_name: formData.customerName,
          customer_email: formData.customerEmail,
          customer_phone: formData.customerPhone || null,
          order_type: formData.orderType,
          description: formData.description,
          budget_range: formData.budgetRange || null,
          timeline: formData.timeline || null
        });

      if (error) throw error;

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

      return true;
    } catch (error) {
      console.error('Error submitting custom order:', error);
      toast({
        title: "Error",
        description: "Failed to submit order. Please try again.",
        variant: "destructive"
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    handleInputChange,
    submitOrder
  };
};

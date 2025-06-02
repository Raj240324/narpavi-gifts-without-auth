import React, { useState } from 'react';
import { Search, Plus, Minus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqData = [
    {
      category: 'Orders & Shipping',
      questions: [
        {
          id: 1,
          question: 'How long does shipping take?',
          answer: 'Standard shipping within India typically takes 5-7 business days. Delivery times may vary depending on your location.'
        },
        {
          id: 2,
          question: 'Do you ship internationally?',
          answer: 'Currently, we only offer shipping within India.'
        },
        {
          id: 3,
          question: 'How are items packaged?',
          answer: 'All items are carefully wrapped in protective materials and placed in sturdy boxes to ensure safe delivery within India. Resin pieces receive extra padding, and artwork is protected with acid-free materials.'
        }
      ]
    },
    {
      category: 'Custom Orders',
      questions: [
        {
          id: 4,
          question: 'How long do custom orders take?',
          answer: 'Most custom orders take 2-3 weeks to complete. Complex pieces or multiple items may take longer. Rush orders are available for an additional 50% fee and can be completed in 1 week.'
        },
        {
          id: 5,
          question: 'What information do I need for a custom portrait?',
          answer: 'For the best results, provide high-resolution photos with good lighting. Multiple angles are helpful for pets and people. Please include any specific preferences for pose, background, or style in your order notes.'
        },
        {
          id: 6,
          question: 'Can I make changes to my custom order?',
          answer: 'Minor changes can be made within 24 hours of placing your order. Once work has begun, changes may not be possible or may incur additional fees. We provide progress photos for approval during the creation process.'
        },
        {
          id: 7,
          question: 'What if I\'m not satisfied with my custom piece?',
          answer: 'Customer satisfaction is our priority. If you\'re not completely happy with your custom piece, we\'ll work with you to make it right. This may include revisions or, in rare cases, a full refund.'
        }
      ]
    },
    {
      category: 'Product Care',
      questions: [
        {
          id: 8,
          question: 'How do I care for my resin art?',
          answer: 'Clean with a soft, damp cloth and mild soap if needed. Avoid harsh chemicals and abrasive materials. Keep away from direct sunlight and extreme temperatures to prevent discoloration or warping.'
        },
        {
          id: 9,
          question: 'Are pencil drawings durable?',
          answer: 'Our pencil drawings are created with professional-grade materials and finished with protective fixatives. When properly framed with UV-protective glass and kept away from direct sunlight, they can last for generations.'
        },
        {
          id: 10,
          question: 'Can resin pieces get wet?',
          answer: 'Our resin pieces are water-resistant but not completely waterproof. They can handle light moisture but should not be submerged or exposed to prolonged wetness. Functional items like coasters have additional protective coatings.'
        }
      ]
    },
    {
      category: 'Returns & Exchanges',
      questions: [
        {
          id: 11,
          question: 'What is your return policy?',
          answer: 'Ready-made items can be returned within 30 days in original condition for a full refund. Custom pieces are non-returnable unless there\'s a defect or error on our part. Return shipping costs for eligible returns within India are the customer\'s responsibility.'
        },
        {
          id: 12,
          question: 'What if my item arrives damaged?',
          answer: 'If your item arrives damaged during shipping within India, please contact us within 48 hours with photos. We\'ll arrange for a replacement or full refund, including return shipping costs. All shipments are insured for your protection.'
        },
        {
          id: 13,
          question: 'Can I exchange for a different size?',
          answer: 'Ready-made items can be exchanged for different sizes within 30 days, subject to availability. Custom pieces cannot be exchanged as they\'re made specifically for you.'
        }
      ]
    },
    {
      category: 'Pricing & Payment',
      questions: [
        {
          id: 14,
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and Apple Pay. For large custom orders, payment plans may be available upon request.'
        },
        {
          id: 15,
          question: 'Do you offer discounts?',
          answer: 'We offer seasonal sales, first-time customer discounts, and special rates for multiple items. Follow our social media or subscribe to our newsletter for exclusive discount codes and promotions.'
        },
        {
          id: 16,
          question: 'How much do custom portraits cost?',
          answer: 'Custom portrait pricing starts from ₹5000 for small pencil drawings and varies based on size, complexity, and medium. Detailed quotes are provided after reviewing your specific requirements and reference materials.'
        }
      ]
    }
  ];

  const allQuestions = faqData.flatMap(category => 
    category.questions.map(q => ({ ...q, category: category.category }))
  );

  const filteredQuestions = searchTerm 
    ? allQuestions.filter(q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : allQuestions;

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-dancing text-5xl md:text-6xl text-gray-800 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our art, custom orders, shipping, and more
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 py-3 text-lg"
            />
          </div>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          {searchTerm ? (
            // Search Results
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Search Results ({filteredQuestions.length})
              </h2>
              {filteredQuestions.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No results found for "{searchTerm}"</p>
                  <Button 
                    variant="outline"
                    onClick={() => setSearchTerm('')}
                    className="mt-4 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white"
                  >
                    Clear Search
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredQuestions.map((item) => (
                    <Card key={item.id} className="overflow-hidden">
                      <CardContent className="p-0">
                        <button
                          onClick={() => toggleItem(item.id)}
                          className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
                        >
                          <div>
                            <span className="text-xs text-pink-400 uppercase tracking-wide font-medium block mb-1">
                              {item.category}
                            </span>
                            <h3 className="font-semibold text-gray-800">{item.question}</h3>
                          </div>
                          {openItem === item.id ? (
                            <Minus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          ) : (
                            <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          )}
                        </button>
                        {openItem === item.id && (
                          <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                            {item.answer}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          ) : (
            // Categories
            <div className="space-y-8">
              {faqData.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    {category.category}
                  </h2>
                  <div className="space-y-4">
                    {category.questions.map((item) => (
                      <Card key={item.id} className="overflow-hidden">
                        <CardContent className="p-0">
                          <button
                            onClick={() => toggleItem(item.id)}
                            className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
                          >
                            <h3 className="font-semibold text-gray-800">{item.question}</h3>
                            {openItem === item.id ? (
                              <Minus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                            ) : (
                              <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                            )}
                          </button>
                          {openItem === item.id && (
                            <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                              {item.answer}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-12">
          <h2 className="font-dancing text-4xl text-gray-800 mb-4">Still Have Questions?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our team is here to help with any questions 
            about our art, custom orders, or anything else you need to know.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-pink-400 hover:bg-pink-500 text-white px-8"
            >
              Contact Us
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white px-8"
            >
              Start Custom Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

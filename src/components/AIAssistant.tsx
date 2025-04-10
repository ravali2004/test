import React, { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';

interface Message {
  type: 'user' | 'assistant';
  content: string;
}

function AIAssistant({ onComplete }: { onComplete: (data: any) => void }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'assistant',
      content: 'Hi! I can help you report a lost or found item. Would you like to report a lost item or a found item?'
    }
  ]);
  const [userInput, setUserInput] = useState('');
  const [currentStep, setCurrentStep] = useState(0);

  const questions = [
    'Would you like to report a lost item or a found item?',
    'What type of item is it? (e.g., Electronics, Books, ID Cards, etc.)',
    'Where was the item lost/found? I can help you select from common campus locations.',
    'When was the item lost/found? (Please provide the date)',
    'Can you describe the item in detail?',
    'Would you like to upload an image of the item?'
  ];

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    const newMessages = [...messages, { type: 'user', content: userInput }];
    setMessages(newMessages);
    setUserInput('');

    // Simulate AI response
    setTimeout(() => {
      let response = '';
      if (currentStep < questions.length - 1) {
        response = questions[currentStep + 1];
        setCurrentStep(currentStep + 1);
      } else {
        response = "Thank you for providing all the information. I'll help you submit this report.";
        // Here you would typically process all the collected information
        onComplete({
          // Process collected data
        });
      }
      setMessages([...newMessages, { type: 'assistant', content: response }]);
    }, 1000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <MessageSquare className="h-6 w-6 text-blue-600 mr-2" />
        <h3 className="text-lg font-semibold">AI Assistant</h3>
      </div>
      
      <div className="h-96 overflow-y-auto mb-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.type === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex gap-2">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Type your response..."
          className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default AIAssistant;
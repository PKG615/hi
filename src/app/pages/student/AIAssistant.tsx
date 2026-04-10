import { useState } from 'react';
import { Send, Bot, User, Sparkles, BookOpen, Code, Lightbulb, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';

const suggestions = [
  { icon: BookOpen, text: 'Explain React hooks to me', category: 'Learning' },
  { icon: Code, text: 'Help me debug my code', category: 'Coding' },
  { icon: Lightbulb, text: 'What should I learn next?', category: 'Guidance' },
  { icon: TrendingUp, text: 'Analyze my weak areas', category: 'Analytics' },
];

const initialMessages = [
  {
    id: 1,
    type: 'ai',
    content: "Hello! I'm your AI Learning Assistant. I'm here to help you with:\n\n• Answering questions about your courses\n• Debugging code and solving problems\n• Recommending next learning steps\n• Analyzing your progress\n• Preparing for interviews\n\nHow can I assist you today?",
    timestamp: new Date(Date.now() - 300000),
  },
];

export function AIAssistant() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: 'ai',
        content: generateAIResponse(input),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (question: string) => {
    const q = question.toLowerCase();
    if (q.includes('react') || q.includes('hooks')) {
      return "React Hooks are functions that let you use state and other React features in functional components. The most common hooks are:\n\n• useState - for managing component state\n• useEffect - for side effects\n• useContext - for consuming context\n\nWould you like me to explain any specific hook in detail?";
    } else if (q.includes('next') || q.includes('learn')) {
      return "Based on your current progress in the Full Stack Web Development roadmap, I recommend focusing on:\n\n1. Advanced React patterns (custom hooks, context)\n2. State management with Redux\n3. API integration and data fetching\n\nYou're doing great! Keep up the momentum. 🚀";
    } else if (q.includes('weak') || q.includes('analyze')) {
      return "I've analyzed your learning patterns. Here's what I found:\n\n**Strengths:**\n• Frontend development (React, CSS)\n• Problem-solving speed\n\n**Areas to improve:**\n• Backend concepts (APIs, databases)\n• Testing and debugging\n\nI recommend spending more time on backend modules and practicing with hands-on projects.";
    }
    return "I understand your question. Based on your learning path and current progress, I can help you with that. Could you provide more details so I can give you a more specific answer?";
  };

  const handleSuggestionClick = (text: string) => {
    setInput(text);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
            <Bot className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">AI Learning Assistant</h1>
            <p className="text-gray-600">Your personal AI mentor, available 24/7</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Chat Area */}
        <Card className="lg:col-span-3 flex flex-col h-[calc(100vh-280px)]">
          <CardHeader className="border-b">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-600" />
                Chat
              </CardTitle>
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                Online
              </Badge>
            </div>
          </CardHeader>
          
          {/* Messages */}
          <CardContent className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.type === 'ai' 
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600' 
                    : 'bg-gray-200'
                }`}>
                  {message.type === 'ai' ? (
                    <Bot className="w-5 h-5 text-white" />
                  ) : (
                    <User className="w-5 h-5 text-gray-600" />
                  )}
                </div>
                <div className={`flex-1 max-w-2xl ${message.type === 'user' ? 'flex justify-end' : ''}`}>
                  <div className={`rounded-2xl px-4 py-3 ${
                    message.type === 'ai' 
                      ? 'bg-gray-100 text-gray-900' 
                      : 'bg-blue-600 text-white'
                  }`}>
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    <p className={`text-xs mt-2 ${
                      message.type === 'ai' ? 'text-gray-500' : 'text-blue-100'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="bg-gray-100 rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>

          {/* Input */}
          <div className="border-t p-4">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about your learning journey..."
                className="flex-1"
              />
              <Button onClick={handleSend} className="gap-2">
                <Send className="w-4 h-4" />
                Send
              </Button>
            </div>
          </div>
        </Card>

        {/* Suggestions Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Quick Suggestions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion.text)}
                  className="w-full text-left p-3 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all group"
                >
                  <div className="flex items-start gap-2">
                    <suggestion.icon className="w-4 h-4 text-gray-400 group-hover:text-blue-600 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900 group-hover:text-blue-700">
                        {suggestion.text}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{suggestion.category}</p>
                    </div>
                  </div>
                </button>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">AI Capabilities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                  <span>Answer course questions</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                  <span>Debug code snippets</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                  <span>Recommend learning paths</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                  <span>Analyze your progress</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                  <span>Interview preparation</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                  <span>Resume building tips</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

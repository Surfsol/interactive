import { useState } from 'react';

interface Question {
  id: number;
  text: string;
  options: string[];
}

interface DynamicQuestionProps {
  questions: Question[];
  onComplete: (responses: { [key: number]: string }) => void;
}

export default function DynamicQuestion({ questions, onComplete }: DynamicQuestionProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<{ [key: number]: string }>({});
  console.log({responses})

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (answer: string) => {
    const updatedResponses = { ...responses, [currentQuestion.id]: answer };
    setResponses(updatedResponses);

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onComplete(updatedResponses);
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">{currentQuestion.text}</h2>
      <div className="flex flex-col space-y-2">
        {currentQuestion.options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

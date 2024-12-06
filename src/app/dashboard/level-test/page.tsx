"use client"
import { useState } from 'react';
import DynamicQuestion from '@/app/ui/level-test/dynamic-questions'; 

export default function LanguageAssessmentPage() {
  const [isComplete, setIsComplete] = useState(false);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  console.log({answers})

  const questions = [
    { id: 1, text: 'How many years have you studied English?', options: ['Less than 1 year', '1-3 years', '3+ years'] },
    { id: 2, text: 'How often do you use English?', options: ['Rarely', 'Sometimes', 'Frequently'] },
    { id: 3, text: 'Can you introduce yourself?', options: ['Yes', 'No', 'Maybe'] },
  ];

  const onComplete = (responses: { [key: number]: string }) => {
    setAnswers(responses);
    setIsComplete(true);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      {!isComplete ? (
        <DynamicQuestion questions={questions} onComplete={onComplete} />
      ) : (
        <div className="p-4 bg-green-100 rounded-lg">
          <h2 className="text-lg font-semibold">Assessment Complete!</h2>
          <pre className="mt-4 text-sm">{JSON.stringify(answers, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

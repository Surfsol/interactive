'use client';

import { useState, useEffect } from 'react';

interface Answers {
    [key:string]: string[]
  }
  interface Sentences {
    [key:string]: string
  }
  
  interface FillInBlankProps {
    title: string;
    sentences: Sentences;
    answers: Answers;
  }

interface FillProps {
  blank: FillInBlankProps; // Video source URL
  className?: string; // Optional CSS classes for styling
}

const FillInBlank: React.FC<FillProps> = ({ blank }) => {
  return (
    <div>
      <div>{blank.title}</div>
      {Object.entries(blank.sentences).map(([num, line]) => {
        line = line.replace('***', '_____')
        return <div key={`sentence${num}`}>{num}. {line}</div>;
      })}
    </div>
  );
};
export default FillInBlank;

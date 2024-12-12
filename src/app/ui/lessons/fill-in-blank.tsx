'use client';

import { Fragment, useState, useEffect } from 'react';

interface Answers {
  [key: string]: string[];
}
interface Sentences {
  [key: string]: string;
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
  const [blankUpdate, setBlankUpdate] = useState<object>(blank);
  console.log({ blankUpdate });

  const handleAnswers = (idx: string, e: string) => {
    setBlankUpdate({
      ...blankUpdate, anwswers : [idx][1] === e
    });
  };


  return (
    <div>
      <div>{blank.title}</div>
      {Object.entries(blank.sentences).map(([num, line]) => {
        let arr = line.split('*');
        return (
          <div key={num}>
            {arr.map((e, idx) => {
              if (e === '%') {
                return (
                  <Fragment key={`${num}${idx}`}>
                    <input 
                      onChange={(e) =>
                        handleAnswers(idx.toString(), e.target.value)
                      }
                    />
                  </Fragment>
                );
              } else {
                return <Fragment key={`${num}${idx}`}>{e}</Fragment>;
              }
            })}
          </div>
        );
      })}
    </div>
  );
};
export default FillInBlank;

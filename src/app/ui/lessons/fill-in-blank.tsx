'use client';

import { Fragment, useState } from 'react';
import { FillInBlankProps } from '@/app/utils/interfaces';
import Image from 'next/image';

interface FillProps {
  blank: FillInBlankProps; // Video source URL
  className?: string; // Optional CSS classes for styling
}

const FillInBlank: React.FC<FillProps> = ({ blank }) => {
  const [blankUpdate, setBlankUpdate] = useState<FillInBlankProps>(blank);
  console.log({ blankUpdate });

  const handleAnswers = (idx: string, value: string) => {
    console.log('Updating Answer:', { idx, value });
    setBlankUpdate((prevState) => ({
      ...prevState,
      answers: {
        ...prevState.answers,
        [idx]: [prevState.answers[idx][0], value], // Update the second element (null -> value)
      },
    }));
  };

  return (
    <div>
      <div style={{textAlign: 'center'}}>
        {blank.title}
        {blank.picture && (
          <Image
            src={blank.picture} // Path relative to the public folder
            alt='Fruits and Vegetables'
            width={290}
            height={100}
            style={{ display: 'block', margin: '0 auto' }}
          />
        )}
      </div>
      {Object.entries(blank.sentences).map(([num, line]) => {
        const arr = line.split('*');

        return (
          <div key={num}>
            {arr.map((e, idx) => {
              if (e.includes('$')) {
                const arrE = e.split('$');
                return (
                  <Fragment key={`${arrE[1]}${idx}`}>
                    <input
                      onChange={(e) => handleAnswers(arrE[1], e.target.value)}
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

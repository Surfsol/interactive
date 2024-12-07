'use client';

import VideoPlayer from './videoplayer';
import styles from './videoplayer.module.css';
interface Section {
  type: string;
  url: string;
}

interface CourseMaterialProps {
  lessonNumber: string
  setLessonStatus: React.Dispatch<React.SetStateAction<string | undefined>>;
}


const CourseMaterial: React.FC <CourseMaterialProps> = ({setLessonStatus, lessonNumber}) => {
  
  //const nextLesson = 'nextLesson';
  const lessonSection: Section[] = [
    { type: 'video', url: 'https://www.youtube.com/embed/SABmXbFFek0' },
  { type: 'video', url: 'https://www.youtube.com/embed/bPbnfWeu9Ok' },
  ];

  const handleLesson = () => {
    setLessonStatus(undefined)
  }
  return (
    <main className={styles.mainContainer}>
      <div onClick={handleLesson}>
        Next Lesson {lessonNumber}
      </div>
      <div onClick={handleLesson}>
        Back
      </div>
      {lessonSection.map(({ type, url }, idx) => {
        if (type === 'video') {
          return (
            <div className={styles.videoContainer} key={idx}>
              {
                <VideoPlayer
                  className={styles.videoplayer}
                  controls
                  src={url}
                />
              }
            </div>
          );
        }
      })}
    </main>
  );
}
export default CourseMaterial
'use client';

import VideoPlayer from './videoplayer';
import styles from './videoplayer.module.css';
import { dialogScript } from '@/app/utils/dialogScript';
import Dialog from './dialog';
interface Section {
  type: string;
  url?: string;
  content?: {[key:number] : string}
}

interface CourseMaterialProps {
  lessonNumber: string
  setLessonStatus: React.Dispatch<React.SetStateAction<string | undefined>>;
}


const CourseMaterial: React.FC <CourseMaterialProps> = ({setLessonStatus, lessonNumber}) => {
  
  //const nextLesson = 'nextLesson';
  const lessonSection: Section[] = [
    { type: 'video', url: 'https://www.youtube.com/embed/SABmXbFFek0' },
    {type:'dialog', content: dialogScript},
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
      {lessonSection.map(({ type, url, content }, idx) => {
        if (type === 'video') {
          return (
            <div className={styles.videoContainer} key={idx}>
              {
                <VideoPlayer
                  className={styles.videoplayer}
                  src={url}
                />
              }
            </div>
          );
        }
        if (type === 'dialog' && content) {
          return (
            <div className={styles.videoContainer} key={idx}>
              {
                <Dialog
                  className={styles.dialog}
                  content={content}
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
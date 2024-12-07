'use client';
import { useState } from 'react';
import VideoPlayer from './videoplayer';
import styles from './videoplayer.module.css';
interface Section {
  type: string;
  url: string;
}

export default function CourseMaterial() {
  const [lessonStatus, setLessonStatus] = useState<string | undefined>();
  const nextLesson = '';
  const lessonHistory = '';
  const lessonSection: Section[] = [
    { type: 'video', url: 'https://www.youtube.com/embed/SABmXbFFek0' },
  { type: 'video', url: 'https://www.youtube.com/embed/bPbnfWeu9Ok' },
  ];
  // dynamically render lessons using components
  // sections of lessons will include PlayVideo, dialog, fillInBlank
  console.log({ lessonSection });
  return (
    <main className={styles.mainContainer}>
      <div onClick={() => setLessonStatus(nextLesson)}>
        Next Lesson ${nextLesson}
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

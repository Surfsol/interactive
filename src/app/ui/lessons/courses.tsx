'use client';
import { useState } from 'react';
import CourseMaterial from './course-material';

export default function Courses() {
    const [lessonStatus, setLessonStatus] = useState<string | undefined>()
  const nextLesson = 'nextLesson';
  const lessonHistory = ''
  return (
    <main>
      <div onClick={()=> setLessonStatus(nextLesson)}>Next Lesson ${nextLesson}</div>
      <div>${lessonStatus}</div>
      <div>${lessonHistory}</div>
      {lessonStatus && (<CourseMaterial setLessonStatus={setLessonStatus} lessonNumber={lessonStatus}/>)}
    </main>
  );
}
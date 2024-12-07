'use client';
import { useState } from 'react';

export default function CourseMaterial() {
    const [lessonStatus, setLessonStatus] = useState<string | undefined>()
  const nextLesson = '';
  const lessonHistory = ''
  return (
    <main>
      <div onClick={()=> setLessonStatus(nextLesson)}>Next Lesson ${nextLesson}</div>
      <div>${lessonStatus}</div>
      <div>${lessonHistory}</div>
    </main>
  );
}
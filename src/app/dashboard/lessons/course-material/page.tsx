'use client';
import { useState } from 'react';

export default function CourseMaterial() {
    const [lessonStatus, setLessonStatus] = useState()
  const nextLesson = '';
  const lessonHistory = ''
  return (
    <main>
      <div>Next Lesson ${nextLesson}</div>
      <div>${lessonStatus}</div>
      <div>${lessonHistory}</div>
    </main>
  );
}
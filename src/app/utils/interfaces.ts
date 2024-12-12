export interface Answers {
    [key:string]: (string | null)[]
  }
 export interface Sentences {
    [key:string]: string
  }
  
 export interface FillInBlankProps {
    title: string;
    sentences: Sentences;
    answers: Answers;
  }
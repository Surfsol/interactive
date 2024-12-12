'use client';
import { useState, useEffect } from 'react';
interface DialogProps {
  content: { [key: number]: string }; // Video source URL
  className?: string; // Optional CSS classes for styling
}

const Dialog: React.FC<DialogProps> = ({ content }) => {
  const [idPressed, setIdPressed] = useState<string | null>(null);
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    // Load available voices
    const fetchVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      setAvailableVoices(voices);
    };

    fetchVoices();
    // Ensure voices are loaded (necessary for some browsers)
    if (
      typeof window !== 'undefined' &&
      speechSynthesis.onvoiceschanged !== undefined
    ) {
      speechSynthesis.onvoiceschanged = fetchVoices;
    }
  }, []);

  const playLine = async (id: string, person: string, toSay: string) => {
    await setIdPressed(id);
    // speaker will set selected voice
    const utterance = new SpeechSynthesisUtterance(toSay);
    // Match a voice if available based on the `person` identifier
    const selectedVoice = availableVoices.find((voice) =>
      voice.name.toLowerCase().includes(person.toLowerCase())
    );
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }
    // Set utterance options
    utterance.pitch = 1; // Adjust pitch
    utterance.rate = 1; // Adjust rate
    utterance.volume = 1; // Set volume
    utterance.lang = 'en-US'; // Set language (e.g., Brazilian Portuguese)

    utterance.onend = () => setIdPressed(null); // Reset button state when done
    utterance.onerror = (error) => {
      setIdPressed(null);
      console.error('Speech error:', error);
    };

    window.speechSynthesis.speak(utterance);
  };

  const speak = async (id: string, person: string, toSay: string) => {
    setIdPressed(null);
    if (person === 'all') {
      for (const [idD, line] of Object.entries(content)) {
        const [linePerson, lineText] = line.split(':');
        await playLine(idD, linePerson, lineText);
      }
    } else {
      await playLine(id, person, toSay);
    }
  };
  return (
    <div>
      <button
        title={'Play Dialog'}
        onClick={() => speak('all', 'all', '')}
        disabled={idPressed !== null}
      >
        Play All
      </button>
      {Object.entries(content).map(([id, line]) => {
        const array = line.split(':');
        const speaker = array[0].replace('**','')
        const lineText = array[1].replace('**','')
        return (
          <div key={id} onClick={() => speak(id, speaker, lineText)}>
            <div
              style={{
                padding: '10px',
                margin: '5px 0',
                backgroundColor: id === idPressed ? '#d3d3d3' : '#f9f9f9',
                cursor: 'pointer',
                borderRadius: '5px',
              }}
            >
              <strong>{speaker}: </strong>
              {lineText}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Dialog;

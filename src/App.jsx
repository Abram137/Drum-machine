import { useState, useEffect } from 'react'
import './App.css'

const audioClips = [
  {
    keyTrigger: "Q",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    description: "Heater 1",
  },
  {
    keyTrigger: "W",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    description: "Heater 2",
  },
  {
    keyTrigger: "E",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    description: "Heater 3",
  },
  {
    keyTrigger: "A",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4.mp3",
    description: "Heater 4",
  },
  {
    keyTrigger: "S",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-5.mp3",
    description: "Clap",
  },
  {
    keyTrigger: "D",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    description: "Open HH",
  },
  {
    keyTrigger: "Z",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-7.mp3",
    description: "Kick n Hat",
  },
  {
    keyTrigger: "X",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-8.mp3",
    description: "Kick",
  },
  {
    keyTrigger: "C",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-9.mp3",
    description: "Close HH",
  }
]

function App() {
  const [displayText, setDisplayText] = useState('Drum Machine')

  const playClip = (clip) => {
    const audio = new Audio(clip.url)
    audio.play().catch(err => console.error('Audio play failed:', err))
    setDisplayText(clip.description)
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toUpperCase()
      const clip = audioClips.find(c => c.keyTrigger === key)
      if (clip) {
        playClip(clip)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="container" id="drum-machine">
      <h1>Drum Machine</h1>
      <div id="display">{displayText}</div>
      <div className="whole-drum">
        {audioClips.map((clip) => (
          <button
            key={clip.keyTrigger}
            className="drum-pad"
            id={clip.keyTrigger}
            onClick={() => playClip(clip)}
          >
            {clip.keyTrigger}
            <br />
            <small>{clip.description}</small>
          </button>
        ))}
      </div>
    </div>
  )
}

export default App

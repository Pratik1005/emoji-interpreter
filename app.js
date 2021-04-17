import React, { useState } from "react";
import "./styles.css";

var emojiData = {
  "❤️": "Red Heart",
  "✨": "Sparkles",
  "🥺": "Pleading Face",
  "🔥": "Fire",
  "😂": "Face with Tears of Joy",
  "😊": "Smiling Face with Smiling Eyes",
  "✔️": "Check Mark",
  "👍": "Thumbs Up",
  "🥰": "Smiling Face with Hearts"
};

var emojisWeKnow = Object.keys(emojiData);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiMeaningHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiData[userInput];
    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiData[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={emojiMeaningHandler} />
      <div className="Emojimeaning">{meaning}</div>

      <h3>Emojis we know</h3>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

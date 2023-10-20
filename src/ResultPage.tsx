import React, { useEffect, useState } from "react";
import bgm from "./assets/bgm.mp3";

interface Review {
  value: string;
}

const ResultPage: React.FC<{ worry: string }> = ({ worry }) => {
  const [data, setData] = useState(null);

  const fetchAffirmations = async () => {
    const newPrompt = `
  "${worry}"--This is my worry. 
  I require three affirmations that are effective, easy to understand, and can provide instant relief from this worry. These affirmations should be crafted using NLP techniques to ensure their effectiveness.
  Additionally, I require a short NLP-based visualization script, written in a style similar to hypnosis scripts (using past tense), to aid in instant relief from this worry. The script should be under 500 words, and designed for an immediate visualization experience upon reading.it should not tell to clode the eyes and do..tell to do the vislausation without clsoing their eyes as they read along.
  Please provide these affirmations and the visualization script in the following structured JSON format, as I will be utilizing them programmatically:
  {
    "affirmations": [
      "affirmation 1 text",
      "affirmation 2 text",
      "affirmation 3 text"
    ],
    "vScript": "Visualization script text here"
  }
`;

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: newPrompt }],
            temperature: 0.7,
          }),
        }
      );

      const result = await response.json();
      const resultContent = result.choices[0].message.content;
      const parsedData = JSON.parse(resultContent);
      setData(parsedData);
      playAudio(); // Play audio when data is successfully loaded
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const playAudio = () => {
    const audio = new Audio(bgm);
    audio.play().catch((error) => console.error("Audio play failed:", error));
  };

  useEffect(() => {
    console.log("useEffect triggered", worry);
    fetchAffirmations();
  }, []);

  return (
    <div className="content-area flex flex-col justify-center items-stretch gap-4 p-4 pb-6">
      <h2 className="text-3xl font-bold sm:text-4xl self-center">
        Affirmations
      </h2>
      <ul className="list-disc list-inside max-w-md mx-auto mt-4 text-gray-500">
        {data
          ? data.affirmations.map((affirmation, index) => (
              <li key={index}>{affirmation}</li>
            ))
          : "Loading..."}
      </ul>
      <h2 className="text-3xl font-bold sm:text-4xl self-center mt-4">
        Visualization
      </h2>
      <div className="visualization-script p-4  max-w-md mx-auto mt-4 text-gray-500">
        {data ? data.vScript : "Loading..."}
      </div>
    </div>
  );
};

export default React.memo(ResultPage);

import { GoogleGenerativeAI } from "@google/generative-ai";

const ai = new GoogleGenerativeAI({
  apiKey: "AIzaSyD7lRlvTxUkga7E4Fi8dLxoZky9W7S6x5w"  // 🔥 Your API key
});

async function main() {
  const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" }); // 🛠️ get model first

  const result = await model.generateContent([
    { text: "Explain how AI works in a few words" }  // 🧠 your prompt here
  ]);

  const response = await result.response;
  const text = response.candidates[0].content.parts[0].text; // ✨ get the text safely
  
  console.log(text);
}

export default main;

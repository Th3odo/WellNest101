import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyCADAQS1AxWz14dLN-z-2CT3plJ3smds10');

// You can pass a prompt to this function
export async function askGemini(prompt) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
  } catch (err) {
    console.error('Gemini error:', err);
    return 'Sorry, something went wrong.';
  }
}
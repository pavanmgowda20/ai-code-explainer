import Groq from "groq-sdk";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    console.error("GROQ_API_KEY is missing from environment variables");
    return res.status(500).json({ 
      error: "Server configuration error: Missing API Key",
      details: "Please check your Vercel project settings for GROQ_API_KEY"
    });
  }

  try {
    const groq = new Groq({ apiKey });
    const { code } = req.body;

    if (!code) {
      return res.status(400).json({ error: "No code provided" });
    }

    const prompt = `Explain this code in simple terms for a beginner:\n${code}`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [{ role: "user", content: prompt }],
    });

    res.status(200).json({
      explanation: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("Groq API Error:", error);
    res.status(500).json({ 
      error: "Failed to generate explanation",
      details: error.message 
    });
  }
}

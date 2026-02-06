export default async function handler(req, res) {
  console.log("Function execution started");
  
  if (req.method !== "POST") {
    console.log("Method not allowed:", req.method);
    return res.status(405).json({ error: "Only POST allowed" });
  }

  try {
    const apiKey = process.env.GROQ_API_KEY;
    console.log("Checking API Key exists:", !!apiKey);

    if (!apiKey) {
      console.error("GROQ_API_KEY is missing");
      return res.status(500).json({ 
        error: "Server configuration error: Missing API Key",
        details: "Please check your Vercel project settings for GROQ_API_KEY"
      });
    }

    console.log("Request body:", JSON.stringify(req.body));
    const { code } = req.body || {};

    if (!code) {
      console.log("No code provided in body");
      return res.status(400).json({ error: "No code provided" });
    }

    console.log("Importing Groq SDK dynamically...");
    const { default: Groq } = await import("groq-sdk");
    console.log("Groq SDK imported successfully");

    const groq = new Groq({ apiKey });
    
    const prompt = `Explain this code in simple terms for a beginner:\n${code}`;
    console.log("Sending request to Groq API...");

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [{ role: "user", content: prompt }],
    });

    console.log("Groq API response received");
    
    if (!completion.choices?.[0]?.message?.content) {
      console.error("Unexpected Groq response structure:", JSON.stringify(completion));
      throw new Error("Invalid response from AI provider");
    }

    res.status(200).json({
      explanation: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("Critical Handler Error:", error);
    console.error("Stack:", error.stack);
    
    // Ensure we send JSON even for critical failures
    res.status(500).json({ 
      error: "Internal Server Error",
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}

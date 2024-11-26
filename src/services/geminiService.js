import { GoogleGenerativeAI } from '@google/generative-ai';

// Create a new instance of the GoogleGenerativeAi class
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Function to generate a description for an image using the Gemini model
export default async function generateDescriptionWithGemini (imageBuffer) {
    // Prompt to generate a description for the image
    const prompt = "Generate a description for this image";

    try {
        // Generate a description for the image
        const image = {
            inlineData: {
                data: imageBuffer.toString('base64'),
                mimeType: "image/png",
            },
        };
        const res = await model.generateContent([prompt, image ]);
        return res.response.text() || "No description found";
    } catch (error) {
        console.error("Error generating description with Gemini", error);
        throw new Error("Error generating description with Gemini");
    }
}
import { GoogleGenAI } from "@google/genai";

// Initialize Gemini API
// Note: In a real production app, this should be proxied through a backend.
// For this demo, we assume the environment variable is available or we handle the error gracefully if not.
const apiKey = import.meta.env.VITE_API_KEY || ''; 

let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const generateZenResponse = async (userQuery: string): Promise<string> => {
  if (!ai) {
    return "目前無法連線至 AI 助理，請稍後再試，或直接致電精舍詢問。";
  }

  const systemInstruction = `
    你現在是「普覺精舍」的虛擬AI知客法師。請用親切、祥和、有禮貌的語氣（繁體中文）回答使用者的問題。
    
    以下是精舍的課程資訊：
    1. 禪修班 (成人)：
       - 開課日期：2025年12月16日 (週二)
       - 日間班：09:30-11:30
       - 夜間班：19:30-21:30
       - 費用：學費全免
       - 內容：禪修靜坐指導、20堂主題講座
    
    2. 其他課程：
       - 菩提長青班 (70歲以上)：12/22起 每週一 09:30-11:30
       - 菩提青少年班 (13-18歲)：12/20起 每週六 14:00-16:00
       - 菩提親子班 (4-12歲)：12/20起 每週六 09:30-11:30
       - 歐式花藝班：持續開課中
    
    3. 授課法師：上見下桅法師 (清華大學材料科學工程博士)
    
    4. 地點與聯絡：
       - 地址：台北市南港區南港路三段270號3樓
       - 電話：02-2785-1243
       - 交通：捷運松山站、台鐵松山站附近
    
    如果使用者詢問關於「禪」的意義，請引用一句簡短的禪宗智慧或鼓勵的話，幫助他們安定身心。
    請勿回答與禪修、佛法或精舍資訊無關的問題。
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });
    
    return response.text || "抱歉，我暫時無法回答您的問題。";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "系統忙碌中，請稍後再試。";
  }
};
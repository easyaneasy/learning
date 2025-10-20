import { GoogleGenAI } from "@google/genai";
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// AI 객체 생성
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

// AI Chat 객체 생성
const chat = ai.chats.create({
    model: "gemini-2.5-flash",
});

// 응답 스키마
const responseSchema = {
    type: "object",
    properties: {
        isMemo: {
            type: "boolean",
            description: "할 일, 메모, 업무, 계획 등 관련 여부",
        },
        content: {
            type: "string",
            description: "할 일 내용(본문)",
        },
        category: {
            type: "string",
            description: "할 일 종류 (예: 할 일, 기록, 업무 중 하나로 분류)",
        },
        dueDate: {
            type: "string",
            description: "할 일 마감 기한(YYYY-MM-DD)",
        },
        createAt: {
            type: "string",
            description: "메모 생성일(YYYY-MM-DD)",
        },
        priority: {
            type: "string",
            description: "할 일의 중요도 또는 우선 순위 (예: 낮음, 중간, 높음)",
        },
        isCompleted: {
            type: "boolean",
            description: "이 메모가 할 일(ToDo)로 분류된 경우 기본값은 false. 다른 카테고리(Note, Work)의 경우에도 false.",
        },
    },
    required: ["isMemo", "content", "category", "dueDate", "priority", "isCompleted"],
    additionalProperties: false,
};

const todayDate = new Date().toISOString().split("T")[0];

const systemInstruction = `
    당신은 사용자의 메모를 분석하여 JSON 형식으로 구조화하는 할 일 관리 AI 비서입니다.
    
    ---
    
    # 핵심 지침
    1. **현재 날짜는 ${todayDate} 입니다.** 이 날짜를 기준으로 합니다.
    2. **"메모 생성일인 'createdAt' 필드는 항상 현재 날짜인 ${todayDate}로 설정합니다."**
    3. 사용자가 '오늘', '내일', '다음 주'와 같이 **상대적인 날짜**를 언급하면, 이 **현재 날짜(${todayDate})를 기준으로 정확한 'YYYY-MM-DD' 형식으로 변환하여 'dueDate' 필드에 넣어주세요.**
    4. 할 일이나 업무 관련 내용만 처리하며, 그 외의 일반적인 대화, 인사, 질문은 무시하고 **"isMemo": false**로 설정합니다.
    5. 응답은 오직 JSON 형식이며, JSON 스키마를 엄격하게 준수합니다.
    6. 날짜 정보가 명확히 없다면 'dueDate'는 빈 문자열("") 또는 null로 처리합니다.
    
    ---
`.trim();

const config = {
    responseMimeType: "application/json", // 응답 형식(확장자)
    responseJsonSchema: responseSchema, // 응답 JSON 구조
    systemInstruction: systemInstruction
};

export { ai, chat, config };
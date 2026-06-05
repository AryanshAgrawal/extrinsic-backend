const Anthropic = require('@anthropic-ai/sdk');
const client = new Anthropic({ apiKey: process.env.CLAUDE_API_KEY });

async function generateMissions(goal, moodScore) {
    const response = await client.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 600,
        messages: [{
            role: 'user',
            content: `You are a teen study coach. 
Goal: "${goal.title}" – deadline: ${goal.deadline}
Student mood today: ${moodScore}/10

Generate exactly 3 specific daily tasks for today.
Reply ONLY with JSON, no extra text:
{"tasks":[{"title":"...","description":"...","xp":50}]}`
        }]
    });

    return JSON.parse(response.content[0].text);
}

module.exports = { generateMissions };
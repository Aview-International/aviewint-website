import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_ENV_KEY,
});

export default async function handler(req, res) {
  const { messageInput, threadId, assistantId, contentOption } = req.body;

  if (req.method === 'POST') {
    try {
      const appendMessage = await openai.beta.threads.messages.create(
        threadId,
        {
          role: 'user',
          content: messageInput,
        }
      );

      // console.log("threadMessage", appendMessage)

      const run = await openai.beta.threads.runs.create(threadId, {
        assistant_id: assistantId,
        instructions: `You are a personal assistant who provides ${contentOption} for user descriptions. Provide more appropriate answers with easily understandable words. Provide more than 5 options for the user in a numeric order`,
      });

      res.status(200).json({ run: run });
    } catch (error) {
      console.log('error', error);
      res.status(error.statusCode || 500).json(error.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

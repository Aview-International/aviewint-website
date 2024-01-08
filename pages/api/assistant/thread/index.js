import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_ENV_KEY,
});

let assistant = null;
let thread = null;

export default async function handler(req, res) {
  const { messageInput, name, isNewThread } = req.body;

  if (req.method === 'POST') {
    try {
      if (!assistant) {
        assistant = await openai.beta.assistants.create({
          name: 'Social Media Content Creator',
          instructions: `Please address the user as ${name}. The user has a premium account.`,
          model: 'gpt-3.5-turbo-1106',
        });
      }

      if (thread == null || isNewThread) {
        thread = await openai.beta.threads.create();
      }

      res.status(200).json({ thread: thread, assistant: assistant });
    } catch (error) {
      console.log('error', error.message);
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

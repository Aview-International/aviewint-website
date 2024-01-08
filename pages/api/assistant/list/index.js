import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_ENV_KEY,
});

export default async function handler(req, res) {
  const { threadId } = req.body;

  if (req.method === 'POST') {
    try {
      let dataArray = [];
      const messages = await openai.beta.threads.messages.list(threadId);

      messages.data.forEach((message, index) => {
        // console.log(`Message ${index + 1}:`, message.content[0].text);
        dataArray.push(message.content[0].text)
      });
      
      res.status(200).json({ data: dataArray });
    } catch (error) {
      console.log('error', error.message);
      res.status(error.statusCode || 500).json(error.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

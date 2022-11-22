import axios from 'axios';

// create  a new trello board
export default async function handler(req, res) {
  const { create } = req.query;
  if (create === 'board') {
    const { boardName } = req.body;
    const response = await axios({
      method: 'POST',
      url: `https://api.trello.com/1/boards/?name=${boardName}&idOrganization=${process.env.NEXT_PUBLIC_TRELLO_ORGANISATION_ID}&key=${process.env.NEXT_PUBLIC_TRELLO_API_KEY}&token=${process.env.NEXT_PUBLIC_TRELLO_TOKEN}`,
    });
    res.status(201).json(response.data);
  } else if (create === 'list') {
    const { idBoard } = req.body;
    const response = await axios({
      method: 'POST',
      url: `https://api.trello.com/1/lists?name=Backlogged%20Content&idBoard=${idBoard}&key=${process.env.NEXT_PUBLIC_TRELLO_API_KEY}&token=${process.env.NEXT_PUBLIC_TRELLO_TOKEN}`,
    });
    res.status(201).json(response.data);
  } else if (create === 'card') {
    const { desc } = req.body;
    const { idList } = req.body;
    const { cardName } = req.body;
    const response = await axios({
      method: 'POST',
      url: `https://api.trello.com/1/cards?idList=${idList}&name=${cardName}&desc=${desc}&key=${process.env.NEXT_PUBLIC_TRELLO_API_KEY}&token=${process.env.NEXT_PUBLIC_TRELLO_TOKEN}`,
    });
    res.status(201).json(response.data);
  }
}

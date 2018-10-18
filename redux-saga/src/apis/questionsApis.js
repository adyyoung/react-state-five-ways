export const getQuestions = () => new Promise((resolve) => {
  resolve([
    {
      'id': '123',
      'question': "What's the craic?"
    },
    {
      'id': '124',
      'question': "Ye well?"
    },
    {
      'id': '125',
      'question': "What's the weather like?"
    },
    {
      'id': '126',
      'question': "Some day for it, isn't it?"
    }
  ]);
});

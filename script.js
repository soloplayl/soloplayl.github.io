const apiUrl = 'https://api.openai.com/v1/engines/davinci/completions';

const input = document.getElementById('input');
const submit = document.getElementById('submit');
const response = document.getElementById('response');
const apiKey = process.env.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;
submit.addEventListener('click', async () => {
  const question = input.value;
  if (question) {
    const data = {
      prompt: question,
      max_tokens: 100,
      temperature: 0.5,
      engine: "davinci"
    };
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey,
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    response.innerText = json.choices[0].text;
  }
});

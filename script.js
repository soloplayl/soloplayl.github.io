const apiUrl = 'https://api.openai.com/v1/engines/davinci/completions';

const input = document.getElementById('input');
const submit = document.getElementById('submit');
const response = document.getElementById('response');
const apiKey = 'YOUR_API_KEY_HERE';

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

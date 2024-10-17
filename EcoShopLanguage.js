const languageEndpoint = 'https://ecoshoplanguage.cognitiveservices.azure.com/';
const languageKey = '6deba14d0c9c4414a0288dc752282a34';

async function analyzeFeedback(feedback) {
    const response = await fetch(`${languageEndpoint}/analyze?api-version=2021-10-01`, {
        method: 'POST',
        headers: {
            'Ocp-Apim-Subscription-Key': languageKey,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ documents: [{ id: '1', language: 'pt', text: feedback }] })
    });
    const data = await response.json();
    console.log(data);
}

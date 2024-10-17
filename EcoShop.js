const endpoint = 'https://ecoshop.cognitiveservices.azure.com/';
const subscriptionKey = '75ea5399fa434ea8ae6aafbfc76e8774';

async function analyzeImage(imageUrl) {
    const response = await fetch(`${endpoint}/analyze?visualFeatures=Categories,Description`, {
        method: 'POST',
        headers: {
            'Ocp-Apim-Subscription-Key': subscriptionKey,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: imageUrl })
    });
    const data = await response.json();
    console.log(data);
}

async function handleUpload() {
    const fileInput = document.getElementById('imageUpload');
    const file = fileInput.files[0];
    const reader = new FileReader();
    
    reader.onloadend = async () => {
        const base64Image = reader.result; // ou converta para URL
        await analyzeImage(base64Image); // Chama a função de análise
    };
    
    if (file) {
        reader.readAsDataURL(file);
    }
}

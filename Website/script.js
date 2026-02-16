// List of the dog breeds
const dogClasses = [
    "Chihuahua", "Japanese Spaniel", "Maltese", "Pekinese", "Shih-Tzu", "Blenheim Spaniel", "Papillon", "Toy Terrier", "Rhodesian Ridgeback", "Afghan Hound",
    "Basset", "Beagle", "Bloodhound", "Bluetick", "Black-and-tan Coonhound", "Walker Hound", "English Foxhound", "Redbone", "Borzoi", "Irish Wolfhound",
    "Italian Greyhound", "Whippet", "Ibizan Hound", "Norwegian Elkhound", "Otterhound", "Saluki", "Scottish Deerhound", "Weimaraner", "Staffordshire Bullterrier", "American Staffordshire Terrier",
    "Bedlington Terrier", "Border Terrier", "Kerry Blue Terrier", "Irish Terrier", "Norfolk Terrier", "Norwich Terrier", "Yorkshire Terrier", "Wire-haired Fox Terrier", "Lakeland Terrier", "Sealyham Terrier",
    "Airedale", "Cairn", "Australian Terrier", "Dandie Dinmont", "Boston Bull", "Miniature Schnauzer", "Giant Schnauzer", "Standard Schnauzer", "Scotch Terrier", "Tibetan Terrier",
    "Silky Terrier", "Soft-coated Wheaten Terrier", "West Highland White Terrier", "Lhasa", "Flat-coated Retriever", "Curly-coated Retriever", "Golden Retriever", "Labrador Retriever", "Chesapeake Bay Retriever", "German Short-haired Pointer",
    "Vizsla", "English Setter", "Irish Setter", "Gordon Setter", "Brittany Spaniel", "Clumber", "English Springer", "Welsh Springer Spaniel", "Cocker Spaniel", "Sussex Spaniel",
    "Irish Water Spaniel", "Kuvasz", "Schipperke", "Groenendael", "Malinois", "Briard", "Kelpie", "Komondor", "Old English Sheepdog", "Shetland Sheepdog",
    "Collie", "Border Collie", "Bouvier des Flandres", "Rottweiler", "German Shepherd", "Doberman", "Miniature Pinscher", "Greater Swiss Mountain Dog", "Bernese Mountain Dog", "Appenzeller",
    "Entlebucher", "Boxer", "Bull Mastiff", "Tibetan Mastiff", "French Bulldog", "Great Dane", "Saint Bernard", "Eskimo Dog", "Malamute", "Siberian Husky",
    "Affenpinscher", "Basenji", "Pug", "Leonberg", "Newfoundland", "Great Pyrenees", "Samoyed", "Pomeranian", "Chow", "Keeshond",
    "Brabancon Griffon", "Pembroke Corgi", "Cardigan Corgi", "Toy Poodle", "Miniature Poodle", "Standard Poodle", "Mexican Hairless", "Dingo", "Dhole", "African Hunting Dog"
];

// List of breed image filenames 
const breedImages = [
    "Chihuahua.jpg", "Japanese_Spaniel.jpg", "Maltese.jpg", "Pekinese.jpg", "Shih-Tzu.jpg", "Blenheim_Spaniel.jpg", "Papillon.jpg", "Toy_Terrier.jpg", "Rhodesian_Ridgeback.jpg", "Afghan_Hound.jpg",
    "Basset.jpg", "Beagle.jpg", "Bloodhound.jpg", "Bluetick.jpg", "Black-and-tan_Coonhound.jpg", "Walker_Hound.jpg", "English_Foxhound.jpg", "Redbone.jpg", "Borzoi.jpg", "Irish_Wolfhound.jpg",
    "Italian_Greyhound.jpg", "Whippet.jpg", "Ibizan_Hound.jpg", "Norwegian_Elkhound.jpg", "Otterhound.jpg", "Saluki.jpg", "Scottish_Deerhound.jpg", "Weimaraner.jpg", "Staffordshire_Bullterrier.jpg", "American_Staffordshire_Terrier.jpg",
    "Bedlington_Terrier.jpg", "Border_Terrier.jpg", "Kerry_Blue_Terrier.jpg", "Irish_Terrier.jpg", "Norfolk_Terrier.jpg", "Norwich_Terrier.jpg", "Yorkshire_Terrier.jpg", "Wire-haired_Fox_Terrier.jpg", "Lakeland_Terrier.jpg", "Sealyham_Terrier.jpg",
    "Airedale.jpg", "Cairn.jpg", "Australian_Terrier.jpg", "Dandie_Dinmont.jpg", "Boston_Bull.jpg", "Miniature_Schnauzer.jpg", "Giant_Schnauzer.jpg", "Standard_Schnauzer.jpg", "Scotch_Terrier.jpg", "Tibetan_Terrier.jpg",
    "Silky_Terrier.jpg", "Soft-coated_Wheaten_Terrier.jpg", "West_Highland_White_Terrier.jpg", "Lhasa.jpg", "Flat-coated_Retriever.jpg", "Curly-coated_Retriever.jpg", "Golden_Retriever.jpg", "Labrador_Retriever.jpg", "Chesapeake_Bay_Retriever.jpg", "German_Short-haired_Pointer.jpg",
    "Vizsla.jpg", "English_Setter.jpg", "Irish_Setter.jpg", "Gordon_Setter.jpg", "Brittany_Spaniel.jpg", "Clumber.jpg", "English_Springer.jpg", "Welsh_Springer_Spaniel.jpg", "Cocker_Spaniel.jpg", "Sussex_Spaniel.jpg",
    "Irish_Water_Spaniel.jpg", "Kuvasz.jpg", "Schipperke.jpg", "Groenendael.jpg", "Malinois.jpg", "Briard.jpg", "Kelpie.jpg", "Komondor.jpg", "Old_English_Sheepdog.jpg", "Shetland_Sheepdog.jpg",
    "Collie.jpg", "Border_Collie.jpg", "Bouvier_des_Flandres.jpg", "Rottweiler.jpg", "German_Shepherd.jpg", "Doberman.jpg", "Miniature_Pinscher.jpg", "Greater_Swiss_Mountain_Dog.jpg", "Bernese_Mountain_Dog.jpg", "Appenzeller.jpg",
    "Entlebucher.jpg", "Boxer.jpg", "Bull_Mastiff.jpg", "Tibetan_Mastiff.jpg", "French_Bulldog.jpg", "Great_Dane.jpg", "Saint_Bernard.jpg", "Eskimo_Dog.jpg", "Malamute.jpg", "Siberian_Husky.jpg",
    "Affenpinscher.jpg", "Basenji.jpg", "Pug.jpg", "Leonberg.jpg", "Newfoundland.jpg", "Great_Pyrenees.jpg", "Samoyed.jpg", "Pomeranian.jpg", "Chow.jpg", "Keeshond.jpg",
    "Brabancon_Griffon.jpg", "Pembroke_Corgi.jpg", "Cardigan_Corgi.jpg", "Toy_Poodle.jpg", "Miniature_Poodle.jpg", "Standard_Poodle.jpg", "Mexican_Hairless.jpg", "Dingo.jpg", "Dhole.jpg", "African_Hunting_Dog.jpg"
];

let currentSession = null; 

document.addEventListener('DOMContentLoaded', () => {
    const uploadPage = document.getElementById('upload_page');
    const resultsPage = document.getElementById('results_page');
    const uploadBtn = document.getElementById('upload_btn');
    const fileInput = document.getElementById('file_input');
    const uploadAnotherBtn = document.getElementById('upload_another');
    const modelSelect = document.getElementById('model_options');
    const UploadedImage = document.getElementById('uploaded_image');
    const resultsList = document.getElementById('results_list');
    const canvas = document.createElement('canvas');
    canvas.width = 224;
    canvas.height = 224;
    canvas.style.display = 'none';
    document.body.appendChild(canvas);


    uploadBtn.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', async (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            UploadedImage.src = imageUrl;
            UploadedImage.style.display = 'block';
            
            // Switch to results page and show loading
            switchToResultsPage();
            resultsList.innerHTML = '<div style="text-align:center; padding:40px; font-size:1.2rem; color:#666;">Loading model and analyzing image...</div>';

            try {
                await new Promise((resolve, reject) => {
                    UploadedImage.onload = resolve;
                    UploadedImage.onerror = reject;
                });

                // Load the selected model 
                const selectedModel = modelSelect.value;
                await loadModel(selectedModel);

                // Preprocess the image
                const inputTensor = preprocessImage(UploadedImage, canvas);
                console.log("Input tensor shape:", inputTensor.dims);

                // Run inference
                const feeds = {};
                feeds[currentSession.inputNames[0]] = inputTensor;
                const results = await currentSession.run(feeds);
                
                // Results
                const outputName = currentSession.outputNames[0];
                const outputData = results[outputName].data;
                console.log("Output shape:", results[outputName].dims);
                console.log("Output length:", outputData.length);
                const top5 = getTopKClasses(outputData, 5);
                console.log("Top 5 predictions:", top5);                
                renderResults(top5);

            } catch (e) {
                console.error("Inference failed:", e);
                resultsList.innerHTML = `
                    <div style="color:red; padding:20px; background:#ffe6e6; border-radius:8px; margin:20px 0;">
                        <strong>Error:</strong> ${e.message}<br><br>
                        <strong>Troubleshooting tips:</strong><br>
                        • Make sure you're running this on a local server (not just opening the HTML file)<br>
                        • Ensure all .onnx model files are in the same directory as index.html<br>
                        • Check the browser console for detailed error messages<br>
                        • Make sure ONNX Runtime Web is loaded from the CDN
                    </div>`;
            }
        }
    });

    uploadAnotherBtn.addEventListener('click', () => {
        switchToUploadPage();
        fileInput.value = '';
        resultsList.innerHTML = '';
        UploadedImage.src = '';
        if (UploadedImage.src && UploadedImage.src.startsWith('blob:')) {
            URL.revokeObjectURL(UploadedImage.src);
        }
    });

    async function loadModel(modelName) {
        try {
            if (currentSession && currentSession.modelName === modelName) {
                console.log("Model already loaded:", modelName);
                return;
            }

            console.log("Loading model:", modelName);
            const modelPath = `${modelName}.onnx`;
            
            // Create a new session
            currentSession = await ort.InferenceSession.create(modelPath);
            currentSession.modelName = modelName;
            
            console.log("Model loaded successfully!");
            console.log("Input names:", currentSession.inputNames);
            console.log("Output names:", currentSession.outputNames);
            
        } catch (error) {
            console.error("Failed to load model:", error);
            throw new Error(`Failed to load model ${modelName}: ${error.message}`);
        }
    }

    function switchToResultsPage() {
        uploadPage.style.display = 'none';
        resultsPage.style.display = 'block';
        window.scrollTo(0, 0);
    }

    function switchToUploadPage() {
        resultsPage.style.display = 'none';
        uploadPage.style.display = 'block';
    }

    function preprocessImage(imageElement, canvas) {
        const width = 224;
        const height = 224;
        const ctx = canvas.getContext('2d');
        
        // Clear canvas
        ctx.clearRect(0, 0, width, height);
        
        // resize image
        ctx.drawImage(imageElement, 0, 0, width, height);
        
        const imageData = ctx.getImageData(0, 0, width, height).data;
        const float32Data = new Float32Array(3 * width * height);
        const mean = [0.485, 0.456, 0.406];
        const std = [0.229, 0.224, 0.225];

        for (let i = 0; i < width * height; i++) {
            const r = imageData[i * 4] / 255.0;
            const g = imageData[i * 4 + 1] / 255.0;
            const b = imageData[i * 4 + 2] / 255.0;

            float32Data[i] = (r - mean[0]) / std[0]; 
            float32Data[i + width * height] = (g - mean[1]) / std[1]; 
            float32Data[i + 2 * width * height] = (b - mean[2]) / std[2]; 
        }

        return new ort.Tensor('float32', float32Data, [1, 3, width, height]);
    }

    function getTopKClasses(logits, k) {
        const probs = softmax(logits);
        const indexedProbs = probs.map((prob, index) => ({ index, prob }));
        indexedProbs.sort((a, b) => b.prob - a.prob);

        const topK = indexedProbs.slice(0, k).map(item => ({
            breed: dogClasses[item.index] || `Unknown Class ${item.index}`,
            confidence: item.prob,
            breedIndex: item.index
        }));

        return topK;
    }

    function softmax(logits) {
        const maxLogit = Math.max(...logits);
        const exps = Array.from(logits).map(l => Math.exp(l - maxLogit));
        const sumExps = exps.reduce((a, b) => a + b, 0);
        return exps.map(e => e / sumExps);
    }

    function renderResults(resultsData) {
        resultsList.innerHTML = '';
        resultsData.forEach((result, index) => {
            const percentageStr = (result.confidence * 100).toFixed(2) + '%';
            
            // Get the images file location
            const breedImagePath = `Images/${breedImages[result.breedIndex]}`;
            
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            if (index === 0) resultItem.classList.add('top-result');

            resultItem.innerHTML = `
                <div class="result-thumb">
                    <img src="${breedImagePath}" alt="${result.breed}" 
                         style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px;">
                </div>
                <div class="result-text">
                    <div class="breed-title">${result.breed}</div>
                    <div class="breed-score">Confidence: ${percentageStr}</div>
                    <div class="confidence-bar-bg">
                        <div class="confidence-bar-fill" style="width: ${percentageStr};"></div>
                    </div>
                </div>
            `;
            resultsList.appendChild(resultItem);
        });
    }
});
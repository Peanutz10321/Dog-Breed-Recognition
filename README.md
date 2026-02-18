# Dog Breed Recognition

This project implements and evaluates three different model architectures for dog breed recognition on the [Standford Dogs Dataset](https://www.kaggle.com/datasets/miljan/stanford-dogs-dataset-traintest) that consists of 120 dog breeds.

---

## Models

| Model | Architecture | Format | Size |
|-------|-------------|--------|------|
| **DogBreedCNN** | Custom CNN | `.pth` / `.onnx` | ~26 MB |
| **EfficientNetB0** | Transfer Learning | `.pth` / `.onnx` | ~19 MB |
| **ViT-B/16** | Vision Transformer | `.pth` / `.onnx` | ~337 MB |

> The ViT-B/16 model weights are too large for GitHub. Download them from Google Drive below.

---

## 📥 Model Downloads

| Model | Download |
|-------|----------|
| ViT-B/16 `.pth` | [Google Drive](https://drive.google.com/file/d/1dGpbz0uEAeynV0HMdt9BxLIp5ps7KsGn/view?usp=sharing) |
| ViT-B/16 `.onnx` | [Google Drive](https://drive.google.com/file/d/1qhXXco6CPGCFkinYArfXBN31fzmwStLx/view?usp=sharing) |

> The smaller CNN and EfficientNetB0 weights are included directly in this repo.

---

##  Project Structure

```
Dog-Breed-Recognition/
├── notebooks/
│   ├── DogBreedCNN.ipynb            # Custom CNN training
│   ├── EfficientNetB0_Transfer.ipynb # EfficientNet transfer learning
│   └── ViT_B16_Transfer.ipynb       # Vision Transformer fine-tuning
├── Website/
│   ├── index.html                   # Web demo interface
│   ├── script.js                    # Prediction logic
|   |── Page1 Images                 # Sample Images
│   └── Images/                      # Sample Image
├── .gitignore
└── README.md
```

---

## Web Demo

The web demo runs entirely in the browser using [ONNX Runtime Web](https://onnxruntime.ai/).

### How to run

1. Clone the repo:
   ```bash
   git clone https://github.com/Peanutz10321/Dog-Breed-Recognition.git
   cd Dog-Breed-Recognition
   ```

2. Download the model weights (see above) and place `.onnx` files in the root directory.

3. Open `Website/index.html` in your browser.

4. Upload a dog photo and get an instant breed prediction!

---

## Notebooks

Each notebook covers the full pipeline for its respective model:

- **Data loading & preprocessing** from the Stanford Dogs Dataset
- **Model definition & training**
- **Evaluation** — accuracy, confusion matrix, top-k predictions
- **Export** to `.pth` (PyTorch) and `.onnx` (for web deployment)

### Running the notebooks

#### Environment

All notebooks run directly in google colab

---

| Notebook | Colab Link |
|----------|------------|
| DogBreedCNN | [Open In Colab](https://colab.research.google.com/drive/1adtN7L2kQkjQfKckqo0DHd5c3ndliled?usp=sharing) |
| EfficientNetB0 | [Open In Colab](https://colab.research.google.com/drive/10psSKX_nLUhrgC2Y5frzcGrxCPXyYo8C?usp=sharing) |
| ViT-B/16 | [Open In Colab](https://colab.research.google.com/drive/1V5Krwd8whFjoPdlV552YDtrF5EjSYajL?usp=sharing) |

---

## 📊 Dataset

**Stanford Dogs Dataset**
- 120 dog breeds
- 20,580 images
- Source: [http://vision.stanford.edu/aditya/cachedir/stanford_dogs/](https://www.kaggle.com/datasets/miljan/stanford-dogs-dataset-traintest)

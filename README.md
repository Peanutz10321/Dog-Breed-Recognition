# 🐶 Dog Breed Recognition

A deep learning project that classifies **120 dog breeds** from the [Stanford Dogs Dataset](http://vision.stanford.edu/aditya/cachedir/stanford_dogs/) using three different model architectures — from a custom CNN to state-of-the-art Vision Transformers — with a lightweight web demo for live predictions.

---

## 🧠 Models

| Model | Architecture | Format | Size |
|-------|-------------|--------|------|
| **DogBreedCNN** | Custom CNN | `.pth` / `.onnx` | ~26 MB |
| **EfficientNetB0** | Transfer Learning | `.pth` / `.onnx` | ~19 MB |
| **ViT-B/16** | Vision Transformer | `.pth` / `.onnx` | ~337 MB |

> ⚠️ The ViT-B/16 model weights are too large for GitHub. Download them from Google Drive below.

---

## 📥 Model Downloads

| Model | Download |
|-------|----------|
| ViT-B/16 `.pth` | [Google Drive](https://drive.google.com/your-link-here) |
| ViT-B/16 `.onnx` | [Google Drive](https://drive.google.com/your-link-here) |

> The smaller CNN and EfficientNetB0 weights are included directly in this repo.

---

## 🗂️ Project Structure

```
Dog-Breed-Recognition/
├── notebooks/
│   ├── DogBreedCNN.ipynb            # Custom CNN training
│   ├── EfficientNetB0_Transfer.ipynb # EfficientNet transfer learning
│   └── ViT_B16_Transfer.ipynb       # Vision Transformer fine-tuning
├── Website/
│   ├── index.html                   # Web demo interface
│   ├── script.js                    # Prediction logic (ONNX Runtime)
│   └── images/                      # Sample images for demo
├── .gitignore
└── README.md
```

---

## 🌐 Web Demo

The web demo runs entirely **in the browser** using [ONNX Runtime Web](https://onnxruntime.ai/) — no server required.

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

## 📓 Notebooks

Each notebook covers the full pipeline for its respective model:

- **Data loading & preprocessing** from the Stanford Dogs Dataset
- **Model definition & training**
- **Evaluation** — accuracy, confusion matrix, top-k predictions
- **Export** to `.pth` (PyTorch) and `.onnx` (for web deployment)

### Requirements

```bash
pip install torch torchvision timm matplotlib scikit-learn
```

---

## 📊 Dataset

**Stanford Dogs Dataset**
- 120 dog breeds
- 20,580 images
- Source: [http://vision.stanford.edu/aditya/cachedir/stanford_dogs/](http://vision.stanford.edu/aditya/cachedir/stanford_dogs/)

---

## 👥 Contributors

Built as a group project for the *Foundations of AI* course.

---

## 📄 License

This project is for educational purposes.

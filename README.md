# DevOps Demo: Node.js CI/CD with Docker & GitHub Actions

## 📌 Project Overview
This project is a **simple Node.js web application** that demonstrates key DevOps principles, including:
- **CI/CD Pipeline** using **GitHub Actions**
- **Automated Testing** using **Jest & Supertest**
- **Containerization** using **Docker**

## 🚀 Features
✅ Simple Express.js web application
✅ Automated CI/CD pipeline triggered on push
✅ Dockerfile for containerization
✅ Basic unit test to validate API response
✅ GitHub Actions workflow for automated build & test

## 📂 Project Structure
```
├── .github/workflows/ci.yml    # GitHub Actions workflow
├── Dockerfile                   # Docker container setup
├── index.js                     # Main server file
├── package.json                 # Node.js dependencies
├── app.test.js                  # Test file
└── README.md                    # Project documentation
```

## 🛠️ Setup & Installation
### Prerequisites
- **Node.js** (v18 or later)
- **Docker** (for containerization)
- **GitHub Account** (for CI/CD)

### 1️⃣ Clone the Repository
```bash
git clone <your-github-repo-url>
cd devops-demo
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Run Locally
```bash
node index.js
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4️⃣ Run Tests
```bash
npm test
```

## 📦 Docker Setup
### 1️⃣ Build the Docker Image
```bash
docker build -t devops-demo .
```

### 2️⃣ Run the Container
```bash
docker run -p 3000:3000 devops-demo
```

## 🔄 CI/CD Pipeline (GitHub Actions)
The **GitHub Actions workflow** automates:
- **Code checkout**
- **Node.js setup**
- **Dependency installation**
- **Running tests**
- **Building Docker image**

The workflow file is in `.github/workflows/ci.yml` and runs automatically when pushing to the **main branch**.

## 🏆 Future Improvements
- **Deploy to GCP/AWS using Terraform/Terragrunt**
- **Implement database integration**
- **Add Kubernetes for container orchestration**

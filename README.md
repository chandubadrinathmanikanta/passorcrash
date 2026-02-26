# PassOrCrash

**PassOrCrash** is a Visual Studio Code extension that provides **audio feedback** when your test cases pass or fail.  
It helps developers immediately know the result of their test cases without constantly checking the terminal.

---

## Table of Contents

1. [Features](#features)  
2. [Prerequisites](#prerequisites)  
3. [Installation](#installation)  
4. [Running the Extension in VS Code](#running-the-extension-in-vs-code)  
5. [Using the VSIX File](#using-the-vsix-file)  
6. [Folder Structure](#folder-structure)  
7. [Contributing](#contributing)  
8. [License](#license)  

---

## Features

- Plays **success** or **failure** audio when tests run.  
- Lightweight and easy to integrate with any project.  
- Can be customized by replacing `.wav` files in the `media` folder.  

---

## Prerequisites

Before installing the extension, make sure you have:

1. **Node.js** (v18.x or higher) – [Download Node.js](https://nodejs.org/)  
2. **npm** (comes with Node.js)  
3. **Visual Studio Code** (v1.60 or higher) – [Download VS Code](https://code.visualstudio.com/)  

Optional for development:

- **Git** – [Download Git](https://git-scm.com/downloads)  
- **TypeScript** – Installed via `npm install -g typescript` if you want to compile manually  

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/chandubadrinathmanikanta/passorcrash.git
cd passorcrash
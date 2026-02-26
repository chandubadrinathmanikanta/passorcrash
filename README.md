# PassOrCrash

**PassOrCrash** is a Visual Studio Code extension that provides **audio feedback** when your test cases pass or fail. It makes testing more interactive by playing different sounds for pass and fail results, helping developers quickly notice test outcomes without looking at the terminal.

---

## Features

- Play custom audio when a test **passes**.
- Play custom audio when a test **fails**.
- Works seamlessly within VS Code.
- Easy to install via VSIX or npm packaging.
- Supports customization of audio files.

---

## Prerequisites

Before installing PassOrCrash, make sure you have:

1. **Visual Studio Code** installed (Version 1.109.0 or higher recommended).  
   Download: [https://code.visualstudio.com/](https://code.visualstudio.com/)

2. **Node.js** installed (Version 18+ recommended).  
   Download: [https://nodejs.org/](https://nodejs.org/)

3. **npm** (comes with Node.js) for managing dependencies.

4. **Git** installed if you are cloning the repository.  
   Download: [https://git-scm.com/](https://git-scm.com/)

---

## Installation

### Option 1: Installing from GitHub

1. Clone the repository:

```bash
git clone https://github.com/chandubadrinathmanikanta/passorcrash.git
cd passorcrash

Install dependencies:

npm install

Compile the extension (TypeScript → JavaScript):

npm run compile
Option 2: Installing using VSIX File

Download the latest .vsix file from the repository releases or build your own:

vsce package

This generates a file like passorcrash-0.0.1.vsix in the root folder.

Open Visual Studio Code.

Press Ctrl+Shift+P (Windows/Linux) or Cmd+Shift+P (Mac) to open the Command Palette.

Search for “Extensions: Install from VSIX…” and select it.

Browse to the location of your .vsix file and click Install.

Running the Extension in VS Code

Open your project in VS Code where you want to use PassOrCrash.

Open the Command Palette (Ctrl+Shift+P / Cmd+Shift+P).

Type Run PassOrCrash and press Enter.

The extension will monitor your test runs and play audio files when tests pass or fail.

Default audio files are located in the media folder:

success.wav → Played on test pass

fail.wav → Played on test fail

You can replace these with your own audio files if needed.

Using the VSIX File

If you have the VSIX file (passorcrash-0.0.1.vsix):

Open VS Code → Command Palette → Extensions: Install from VSIX….

Select the VSIX file and install.

Once installed, use the Run PassOrCrash command to activate the extension.

Note: VSIX files are useful when working offline or for custom builds.

Folder Structure

After cloning/building, your project folder should look like this:

passorcrash/
├─ CHANGELOG.md
├─ README.md
├─ ShowTree.ps1
├─ package.json
├─ media/
│  ├─ aarti.wav
│  ├─ fahhhhh.wav
│  ├─ fail.wav
│  └─ success.wav
├─ out/
│  ├─ extension.js
│  └─ extension.js.map
├─ node_modules/
└─ tsconfig.json

media/ → Contains audio files.

ShowTree.ps1 → PowerShell helper script.

out/extension.js → Compiled extension code.

package.json → Extension configuration and dependencies.

Contributing

Contributions are welcome!

Fork the repository.

Create a new branch:

git checkout -b feature/your-feature

Make changes and commit:

git commit -m "Add feature X"

Push your branch:

git push origin feature/your-feature

Create a pull request.

License

This project is licensed under the MIT License. See the LICENSE
 file for details.

✅ This README provides:

Step-by-step installation instructions.

Usage guide for VS Code and VSIX.

Folder structure reference.

Contribution guide.
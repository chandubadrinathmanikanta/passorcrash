import * as vscode from 'vscode';
import { exec } from 'child_process';

let audioProcess: any = null;

export function activate(context: vscode.ExtensionContext) {

    console.log("PassOrCrash is Active");

    const disposable = vscode.commands.registerCommand('passorcrash.run', async () => {

        const isPass = Math.random() > 0.5;

        const soundPath = isPass
            ? context.asAbsolutePath('media/aarti.wav')
            : context.asAbsolutePath('media/fahhhhh.wav');

        try {

            // Kill previous sound if running
            if (audioProcess) {
                audioProcess.kill();
                audioProcess = null;
            }

            // Windows native WAV player via PowerShell
            audioProcess = exec(
                `powershell -c (New-Object Media.SoundPlayer '${soundPath}').PlaySync();`,
                (error) => {
                    if (error) {
                        console.error(error);
                    }
                }
            );

            // STRICT 5 second stop
            setTimeout(() => {
                if (audioProcess) {
                    audioProcess.kill();
                    audioProcess = null;
                }
            }, 5000);

            if (isPass) {
                vscode.window.showInformationMessage("✅ All Tests Passed!");
            } else {
                vscode.window.showErrorMessage("❌ Tests Failed!");
            }

        } catch (err) {
            vscode.window.showErrorMessage("Audio playback failed.");
            console.error(err);
        }

    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
    if (audioProcess) {
        audioProcess.kill();
    }
}
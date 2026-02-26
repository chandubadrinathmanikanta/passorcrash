import * as vscode from 'vscode';
import { exec } from 'child_process';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {

	const runCommand = vscode.commands.registerCommand(
		'passorcrash.runTests',
		() => {

			const extensionPath = context.extensionPath;
			const failSound = path.join(extensionPath, 'media', 'fahhhhh.mp3');
			const successSound = path.join(extensionPath, 'media', 'aarti.mp3');

			vscode.window.showInformationMessage('Compiling and running tests...');

			// First compile
			exec('npm run compile', (compileError) => {

				if (compileError) {
					playSound(failSound);
					vscode.window.showErrorMessage('❌ Compilation Failed!');
					return;
				}

				// Then run tests
				exec('npm test', (testError) => {

					if (testError) {
						playSound(failSound);
						vscode.window.showErrorMessage('❌ Tests Failed!');
					} else {
						playSound(successSound);
						vscode.window.showInformationMessage('✅ All Tests Passed!');
					}
				});
			});
		}
	);

	context.subscriptions.push(runCommand);
}

function playSound(soundPath: string) {
	exec(`powershell -c (New-Object Media.SoundPlayer '${soundPath}').PlaySync();`);
}

export function deactivate() {}
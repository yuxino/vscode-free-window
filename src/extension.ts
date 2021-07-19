import * as vscode from "vscode";
const path = require("path");
const fs = require("fs");

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand("freewindow.webview", () => {
    const html = fs.readFileSync(
      path.join(context.extensionPath, "./src/freeWindow.html"),
      "utf-8"
    );

    const panel = vscode.window.createWebviewPanel(
      "freewindow.webview",
      "Free-Window",
      vscode.ViewColumn.Two,
      {
        enableScripts: true,
        retainContextWhenHidden: true,
      }
    );
    panel.webview.html = html;
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}

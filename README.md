# Google AI Studio 中文助手 (Edge/Chrome Extension)

这是一个为 [Google AI Studio](https://aistudio.google.com/) 开发的浏览器汉化插件。它通过纯前端的方式（DOM 遍历与 MutationObserver）将界面中的英文元素替换为中文，同时保留用户输入的 Prompt 和 AI 生成的内容不被修改。

## ✨ 功能特点

- **全界面汉化**：覆盖菜单、设置、API 管理、Prompt 构建器、模型说明等。
- **智能识别**：仅翻译界面 UI，不干扰您的提问和 AI 回答。
- **动态更新**：支持动态加载的内容（如点击按钮后弹出的对话框）。
- **安全隐私**：代码开源，所有翻译逻辑在本地运行，不上传任何数据。

## 🚀 安装教程

由于本插件尚未上架应用商店，需要通过“开发者模式”手动安装：

1.  **下载代码**：
    *   点击本页面右上角的 `Code` -> `Download ZIP` 下载并解压。
    *   或者使用 Git 克隆：`git clone https://github.com/shaonaiyan/edge-extension-aistudio-cn.git`
2.  **打开扩展管理**：
    *   **Edge 浏览器**：地址栏输入 `edge://extensions/`
    *   **Chrome 浏览器**：地址栏输入 `chrome://extensions/`
3.  **开启开发者模式**：
    *   打开页面右上角的开关 **“开发人员模式” (Developer mode)**。
4.  **加载扩展**：
    *   点击左上角的 **“加载解压缩的扩展” (Load unpacked)** 按钮。
    *   选择本项目所在的文件夹（包含 `manifest.json` 的那个文件夹）。
5.  **完成**：
    *   打开 [Google AI Studio](https://aistudio.google.com/)，界面即变为中文。

## 🔄 如何更新

如果您发现有新的界面没有汉化，或者代码有更新：

1.  **获取新代码**：
    *   如果是 Git 克隆的，运行 `git pull`。
    *   如果是下载的 ZIP，请下载最新版覆盖原文件。
2.  **重载插件**：
    *   回到浏览器的扩展管理页面。
    *   找到“Google AI Studio 中文助手”。
    *   点击 **刷新/重载 (Reload)** 图标（通常是一个旋转的箭头）。
3.  刷新 AI Studio 页面即可生效。

## 🛠️ 自定义/贡献翻译

所有翻译内容都存储在 `content.js` 文件的 `i18n` 字典中。

如果您发现有未翻译的词条，可以按以下格式添加到 `i18n` 对象中：

```javascript
const i18n = {
    // ... 现有翻译 ...
    "New English Text": "新的中文翻译",
};
```

保存文件后，**重载插件**并刷新页面即可看到效果。

## ⚠️ 免责声明

本项目为第三方开源工具，与 Google 官方无关。仅供学习和交流使用。

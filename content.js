// 汉化字典
const i18n = {
    // 导航与通用
    "Create new": "新建",
    "New chat": "新对话",
    "Prompts": "提示词",
    "Chat prompt": "对话提示词",
    "Freeform prompt": "自由提示词",
    "Structured prompt": "结构化提示词",
    "My library": "我的库",
    "Gallery": "示例库",
    "Documentation": "文档",
    "Settings": "设置",
    "Help": "帮助",
    "Sign out": "退出登录",
    "Drive": "云端硬盘",
    "Home": "主页",
    "Recent": "最近",
    "Playground": "控制台",
    "Build": "构建",
    "Dashboard": "仪表盘",
    "View API keys": "查看 API 密钥",
    "Explore docs": "浏览文档",
    "Start": "开始",
    "Your apps": "您的应用",
    "FAQ": "常见问题",
    "Toggle navigation menu": "切换导航菜单",
    "Usage and Billing": "用量与计费",
    "Copy API key": "复制 API 密钥",
    "View billing": "查看账单",
    "View usage": "查看用量",
    
    // 首页/卡片
    "Google AI Studio": "Google AI Studio",
    "The fastest way from prompt to production with Gemini": "使用 Gemini 从提示词到产品的最快途径",
    "New app": "新建应用",
    "Vibe code GenAI apps": "编写 GenAI 应用代码",
    "Chat with models": "与模型对话",
    "Monitor usage and projects": "监控用量和项目",
    "What's new": "最新动态",
    "Try Gemini 3": "试用 Gemini 3",
    "Our most intelligent model to date.": "我们迄今为止最智能的模型。",
    "Try Nano Banana Pro": "试用 Nano Banana Pro",
    "State-of-the-art image generation and editing model.": "最先进的图像生成和编辑模型。",
    "Veo 3.1": "Veo 3.1",
    "Our best video generation model, now with sound effects.": "我们最好的视频生成模型，现在支持音效。",
    "Text to speech with Gemini": "Gemini 语音合成",
    "Generate high quality text to speech with Gemini": "使用 Gemini 生成高质量语音。",
    "Try it": "试一试",
    "Get started with Gemini": "开始使用 Gemini",
    "Build your ideas with Gemini": "使用 Gemini 构建您的创意",
    "Describe your idea": "描述您的创意",
    "I'm feeling lucky": "手气不错",
    "Supercharge your apps with AI": "用 AI 为您的应用增效",
    "Discover and remix app ideas": "发现并二创应用创意",
    "Browse the app gallery": "浏览应用库",
    
    // 首页应用卡片详情
    "Nano banana powered app": "Nano Banana 驱动的应用",
    "Add powerful photo editing to your app.": "为您的应用添加强大的照片编辑功能。",
    "Allow users to add objects, remove backgrounds, or change a photo's style just by typing.": "让用户仅需输入文字即可添加对象、移除背景或更改照片风格。",
    "Create conversational voice apps": "创建对话式语音应用",
    "Use the Gemini Live API to give your app a voice and make your own conversational experiences.": "使用 Gemini Live API 为您的应用赋予语音能力，打造您自己的对话体验。",
    "Animate images with Veo": "使用 Veo 让图像动起来",
    "Bring images to life with Veo 3. Let users upload a product photo and turn it into a dynamic video ad, or animate a character's portrait.": "使用 Veo 3 让图像栩栩如生。让用户上传产品照片并将其转化为动态视频广告，或让角色肖像动起来。",
    "Use Google Search data": "使用 Google 搜索数据",
    "Connect your app to real-time Google Search results. Build an agent that can discuss current events, cite recent news, or fact-check information.": "将您的应用连接到实时 Google 搜索结果。构建一个可以讨论时事、引用最近新闻或核查信息的智能体。",

    // 编辑器界面
    "Untitled prompt": "未命名提示词",
    "Untitled": "未命名",
    "Save": "保存",
    "Run": "运行",
    "Cancel": "取消",
    "Get code": "获取代码",
    "Share": "分享",
    "Export": "导出",
    "Clear": "清除",
    "Delete": "删除",
    "Edit": "编辑",
    "Copy": "复制",
    "System Instructions": "系统指令",
    "System instructions": "系统指令",
    "Optional tone and style instructions for the model": "针对模型的语气和风格的可选指令",
    "Insert": "插入",
    "Expand prompts history": "展开提示词历史",
    "No API Key": "无 API 密钥",
    "Switch to a paid API key to unlock higher quota and more features.": "切换到付费 API 密钥以解锁更高配额和更多功能。",
    
    // 模型设置与选择
    "Model": "模型",
    "Models": "模型",
    "Temperature": "随机性 (Temperature)",
    "Token limit": "Token 限制",
    "Safety settings": "安全设置",
    "Advanced settings": "高级设置",
    "Top K": "Top K",
    "Top P": "Top P",
    "Stop sequences": "停止序列",
    "Add stop sequence": "添加停止序列",
    "Output length": "输出长度",
    "Model selection": "模型选择",
    "Search for a model": "搜索模型",
    "Featured": "精选",
    "Live": "实时",
    "Images": "图像",
    "Video": "视频",
    "Audio": "音频",
    "All": "全部",
    "Media resolution": "媒体分辨率",
    "Default": "默认",
    "Thinking level": "思考层级",
    "High": "高",
    
    // 工具栏
    "Tools": "工具",
    "Structured outputs": "结构化输出",
    "Code execution": "代码执行",
    "Function calling": "函数调用",
    "Grounding with Google Search": "Google 搜索增强",
    "Source: Google Search": "来源：Google 搜索",
    "URL context": "URL 上下文",

    // 模型详细描述
    "Gemini 3 Pro Preview": "Gemini 3 Pro 预览版",
    "Our most intelligent model with SOTA reasoning and multimodal understanding, and powerful agentic and vibe coding capabilities": "我们最智能的模型，具备 SOTA 推理和多模态理解能力，以及强大的代理和 Vibe 编码能力",
    "Gemini Flash Latest": "Gemini Flash 最新版",
    "Our hybrid reasoning model, with a 1M token context window and thinking budgets.": "我们的混合推理模型，具有 100 万 Token 上下文窗口和思考预算。",
    "Points to gemini-2.5-flash-preview-09-2025": "指向 gemini-2.5-flash-preview-09-2025",
    "Points to gemini-2.5-flash-lite-preview-09-2025": "指向 gemini-2.5-flash-lite-preview-09-2025",
    "Gemini Flash-Lite Latest": "Gemini Flash-Lite 最新版",
    "Our smallest and most cost effective model, built for scale usage.": "我们最小、最具成本效益的模型，专为大规模使用而构建。",
    "Imagen 4": "Imagen 4",
    "Our latest image generation model, with significantly better text rendering and better overall image quality.": "我们最新的图像生成模型，具有显著更好的文本渲染和整体图像质量。",
    "Imagen 4 Ultra": "Imagen 4 Ultra",
    "Our latest image generation model, with significantly better text rendering and better overall image quality.": "我们最新的图像生成模型，具有显著更好的文本渲染和整体图像质量。",
    
    // 聊天/输入相关
    "User": "用户",
    "Model input": "模型输入",
    "Model output": "模型输出",
    "Input": "输入",
    "Output": "输出",
    "Test your prompt": "测试提示词",
    "Type something...": "输入内容...",
    "Enter a prompt here": "在此输入提示词",
    "Add to prompt": "添加到提示词",
    
    // 侧边栏/其他
    "Tuned models": "微调模型",
    "New tuned model": "新建微调模型",
    "API key": "API 密钥",
    "Get API key": "获取 API 密钥",
    "Create API key": "创建 API 密钥",
    
    // 状态与单位
    "Saving...": "保存中...",
    "Saved": "已保存",
    "Error": "错误",
    "Loading...": "加载中...",
    "Knowledge cut off": "知识截止",
    
    // 提示
    "Block none": "不拦截",
    "Block few": "拦截少量",
    "Block some": "拦截部分",
    "Block most": "拦截大部分",
    
    // 通用操作
    "Expand": "展开",
    "Collapse": "收起",
    "History": "历史记录",
    "Rename": "重命名",
    "Duplicate": "创建副本",
    "Cancel": "取消",
    "OK": "确定",
    "Confirm": "确认",
    "Delete chat": "删除对话",
    "Rename chat": "重命名对话",
    "Close": "关闭",
    "Use": "使用",
    "Next": "下一步",
    "Back": "返回",
    "Finish": "完成",
    "Done": "完成",
    "More": "更多",
    "Less": "更少",
    "Search": "搜索",

    // V5 新增 - 菜单与设置
    "Theme": "主题",
    "Light": "亮色",
    "Dark": "暗色",
    "System": "跟随系统",
    "Submit prompt key": "提交快捷键",
    "View status": "查看状态",
    "Terms of service": "服务条款",
    "Privacy policy": "隐私政策",
    "Send feedback": "发送反馈",
    "Billing Support": "账单支持",
    "Run settings": "运行设置",
    
    // V5 新增 - 工具提示与说明
    "For Gemini 3, best results at default 1.0. Lower values may impact reasoning.": "对于 Gemini 3，默认值 1.0 效果最佳。较低的值可能会影响推理能力。",
    "Higher resolutions may provide better understanding but use more tokens.": "更高的分辨率可能会提供更好的理解能力，但会消耗更多 Token。",
    "State-of-the-art image generation and editing": "最先进的图像生成和编辑",

    // V6 新增 - 更多工具与设置说明
    "Set the thinking level": "设置思考层级",
    "Low": "低",
    "Medium": "中",
    "Generate structured outputs": "生成结构化输出",
    "Lets Gemini use code to solve complex tasks": "让 Gemini 使用代码解决复杂任务",
    "Lets you define functions that Gemini can call": "让您定义 Gemini 可调用的函数",
    "This tool is not compatible with the current active tools.": "此工具与当前激活的工具不兼容。",

    // V7 新增 - 搜索与安全设置
    "Use Google Search": "使用 Google 搜索",
    "Browse the url context": "浏览 URL 上下文",
    "Adjust harmful response settings": "调整有害内容响应设置",
    "Truncate response including and after string": "截断响应 (包含及之后)",
    "Maximum number of tokens in response": "响应中的最大 Token 数",

    // V8 新增 - 提示与模式
    "Google AI models may make mistakes, so double-check outputs.": "Google AI 模型可能会犯错，请仔细检查输出。",
    "Probability threshold for top-p sampling": "Top-P 采样的概率阈值",
    "Temporary chat": "临时对话",
    "You need to create and run a prompt in order to share it": "您需要创建并运行提示词才能分享它",
    "Compare mode": "对比模式",

    // V9 新增 - 更多操作与对话框
    "Already in a new chat": "已在新对话中",
    "View more actions": "查看更多操作",
    "No changes to save": "没有需要保存的更改",
    "Make a copy": "创建副本",
    "Raw Mode": "原始模式",
    "+ Create new instruction": "+ 新建指令",
    "Title": "标题",
    "Choose a paid API key": "选择付费 API 密钥",
    "You have no Paid Project. Please view the Projects Page to choose a Project and Upgrade.": "您没有付费项目。请查看项目页面以选择项目并升级。",
    "Go to Projects Page": "前往项目页面",

    // V10 新增 - 高级设置与指令
    "Select model for the code assistant:": "选择代码助手使用的模型：",
    "The model will be used by the code assistant to generate code.": "该模型将由代码助手用于生成代码。",
    "Add custom instructions for your project to control style, models used, add specific knowledge, and more.": "为您的项目添加自定义指令，以控制风格、使用的模型、添加特定知识等。",
    "System instructions template": "系统指令模板",
    "The configuration is for working with React + TypeScript application. Assumes a basic structure with index.html and index.tsx. Code Assistant follows strict guidelines for using the Gemini API.": "此配置适用于 React + TypeScript 应用程序。假设具有 index.html 和 index.tsx 的基本结构。代码助手遵循使用 Gemini API 的严格准则。",
    "Microphone selector": "麦克风选择器",
    "No microphones found.": "未找到麦克风。",
    
    "Instructions": "指令",
    "Write my own instructions": "编写我自己的指令",
    "Upload an instructions file": "上传指令文件",
    "// An example instruction set for a model": "// 模型指令集示例",
    "You will always:": "您将始终：",
    "* Use emojis instead of SVG icons": "* 使用表情符号代替 SVG 图标",
    "* Do not change model strings found in code": "* 不要更改代码中的模型字符串",
    "* Avoid using gradients": "* 避免使用渐变",
    
    "Angular (TypeScript)": "Angular (TypeScript)",
    "React (TypeScript)": "React (TypeScript)",
    "Default (Gemini 3 Pro Preview)": "默认 (Gemini 3 Pro Preview)",

    // V11 新增 - 更多功能卡片
    "Use Google Maps data": "使用 Google 地图数据",
    "Connect your app to real-time Google Maps data. Build an agent that can pull information about places, routes, or directions.": "将您的应用连接到实时 Google 地图数据。构建一个可以提取地点、路线或方向信息的代理。",
    "Generate images with Nano Banana": "使用 Nano Banana 生成图像",
    "Generate images with Nano Banana...": "使用 Nano Banana 生成图像...",
    "Generate high-quality images from a text prompt. Create blog post heroes, concept art, or unique assets in your application.": "根据文本提示生成高质量图像。为您的应用程序创建博客文章主图、概念艺术或独特资产。",
    "Gemini intelligence in your app": "应用中的 Gemini 智能",
    "Embed Gemini in your app to complete all sorts of tasks - analyze content, make edits, and more": "将 Gemini 嵌入您的应用中以完成各种任务 - 分析内容、进行编辑等",
    "AI powered chatbot": "AI 驱动的聊天机器人",
    "Add a context-aware chatbot to your app. Give your users a support agent that remembers the conversation, perfect for multi-step bookings or troubleshooting.": "向您的应用添加上下文感知聊天机器人。为您的用户提供一个能够记住对话的支持代理，非常适合多步预订或故障排除。",
    "Prompt based video generation": "基于提示的视频生成",
    "Add video generation to your creative app. Let users turn their blog posts, scripts, or product descriptions into short video clips.": "向您的创意应用添加视频生成功能。让用户将他们的博客文章、脚本或产品描述转化为短视频片段。",
    "Control image aspect ratios": "控制图像纵横比",
    "Control the exact shape of your generated images. Build an app that creates perfect-fit images for vertical phone wallpapers or horizontal web banners.": "控制生成图像的确切形状。构建一个应用程序，为垂直手机壁纸或水平网页横幅创建完美适配的图像。",
    "Analyze images": "分析图像",
    "Enable your app to see and understand images. Allow users to upload a photo of a receipt, a menu, or a chart to get instant data extraction, translations, or summaries.": "使您的应用能够查看和理解图像。允许用户上传收据、菜单或图表的照片，以获得即时数据提取、翻译或摘要。",
    "Fast AI responses": "快速 AI 响应",
    "Add lightning-fast, real-time responses to your app using 2.5 Flash-Lite. Perfect for instant auto-completes, or conversational agents that feel alive.": "使用 2.5 Flash-Lite 为您的应用添加闪电般的实时响应。非常适合即时自动完成或感觉栩栩如生的对话代理。",
    "Video understanding": "视频理解",
    "Help users find the key moments in long videos. Add a feature to analyze video content to instantly generate summaries, flashcards, or marketing highlights.": "帮助用户在长视频中找到关键时刻。添加一项功能来分析视频内容，以即时生成摘要、抽认卡或营销集锦。",
    "Transcribe audio": "转录音频",
    "Add a feature to provide live, real-time transcription of any audio feed for your users.": "添加一项功能，为您的用户提供任何音频源的实时转录。",
    "Think more when needed": "需要时进行更多思考",
    "Give your app's AI time to think. Enable 'Thinking Mode' to handle your users' most complex queries.": "给您的应用 AI 思考的时间。启用“思考模式”来处理用户最复杂的查询。",
    "Generate speech": "生成语音",
    "Give your app a voice. Add text-to-speech to read articles aloud, provide audio navigation, or create voice-based assistants for your users.": "给您的应用赋予声音。添加文本转语音功能以朗读文章、提供语音导航或为您的用户创建基于语音的助手。",

    // V12 新增 - 更多杂项与合并文本
    "Add powerful photo editing to your app. Allow users to add objects, remove backgrounds, or change a photo's style just by typing.": "为您的应用添加强大的照片编辑功能。让用户仅需输入文字即可添加对象、移除背景或更改照片风格。",
    "Remove feature": "移除功能",
    "Recently viewed": "最近查看",
    "Get SDK code to chat with Gemini": "获取用于与 Gemini 对话的 SDK 代码",
    "Reset default settings": "重置默认设置",

    // V13 - 安全设置与更多
    "Run safety settings": "运行安全设置",
    "Adjust how likely you are to see responses that could be harmful. Content is blocked based on the probability that it is harmful.": "调整您看到可能有害响应的可能性。内容将根据其有害的概率被拦截。",
    "You are responsible for ensuring that safety settings for your intended use case comply with the Terms and Use Policy. Learn more.": "您有责任确保您预期用例的安全设置符合条款和使用政策。了解更多。",
    "Harassment": "骚扰",
    "Hate": "仇恨言论",
    "Sexually Explicit": "露骨色情",
    "Dangerous Content": "危险内容",
    "Reset defaults": "重置默认值",
    "Pin app": "固定应用",
    "Create new instruction": "新建指令",
    "Gemini 3 Pro Image Preview": "Gemini 3 Pro 图像预览",

    // V14 - Nano Banana Pro 与图像设置
    "Link a paid API key to access Nano Banana Pro": "关联付费 API 密钥以访问 Nano Banana Pro",
    "Create a fashion product collage on a brown corkboard based on this outfit.": "基于这套服装在棕色软木板上创建时尚产品拼贴画。",
    "Create an orthographic blueprint that describes this building in plan.": "创建描述此建筑平面图的正投影蓝图。",
    "Create an illustrated explainer, detailing the physics of the fluid dynamics.": "创建插图说明，详细解释流体动力学的物理原理。",
    "Nano Banana Pro is only available for paid tier users. Link a paid API key to access higher rate limits, advanced features, and more.": "Nano Banana Pro 仅供付费层级用户使用。关联付费 API 密钥以访问更高的速率限制、高级功能等。",
    "Link API key": "关联 API 密钥",
    "Generate an image of a banana wearing a costume.": "生成一张香蕉穿着戏服的图像。",
    "Aspect ratio": "纵横比",
    "Auto": "自动",
    "Resolution": "分辨率",
    "Aspect ratio of the generated images": "生成图像的纵横比",
    "Resolution of the generated images": "生成图像的分辨率",
    "Copy to clipboard": "复制到剪贴板",

    // V15 - 更多文档与操作
    "Developer docs": "开发者文档",
    "Delete system instruction": "删除系统指令",
    "Instructions are saved in local storage.": "指令已保存到本地存储。",
    "Edit title and description": "编辑标题和描述",
    "Verify AI generated content with SynthID": "使用 SynthID 验证 AI 生成的内容",

    // V16 - 计费与用量
    "There is no billing currently set up for this project Gemini API.": "当前 Gemini API 项目未设置计费。",
    "Set up billing": "设置计费",
    "Learn more": "了解更多",
    "Usage data may take up to 15 minutes to update.": "用量数据更新可能需要最多 15 分钟。",
    "View in charts": "查看图表",
    "Usage information displayed is for the API and does not reflect AI Studio usage, which is offered free of charge (when no API key is selected). For latency/traffic data & method filtering please visit the Google Cloud Console": "显示的用量信息仅针对 API，不反映 AI Studio 的使用情况，后者是免费提供的（当未选择 API 密钥时）。如需查看延迟/流量数据和方法过滤，请访问 Google Cloud 控制台。",

    // V17 - 文件上传与语音
    "You are responsible for ensuring that safety settings for your intended use case comply with the Terms and Use Policy.": "您有责任确保您预期用例的安全设置符合条款和使用政策。",
    "Speech to text": "语音转文字",
    "Add files": "添加文件",
    "Upload Files": "上传文件",
    "Insert files (text, images, audio, video) into your prompt.": "将文件（文本、图像、音频、视频）插入到您的提示词中。",

    // V18 - 应用库与FAQ
    "What is Build in AI Studio?": "什么是 AI Studio 中的 Build？",
    "An environment for building with the Gemini SDK. Go from prompt to working project. Transition to code for deeper refinement and customization. Explore and fork demos showcasing the API's full potential.": "一个使用 Gemini SDK 进行构建的环境。从提示词到工作项目。过渡到代码以进行更深层次的细化和定制。探索和复刻展示 API 全部潜力的演示。",
    "How do apps run?": "应用如何运行？",
    "Apps run in your browser in a sandboxed iframe. There is no server-side component. To run an app that requires additional services such as a backend, consider using Google Cloud Run.": "应用在浏览器的沙盒 iframe 中运行。没有服务器端组件。要运行需要后端等附加服务的应用，请考虑使用 Google Cloud Run。",
    "Is my API key exposed when sharing apps?": "分享应用时会暴露我的 API 密钥吗？",
    "Don't use a real API key in your app. Use a placeholder value instead. process.env.GEMINI_API_KEY is set to a placeholder value that you can use. When another user uses your app, AI Studio proxies the calls to the Gemini API, replacing the placeholder value with the user's (not your) API key. Do not use a real API key in your app, as the code is visible to anyone who can view your app.": "不要在您的应用中使用真实的 API 密钥。请改用占位符值。process.env.GEMINI_API_KEY 已设置为您可以使用的占位符值。当其他用户使用您的应用时，AI Studio 会代理对 Gemini API 的调用，将占位符值替换为用户自己的（而不是您的）API 密钥。不要在您的应用中使用真实的 API 密钥，因为任何查看您应用的人都可以看到代码。",
    "Who can see my apps?": "谁可以看到我的应用？",
    "AI Studio uses Google Drive to store apps, and inherits its permissions model. By default your app is private. You can share your app with other users to let them use it. Users you share your app with can see its code and fork it for their own purposes. If you share your app with edit permission, the other users can edit the code of your app.": "AI Studio 使用 Google Drive 存储应用，并继承其权限模型。默认情况下，您的应用是私有的。您可以与其他用户分享您的应用以供他们使用。您分享应用的用户可以看到其代码并将其复刻用于自己的目的。如果您以编辑权限分享应用，其他用户可以编辑您应用的代码。",
    "Can I run apps outside of AI Studio?": "我可以在 AI Studio 之外运行应用吗？",
    "You can deploy your app to Cloud Run from AI Studio, which will give your app a public URL. It's deployed along with a proxy server that will keep your API key private, however the deployed app will use your API key for all users' Gemini API calls. You can also download your app as a zip file. If you replace the placeholder value with a real API key, it should still work. But you should not deploy your app like this, as any user will be able to see the API key. To make an app run securely outside of AI Studio requires moving some logic server-side, so the API key is no longer exposed.": "您可以从 AI Studio 将应用部署到 Cloud Run，这将为您的应用提供一个公共 URL。它与一个代理服务器一起部署，该服务器将使您的 API 密钥保持私密，但是部署的应用将使用您的 API 密钥进行所有用户的 Gemini API 调用。您也可以将应用下载为 zip 文件。如果您将占位符值替换为真实的 API 密钥，它应该仍然可以工作。但是您不应该这样部署您的应用，因为任何用户都可以看到 API 密钥。要使应用在 AI Studio 之外安全运行，需要将一些逻辑移至服务器端，以便不再暴露 API 密钥。",
    "Can I develop apps locally with my own tools and then share them here?": "我可以用自己的工具在本地开发应用然后在这里分享吗？",
    "This functionality is not yet available. We're excited to support more use-cases for apps in the future. Please consider giving us feedback if you have anything specific in mind.": "此功能尚未推出。我们很高兴在未来支持更多应用用例。如果您有任何具体的想法，请考虑给我们反馈。",
    "Can I use Next.js, Svelte, Vue or Astro?": "我可以使用 Next.js、Svelte、Vue 或 Astro 吗？",
    "At the moment these libraries are not supported, because of limited support for compiler plug-ins.": "目前不支持这些库，因为对编译器插件的支持有限。",
    "How can I manage npm packages and their versions?": "如何管理 npm 包及其版本？",
    "The import map in index.html instead of a package.json file to manage code packages. Our CDN, aistudiocdn.com, automatically finds and serves these packages for you using esm.sh, which handles versioning and dependencies. Note that some older packages not designed as ES modules (ESM) may not work correctly.": "使用 index.html 中的 import map 而不是 package.json 文件来管理代码包。我们的 CDN aistudiocdn.com 使用 esm.sh 自动为您查找并提供这些包，esm.sh 处理版本控制和依赖关系。请注意，一些未设计为 ES 模块 (ESM) 的旧包可能无法正常工作。",
    "How can I access the microphone, webcam, and other Navigator APIs?": "如何访问麦克风、网络摄像头和其他 Navigator API？",
    "To ensure that viewers are aware of an app's usage of their webcam or other devices, we require an extra acknowledgement before the app can access these Navigator APIs. App creators can add these permission requests to their app's metadata.json file. For example,": "为了确保查看者了解应用对其网络摄像头或其他设备的使用情况，我们在应用访问这些 Navigator API 之前需要额外的确认。应用创建者可以将这些权限请求添加到其应用的 metadata.json 文件中。例如，",
    "To ensure that viewers are aware of an app’s usage of their webcam or other devices, we require an extra acknowledgement before the app can access these Navigator APIs. App creators can add these permission requests to their app’s metadata.json file. For example,": "为了确保查看者了解应用对其网络摄像头或其他设备的使用情况，我们在应用访问这些 Navigator API 之前需要额外的确认。应用创建者可以将这些权限请求添加到其应用的 metadata.json 文件中。例如，",
    "Supported values for requestFramePermissions are a subset of the standard policy-controlled features.": "requestFramePermissions 的支持值是标准策略控制功能的子集。",
    "How can I use GitHub with my apps?": "如何在我的应用中使用 GitHub？",
    "AI Studio's GitHub integration allows you to create a repository for your work and commit your latest changes. We do not currently support pulling remote changes.": "AI Studio 的 GitHub 集成允许您为您的工作创建一个存储库并提交您的最新更改。我们目前不支持拉取远程更改。",
    "What terms apply to apps in the app gallery in AI Studio?": "哪些条款适用于 AI Studio 应用库中的应用？",
    "The Gemini API Additional Terms of Service apply to use of apps featured in the app gallery in AI Studio, unless otherwise noted.": "除非另有说明，否则 Gemini API 附加服务条款适用于 AI Studio 应用库中精选应用的使用。",
    
    "Created by you": "由您创建",
    "Created by others": "由他人创建",
    "Explore the gallery": "浏览示例库",
    "Create a new app": "新建应用",
    "Search for an app": "搜索应用",
    "Pin Veo Studio": "固定 Veo Studio",
    "Remove app": "移除应用",
    "code": "代码",

    // V20 - API 日志与数据集
    "Gemini API Billing": "Gemini API 计费",
    "Set up billing to enable Gemini API logging": "设置计费以启用 Gemini API 日志记录",
    "You can then view your Gemini API history and create datasets.": "然后您可以查看您的 Gemini API 历史记录并创建数据集。",
    "Logs containing videos or PDFs are currently not supported.": "目前不支持包含视频或 PDF 的日志。",
    "Gemini API Logs and Datasets": "Gemini API 日志和数据集",
    "Project": "项目",
    "Dataset": "数据集",
    "All datasets": "所有数据集",
    "All models": "所有模型",
    "All time": "全部时间",
    "Status": "状态",
    "Rating": "评分",

    // V21 - 媒体资源与图像生成限制
    "Insert assets such as images, videos, folders, files, or audio": "插入资产，例如图像、视频、文件夹、文件或音频",
    "Image generation with Imagen in AI Studio has limited free quota for testing. To generate images beyond this limit or integrate Imagen into your projects, please use the Gemini API.": "AI Studio 中使用 Imagen 生成图像的免费测试配额有限。要生成超出此限制的图像或将 Imagen 集成到您的项目中，请使用 Gemini API。",
    "The output resolution of the generated media": "生成媒体的输出分辨率",
    "Output resolution": "输出分辨率",
    "Number of images to be returned": "要返回的图像数量",
    "Number of results": "结果数量",

    // V22 - 应用构建器与预览
    "Add new features or easily modify this app with a prompt or the suggestions below": "通过提示词或以下建议添加新功能或轻松修改此应用",
    "Code assistant": "代码助手",
    "Copy app": "复制应用",
    "Download app": "下载应用",
    "Share app": "分享应用",
    "Switch to API Key for your app": "切换到您应用的 API 密钥",
    "Device": "设备",
    "Select device preview": "选择设备预览",
    "Reload the app": "重新加载应用",
    "Make the app fullscreen": "全屏显示应用",
    "Show code editor": "显示代码编辑器",
    "Hide preview": "隐藏预览",
    "Edit app name and description": "编辑应用名称和描述",
    "Reset the conversation": "重置对话",
    "Annotate app": "批注应用",
    "Rename app": "重命名应用",
    "You can change the display name and description of your app.": "您可以更改应用的显示名称和描述。",
    "Name": "名称",
    "Description": "描述",
    "Sample from Imagen models to generate images": "Imagen 模型生成图像的示例",
    "Preview": "预览",
    "Code": "代码",
    "Fullscreen": "全屏",
    "Current screen size": "当前屏幕尺寸",
    "Mobile": "手机",
    "Tablet": "平板",

    // V23 - 标注与编辑工具
    "Add comment": "添加评论",
    "Add a comment": "添加评论",
    "Add arrow": "添加箭头",
    "Add rectangle": "添加矩形",
    "Add text": "添加文本",
    "Start sketching": "开始绘图",
    "Select color": "选择颜色",
    "Undo": "撤销",
    "Apply the edits shown in the screenshot(s).": "应用截图显示及其编辑内容。",
    "Remove file": "移除文件",
    "Add to chat": "添加到对话",
    "No changes to add to chat": "没有更改可添加到对话",

    // V24 - GitHub 与部署
    "Fill out the information below to create your repo and make your first commit": "填写以下信息以创建您的仓库并进行首次提交",
    "Repository name": "仓库名称",
    "Repository description": "仓库描述",
    "Visibility": "可见性",
    "Private": "私有",
    "Only you can access this repo on GitHub.com": "仅您可以在 GitHub.com 上访问此仓库",
    "Public": "公开",
    "This means your GitHub repo will be discoverable by everyone on GitHub.com": "这意味着您的 GitHub 仓库将被 GitHub.com 上的所有人发现",
    "Open version history": "打开版本历史",
    "Restore app to previous version": "将应用恢复到先前版本",
    "Make a new copy": "创建新副本",
    "Deploy app on Google Cloud": "在 Google Cloud 上部署应用",
    "Deploy your app as a Cloud Run Service. The app will be accessible via a public URL. Your API key will not be exposed in the app, but will be used by the application.": "将您的应用部署为 Cloud Run 服务。该应用将通过公共 URL 访问。您的 API 密钥不会在应用中暴露，但会被应用程序使用。",
    "Select a Google Cloud project to proceed:": "选择一个 Google Cloud 项目以继续：",
    "Select a Cloud Project": "选择 Cloud 项目",
    "You must select a project to proceed": "您必须选择一个项目以继续",
    "Deploy app": "部署应用",
    "Share": "分享",
    "Advanced share permissions": "高级分享权限",
    "When you share an app with another user, they will be able to see all of its source code. Ensure that your code does not contain any sensitive information, such as API keys.": "当您与其他用户分享应用时，他们将能够看到其所有源代码。请确保您的代码不包含任何敏感信息，例如 API 密钥。",
    "Suggestions": "建议",
    "Publish your app": "发布您的应用",
    "Default to fullscreen": "默认为全屏",
    
    // V25 - 更多选项与历史记录
    "Collapse prompts history": "折叠提示历史",
    "More options": "更多选项",
    "Lets you define functions that Gemini can call": "允许您定义 Gemini 可以调用的函数",
    "This tool is not compatible with the current active tools.": "此工具与当前活动工具不兼容。",
    "Get SDK code to generate an image": "获取生成图像的 SDK 代码",
    "There is no billing currently set up for this project Gemini API.": "当前项目 Gemini API 未设置计费。",
    "View all history": "查看所有历史",
    "Get started": "开始使用",
};

// 需要排除的 CSS 选择器
const excludeSelectors = [
    'textarea',
    'input',
    '[contenteditable="true"]',
    'pre',
    'code',
    '.message-content',
    '.chat-history',
    'script',
    'style',
    'noscript'
];

// 翻译文本
function translateText(text) {
    const trimmed = text.trim();
    if (!trimmed) return null;
    
    // 1. 优先精确匹配
    if (i18n[trimmed]) return i18n[trimmed];

    // 1.1 尝试标准化匹配 (去除多余换行符和空格)
    // 解决 tooltip 中因为自动换行导致无法匹配字典的问题
    const normalized = trimmed.replace(/\s+/g, ' ');
    if (i18n[normalized]) return i18n[normalized];

    // 2. 处理部分包含的情况
    if (trimmed.startsWith("Knowledge cut off:")) {
        return trimmed.replace("Knowledge cut off:", "知识截止:");
    }
    if (trimmed.startsWith("Points to ")) {
        return trimmed.replace("Points to ", "指向 ");
    }
    
    // 3. 处理价格和通用模式
    if (trimmed.includes("Input: $") && trimmed.includes("Output: $")) {
        return trimmed
            .replace("Input:", "输入:")
            .replace("Output:", "输出:")
            .replace("tokens", "Token")
            .replace("All context lengths", "所有上下文长度")
            .replace("Image (*Output per image)", "图像 (*每张图像输出)");
    }

    return null;
}

// 翻译元素属性 (处理 Tooltip 和 Placeholder)
function translateAttributes(element) {
    ['title', 'aria-label', 'placeholder', 'data-tooltip'].forEach(attr => {
        const val = element.getAttribute(attr);
        if (val) {
            const translated = translateText(val);
            if (translated) {
                element.setAttribute(attr, translated);
            }
        }
    });
}

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// 遍历并翻译
function traverseAndTranslate(root) {
    // 1. 处理文本节点
    const walker = document.createTreeWalker(
        root,
        NodeFilter.SHOW_TEXT,
        {
            acceptNode: function(node) {
                const parent = node.parentElement;
                if (!parent) return NodeFilter.FILTER_REJECT;
                
                if (excludeSelectors.some(selector => {
                    try { return parent.matches(selector) || parent.closest(selector); } 
                    catch(e) { return false; }
                })) {
                    return NodeFilter.FILTER_REJECT;
                }

                const text = node.nodeValue.trim();
                if (text) {
                    if (i18n[text]) return NodeFilter.FILTER_ACCEPT;
                    // 增加标准化后的检查
                    const normalized = text.replace(/\s+/g, ' ');
                    if (i18n[normalized]) return NodeFilter.FILTER_ACCEPT;

                    if (text.startsWith("Knowledge cut off:")) return NodeFilter.FILTER_ACCEPT;
                    if (text.startsWith("Points to ")) return NodeFilter.FILTER_ACCEPT;
                    if (text.includes("Input: $") && text.includes("Output: $")) return NodeFilter.FILTER_ACCEPT;
                }
                
                return NodeFilter.FILTER_SKIP;
            }
        }
    );

    let node;
    while (node = walker.nextNode()) {
        const translation = translateText(node.nodeValue);
        if (translation) {
            // 如果是标准化匹配，可能需要保留原有格式不太可能，直接替换
            // 注意：这里我们简单地将整个节点值替换为翻译，这对于纯文本节点是安全的
            node.nodeValue = translation;
        }
    }

    // 2. 处理属性 (Tooltip等)
    // 使用 querySelectorAll 选取可能包含 tooltip 的元素
    // 为了性能，我们只选特定元素，或者全选 '*'
    const elements = root.querySelectorAll ? root.querySelectorAll('*') : [];
    elements.forEach(el => translateAttributes(el));
    if (root.nodeType === Node.ELEMENT_NODE) translateAttributes(root);
}

// 批量处理函数
const handleMutations = debounce(() => {
    if (window.requestIdleCallback) {
        requestIdleCallback(() => traverseAndTranslate(document.body));
    } else {
        setTimeout(() => traverseAndTranslate(document.body), 500);
    }
}, 200);

// 初始化
function init() {
    console.log('Google AI Studio 中文助手已加载');
    
    traverseAndTranslate(document.body);

    const observer = new MutationObserver((mutations) => {
        let shouldUpdate = false;
        for (const mutation of mutations) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                shouldUpdate = true;
                break;
            }
        }
        
        if (shouldUpdate) {
            handleMutations();
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: false
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

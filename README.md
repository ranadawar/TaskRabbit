<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Expo React Native App Setup</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f7f7f7;
            color: #333;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        h1 {
            color: #007BFF;
        }
        ol {
            list-style-type: decimal;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Expo React Native App Setup</h1>
        <p>Welcome to the Expo React Native App setup guide! In just a few simple steps, you'll have your Expo React Native project up and running on your computer and mobile device. Let's get started!</p>

        <h2>Prerequisites</h2>
        <ol>
            <li><strong>Node.js:</strong> You need Node.js installed on your computer. You can download and install it from the official website: <a href="https://nodejs.org/">Node.js Download</a>.</li>
            <li><strong>Expo Client:</strong> You will also need the Expo Client app installed on your iPhone or iOS device. You can find it on the <a href="https://apps.apple.com/us/app/expo-go/id982107779">App Store</a>.</li>
            <li><strong>Expo Account:</strong> If you haven't already, create an Expo account by visiting the <a href="https://expo.dev/signup">Expo website</a>. This account is used to manage your projects and provide additional features.</li>
            <li><strong>Visual Studio Code (VSCode):</strong> Download and install Visual Studio Code from the official website: <a href="https://code.visualstudio.com/">VSCode Download</a>. Additionally, make sure to install the following extensions within VSCode:
                <ul>
                    <li>React Native Tools</li>
                    <li>ESLint</li>
                    <li>Prettier - Code formatter</li>
                </ul>
            </li>
        </ol>

        <h2>Getting Started</h2>
        <ol>
            <li><strong>Login to Expo Account:</strong> Open your Expo Client app on your iOS device and log in using your Expo account credentials.</li>
            <li><strong>Login to Expo Account in VSCode:</strong>
                <ul>
                    <li>Open Visual Studio Code.</li>
                    <li>Open the terminal within VSCode.</li>
                    <li>Run the following command and follow the prompts to log in:
                        <pre><code>expo login</code></pre>
                    </li>
                </ul>
            </li>
            <li><strong>Create a Project Directory:</strong>
                <ul>
                    <li>Create a new folder on your desktop for your project.</li>
                    <li>Open this folder using Visual Studio Code. You can do this by navigating to <code>File &gt; Open Folder</code> in VSCode.</li>
                </ul>
            </li>
            <li><strong>Install Dependencies:</strong>
                <ul>
                    <li>In the VSCode terminal, navigate to your project folder using the <code>cd</code> command, e.g., <code>cd path/to/your/project</code>.</li>
                    <li>Install the project dependencies by running the following command:
                        <pre><code>npm install</code></pre>
                    </li>
                </ul>
            </li>
            <li><strong>Start Your Project:</strong>
                <ul>
                    <li>After the installation is complete, start your Expo React Native project with the following command:
                        <pre><code>npm start</code></pre>
                    </li>
                    <li>This will initiate the Expo development server.</li>
                </ul>
            </li>
            <li><strong>Connect to Your Mobile Device:</strong>
                <ul>
                    <li>Open the Expo Client app on your iOS device.</li>
                    <li>Scan the QR code displayed in the terminal with the Expo Client app.</li>
                    <li>Your app will load on your device.</li>
                </ul>
            </li>
        </ol>

        <p>Congratulations! You've successfully set up your Expo React Native project, and you can now begin developing your mobile application.</p>

        <p>Feel free to explore the Expo documentation for further guidance and to unleash the full potential of your React Native app: <a href="https://docs.expo.dev/">Expo Documentation</a>.</p>

        <p>If you have any questions or encounter issues, don't hesitate to reach out to the Expo community for support. Happy coding! 🚀</p>
    </div>

</body>
</html>

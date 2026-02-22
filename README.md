<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>MusicGPT Clone</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 900px; margin: auto; padding: 20px;">

  <h1>🎵 MusicGPT Assessment</h1>

  <p>
    An AI-powered music generation web app inspired by MusicGPT.
    Generate melodies, beats, and musical ideas instantly using natural language prompts.
  </p>

  <hr />

  <h2>🚀 Features</h2>
  <ul>
    <li>🎼 Generate music from text prompts</li>
    <li>🎧 Instant audio preview</li>
    <li>📥 Download generated tracks</li>
    <li>✨ Animated modern UI (Framer Motion)</li>
    <li>📱 Rresponsive design</li>
    <li>🎧 Integrated Music Player</li>
  </ul>

  <hr />

  <h2>🛠️ Tech Stack</h2>
  <ul>
    <li><strong>Frontend:</strong> Next.js 16 (App Router)</li>
    <li><strong>Styling:</strong> Tailwind CSS</li>
    <li><strong>Animations:</strong> Framer Motion/CSS</li>
    <li><strong>Icons:</strong> Lucide React</li>
    <li><strong>Backend:</strong> NextJS API Routes</li>
    <li><strong>State Management:</strong>Zustland</li>
  <li><strong>WebSocket:</strong> Custom WebSocket Server (Node.js) -> https://github.com/Sanjay4715/musicgpt-assessment-socket</li>
  </ul>

  <hr />

  <h2>📦 Installation</h2>

  <h3>Clone the repository:</h3>
  <pre><code>git clone https://github.com/Sanjay4715/musicgpt-assessment
cd musicgpt-assessment</code></pre>

  <h3>Install dependencies:</h3>
  <pre><code>npm install
# or
yarn install
# or
pnpm install</code></pre>

  <hr />

  <h2>🧪 Run Locally</h2>

  <pre><code>npm run dev</code></pre>

  <p>Visit:</p>

  <pre><code>http://localhost:3000</code></pre>

  <hr />

  <h2>🏗️ Project Structure</h2>

<pre><code>musicgpt-assessment/
│
├── app/                         # Next.js App Router
│   ├── api/                     # API routes
│   │   └── presetprompts/       # Preset Prompts Get
│   └── layout.tsx               # Root layout
│
├── components/                  # Reusable UI components
│   ├── Sidebar/
│   ├── MusicPlayer/
│   ├── ProfileDropdown/
│   └── PromptSection/
│
├── lib/                         # Core logic
│   ├── api.ts                   # API communication
│   └── socket.ts                # WebSocket client logic
│
├── assets/                      # Static assets
├── public/                      # Public files
└── styles/                      # Global styles
</code></pre>

<hr />
</code></pre>

<hr />

  <hr />

  <h2>🧠 How It Works</h2>

  <ol>
    <li>User enters a text prompt (e.g., “Lo-fi chill beat with soft piano”).</li>
    <li>The prompt is then submitted to the server.</li>
    <li>Web sockets then activates providing updated of the music being created.</li>
    <li>User can then play the music or download the track.</li>
  </ol>

  <hr />

  <h2>📸 Screenshots</h2>

  <pre><code>
    &lt;img src="./public/CreatePageDesktop.png" alt="CreatePageDesktop" width="100%" /&gt;
    &lt;img src="./public/MusicPlayerDesktop.png" alt="MusicPlayerDesktop" width="100%" /&gt;
    &lt;img src="./public/GenerationProcess.png" alt="GenerationProcess" width="100%" /&gt;
    &lt;img src="./public/ExpandedMobileMusicPlayer.png" alt="ExpandedMobileMusicPlayer" width="100%" /&gt;
    &lt;img src="./public/Home.png" alt="Home" width="100%" /&gt;
    &lt;img src="./public/MobileMusicPlayer.png" alt="MobileMusicPlayer" width="100%" /&gt;
</code></pre>

  <hr />

  <h2>🧑‍💻 Author</h2>
  <p>Built with ❤️ by Sanjaya Rai</p>

  <hr />

</body>
</html>

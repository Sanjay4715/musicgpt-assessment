<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
use following steps to install the project and run it.
1. Clone the repository
    ```bash
    git clone https://github.com/Sanjay4715/musicgpt-assessment
    ```

2. Change the directory
    ```bash
      cd musicgpt-assessment
    ```

3. Node version being used is <code></code>

4. Install dependencies:
    ```bash
      npm install
    ```

5. Run locally using
    ```bash
      npm run dev
    ```

6. Visit:
    ```bash
      http://localhost:3000
    ```
  <hr/>

## What this project has?

- The project consists of two main pages:
  - **Home Page**
    - A prompt input section where users can enter their desired prompt.
    - Preset prompts fetched from the MusicGPT live API.
    - When a prompt category is clicked:
      - A popper opens displaying a list of related preset prompts.
      - Selecting a prompt automatically fills it into the prompt input section.
      - The popper contains two action buttons:
        - **Refresh** – Reloads the preset prompt list inside the popper.
        - **Close** – Closes the popper.
      - Selecting another prompt category automatically closes the currently open popper and opens the newly selected one.

  - **Create Page**
  - Includes a prompt input section where users can enter their desired prompt.
  - Preset prompts are fetched from the MusicGPT live API.
  - The above two sections function the same as on the Home Page.
  - **Recent Generations Section**: Displays different types of generation states:
    - **Successfully Generated Item** – Songs that have been successfully generated, either previously or just now.
    - **Invalid Prompt Item** – Items created when an invalid prompt is submitted.
    - **Server Busy Item** – Items shown when the server is temporarily unavailable or overloaded.
    - **Processing Item** – Songs that are currently being generated.

## The components being created on the project are:

1. **Header**

- **Desktop Header**: Desktop Header has following components.
  - **Credit notification card**: This card shows the credits left for the user. (Static)
  - **Profile Icon**: This icon shows the initial name of the user inside a circle icon. The badge is shown when new songs/audios are generated.

- **Mobile Header**: Mobile Header has following components:
  - **Sticky Header**: The header will stick on the top of the page.
  - **Logo**: Logo of the project.
  - **Navigation Button (Top Left)** – Opens a drawer containing the navigation menu.

2. **Sidebar**: Both the desktop and mobile sidebar has same navigation menu. The only difference is desktop sidebar activates for screen width of more than 960px and mobile sidebar activates for screen width less than 960px. The mobile sidebar can be opened or closed from the above mentioned <b>Navigation Button</b> and desktop sidebar remains fixed on the pages.

- **Main Navigation**:
  - **Home** – Redirects users to the main page. (Functioning)
  - **Create** – Allows users to generate new content and see recent generations. (Functioning)
  - **Explore** – (Not functioning)

- **Library Section**
  - **Profile** – Access and manage the user profile. (Not Functioning)
  - **Liked** – View previously liked items. (Not Functioning)
  - **New Playlist** – Create a new playlist. (Not Functioning)

- **Notification Card**: Static notification card showing modal notification.
- **Footer Section**: These has all static content like Pricing, Affiliate, API, About, Terms, Privacy, and Language Selector

3. **Profile Dropdown**

- **Desktop Profile Dropdown**: This profile dropdown will be activated when we click on the profile button on the top right corner. Here a small card will be popped up when button is clicked it has Full name of the user, username of the user, how many credits they have left with them, Also the regenerated items are also shown on the popup.

- **Mobile Profile Dropdown**: This has the same content as the desktop profile dropdown the only difference is on the width. While desktop only open the popup, this takes the whole screen size.

4. **Generated Items**
   These are the items which are visible on the create page recent generation section and on the profile dropdown secttion. There are various types of items.

- **Successfully Generated Items**:
  - **Desktop**: This item has name of the song, prompt used for creating the song, image thumnail of the song. And when we hover on the item it gives us the options with icon like, dislike, version of the song, download, and more icon. Same thing can be seen on the profile dropdown. On hovering the icon we can also see play icon the image thumbnail which allow us the song to be played. And while song is being played on the particular area audio wave can be seen.
  - **Mobile**: The content like image thumbnail, title and prompt are same as desktop the only difference is on the options shown which are version, download and more icon.

- **Items being generated**:
  There is no difference on desktop and mobile section. We can see the title of the song being generated and on the far right side we can see the version of song being used. Instead of thumbnail of image it will show the percentage of song being created and also on the background we can see the transition of progress. After successful creation of the song we will see the badge with ripple effect on over the image thumbnail.

- **Invalid Prompt Item**
  This will show the emoji of crying face in place of image thumbnail and it will show the warning messages. Also there are two buttons Retry (non-functioning) and Copy Prompt (functioning)

- **Error Items**
  This will show the error message with retry (functioning) on the item.

5. **Music Player**: The music player will be activated on the bottom of the page when we clicked on the generated items from the recent genereation section from create page or from the profile dropdown.

- **Desktop**: The desktop version of the music player has following components:
  - **Thumbnail**: Thumbnail of the image when hovering shows the edit icon. (Not functioning)
  - **Title**: Title of the song when clicked on title it allows us to edit the name of the song. (Functionable but cannot edit)
  - **username**: username of the user.
  - **Music COntrols**: The controls present are shuffle, previous, play/pause, next, repeat. Only play/pause is functionable.
  - **FavoriteShare**: The next controls are favorite and share buttons. (Not functionable)
  - **Music Timeline**: The music timeline is visible when we play the song and it can be dragged or clicked on specific timestamp.
  - **More controls**: The controls are activated when we hover the music player. The options are more options (not functionable only icon), queuue (not functioning only icon), volume control (completely functioning) -> can mute / increase /decrease volume, expanded area button (functioning), Close button (functioning) which closes the music player.
  - **Expanded Music Player**: This will be activated when we click on the expanded button it has two sections one is comment section (not functioning, static data) and lyrics section (dynamic lyrics as per the song selected).

- **Mobile**: The mobile version of the music player has following components:
  - **Thumbnail and Title**: This will show the image thumbnail of the song and name of the song and username of the user.
  - **Timestamp**: This is the timestamp which will show the current timestamp of the song and total duration of the song on the format 00:10/05:20. This will be visible on mobile section and only between the screen width 430px to 959px.
  - **Music COntrols**: The control is limited on the mobile section. It only has previous, play/pause, and next button. Only play/pause is functionable.
  - **Music TImeline**: This is same as the desktop version.
  - **Close button**: This button will close the music player.
  - **Button to open drawer**: The button is available to open the music player on full screen on mobile screen.
  - **Drawer Music Player**: These has other more componets:
    - **Thumbnail, Title, Username**: This is same as above.
    - **Playlist Button**: This is only icon not functionable.
    - **More Options**: This is only icon not functioning.
    - **Tabs**: The tabs consists of two sections:
      - **Lyrics**: This will show prompt and lyrcis of the songs dynamically.
      - **Comments**: The comments are shown statically on this section.
    - **Footer**: This has the timeline of the music, shuffle icon (non-functionable), previous, play/pause (fully functioning),next song ,repeat (not-functioning).

## API

NextJS API is being created and mock data are passed through the api. These can be found under the folder src/api/...

1. **Get Audio**: The url is <code>api/audio</code> and it is used for fetching out the previously generated list of songs.
2. **Get unprocessed**: The url is <code>api/unprocessed</code> and it is used for fetching out the unprocessed list of requests. For now we are passing invalid prompt mock error data only.
3. **Get Preset Prompt**: The internal url is <code>api/prompt</code> and for this we have used live api of musicGPT which is <code>https://liveapi.musicgpt.com/prompt/front/get-prompt-presets</code>. Incase the api fails we will sent out the list of mock prompt data.
4. **Socket**: We then use socket for submitting prompt, getting the generated list of data with their progress and status. The code is written separately on NodeJS (the github url is <code>https://github.com/Sanjay4715/musicgpt-assessment-socket</code>) and it is currently being hosted on <code>https://musicgpt-assessment-socket-production.up.railway.app</code>. The events that are being used for communication are <code>submitPrompt</code> (for submitting the prompt), <code>statusUpdate</code> (to get the latest status of the requested generated tasks), <code>finalData</code> (for getting the generarated song), <code>serverBusy</code>(this events gets fired when there is already 5 requests requested and more are requested), <code>getStatus</code> (to get the list of all the tasks).

## State Management

Zustland is being used for state management. The store can be found under src/store folder. We have created multiple stores.

1. Common Store: We store the common data here like profile dropdown status.
2. Generated List Store: We store the previously generated list here which was being fetched from api/audio and api/processed.
3. Preset Prompt Store: We store the preset prompt that we get from api/prompts on this store.
4. Music Player Store: We store the music being played, current time stamp, if music player is active or not kind of state here.
5. Live Generation Store: We store the live status of requested songs being generated here.

## Let's Use It

1. The default landing page is the **Home Page**, accessible at  
   <code>https://baseUrl/</code>.  
   Here, you will find the prompt section where you can either:
   - Enter a custom prompt, or
   - Select from the available preset prompts.

2. After selecting a preset prompt or entering a custom one, click **Submit**.
   - The prompt is sent through a socket connection, and the app immediately starts listening for the latest generation status in real time.
   - Once submitted (or when pressing Enter), the profile dropdown opens automatically, allowing you to monitor the live generation status.
   - You can either stay on the Home Page or navigate to the **Create Page** from the sidebar.
   - On the Create Page, the currently generating item will appear at the top of the list.
   - You can open the profile dropdown at any time to verify that the live generation status and the list items are synchronized.

3. After successful creation of songs, click on it from the profile dropdown or create page recent generation section.

- Music player will be opened.
- If we hover on the list we can see play icon on the image.
  - If we click play icon from the hovering state directly, it will open the music player and starts playing it
  - If we click on the item then music player will open on pause status and we can play the music
- While music is being played, the audio waves can be seen on the image thumbnail.
- If we hover from the while being on the play status, the pause icon will be seen on the image and from there we can pause the song.

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

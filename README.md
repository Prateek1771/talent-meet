# Talent-Meet

Talent-Meet is a web platform designed to streamline technical interviews by enabling interviewers to conduct real-time coding assessments, evaluate candidates, and provide feedback efficiently.

## 🚀 Features

- **Real-time Meetings**: Interviewers can create and share meeting links with candidates.
- **Live Coding Assessments**: Candidates can solve coding problems and complete assignments within the platform.
- **Screen Sharing & Recording**: Candidates can share their screens, and interviewers can review recordings.
- **Feedback & Evaluation**: Interviewers can provide structured feedback based on candidate performance.
- **Authentication & Security**: Integrated **Clerk** for secure user authentication.
- **Real-time Collaboration**: Utilized **Convex** for instant database updates.
- **Seamless Video Conferencing**: Integrated **Stream** for high-quality video calls.

## 🛠 Tech Stack

- **Frontend**: Next.js, Tailwind CSS, Shadcn UI, TypeScript
- **Backend**: Convex (Real-time Database)
- **Authentication**: Clerk
- **Video Conferencing**: Stream

### Project Demo: https://talent-meet.vercel.app

## 📂 Project Structure

```
Talent-Meet/
│── src/
│   ├── components/  # UI components
│   ├── pages/       # Next.js pages
│   ├── hooks/       # Custom hooks
│   ├── lib/         # Utilities & helpers
│   ├── styles/      # Global styles
│── public/          # Static assets
│── convex/          # Database & API logic
│── README.md        # Project documentation
│── package.json     # Dependencies & scripts
```

## 🔧 Installation & Setup

1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-username/Talent-Meet.git
   cd Talent-Meet
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env.local` file and configure the necessary API keys:
   ```env
   NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_api_key
   NEXT_PUBLIC_CONVEX_URL=your_convex_url
   NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
   ```

4. **Run the Development Server**
   ```sh
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌍 Deployment

You can deploy this project using platforms like **Vercel**:
```sh
vercel
```

## 📌 Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue.

## 📜 License

This project is licensed under the **MIT License**.

---


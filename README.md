<span style="font-size: 2em; font-family: 'JetBrains Mono', monospace;">
  <h1 align="center">Type Speed Analyser</h1>
</span>

## 📜 Description

A typing speed test application built with Next.js and Tailwind CSS. This application allows users to test their typing speed by typing a given text and calculates the words per minute (WPM) based on the time taken to complete the test. During the test after 30 seconds a distraction will appear to test the user's focus. The application also stores the typing test results in a database (Supabase) for future reference.

## ⚙️Core features

- Words per minute (WPM) calculation
- Timer
- Text highlighting for correct and incorrect characters
- Distraction after 30 seconds
- Database connection (Supabase) to store typing test results

## 📦 Tech stack

- Next.js
- Tailwind CSS
- Supabase

## Folder structure 📂

```bash
.
├── src/
│   └── app/
│       ├── components/                 # Application components
│       │   ├── logic/                  # logic components
│       │   │   ├── TextGenerator.jsx   # Generates text for typing
│       │   │   ├── Timer.jsx           # Timer logic
│       │   │   └── TypingValidator.jsx # Validates typing accuracy
│       │   ├── ui/                     # User interface components
│       │   │   └── Button.jsx          # Reusable button component
│       └── lib/                        # Utility functions
│           └──  supabaseUtils.js        # Database interaction
├── .gitignore                          # Files and folders to ignore in git
├── package.json                        # Node.js dependencies and scripts
├── README.md                           # Project documentation
└── LICENSE                             # License file
```

## 🚀 Getting Started

### Prerequisites

make sure you have the following installed on your system:

- Node.js(V14 or higher)
- npm(V6 or higher)
- Git
- Supabase account

### Installation

1. Clone the repository

```bash
git clone https://github.com/EHB-MCT/assignment-2-mikolajbuelens.git
```

2. Navigate to the project directory

```bash
cd assignment-2-mikolajbuelens
```

3. Install the dependencies

```bash
npm install
```

4. Rename the `.env.local.example` file to `.env.local` and fill in the Supabase credentials to store the typing test results.

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

5. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📸 Screenshots

<!-- screen shot from \src\app\assets\images\screenshots\screenshot-1.png -->

![screenshot-1](/type-speed-analyser/src/app/assets/images/screenshots/screenshot-1.png)
![screenshot-2](/type-speed-analyser/src/app/assets/images/screenshots/screenshot-2.png)

## 📚 Resources

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Supabase](https://supabase.io/)
- [txtgen](https://www.npmjs.com/package/txtgen)
- [Semantic Versioning](https://semver.org/)
- [ChatGPT for best approach when making word per minute counter](https://chatgpt.com/share/677b0134-c560-8008-b679-9ad29f22b987) -[Next.js best practices](https://alerty.ai/blog/next-js-best-practices)
- [data fetching patterns and best practices](https://nextjs.org/docs/14/app/building-your-application/data-fetching/patterns)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🧑‍💻 Author

- Mikolaj Buelens

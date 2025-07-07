# ⚛️ React Quiz App

A high-performance, modular quiz application built with **React**, designed to leverage **computational efficiency**, **minimal state usage**, and **controlled rendering logic**.

---

## 📌 Overview

This app presents a timed multiple-choice quiz with the ability to answer or skip questions. Upon completion, users see a summary of correct, incorrect, and skipped answers, both in list form and as percentages.

---

## 🧠 Key Concepts & Architecture

### ✅ Minimal `useState` Usage

State is only used **where necessary**:

- `Quiz` tracks only the user's answers via `useState([])`.
- The active question is derived from `userAnswers.length` — no need for redundant question index state.
- Inside `Question`, only local answer state is tracked to handle transitions between "selected", "correct", or "wrong".

---

### 🧩 Modular & Isolated Components

Each part of the app is isolated for clarity and efficiency:

| Component       | Responsibility                                                |
|----------------|----------------------------------------------------------------|
| `Quiz`          | Main controller – tracks progress and routes to summary.       |
| `Question`      | Displays a question, manages local answer state, sets timers. |
| `QuestionTimer` | Handles countdown via `setTimeout` and `setInterval`.         |
| `Answers`       | Renders randomized answers with selection logic.              |
| `Summary`       | Computes and displays end-of-quiz statistics.                 |
| `Header`        | Static app logo and title.                                    |

---

## ⏱️ Dynamic Timer Logic

Each question is governed by an intelligent timing mechanism:

- `QuestionTimer` accepts a dynamic `timeout` prop, which changes depending on app state:
  - `30s` to answer initially.
  - `1s` transition after selection.
  - `2s` pause after feedback.
- Uses `setTimeout` and `setInterval` together.
- Timeout is cleared correctly on unmount.
- The prop `onTimeout` is called **only if the user hasn't selected an answer**.
- The `key={timer}` on `QuestionTimer` ensures a **full reset** of the timer component when its duration changes.

---

## 🔀 Randomized Answers with `useRef`

Answers are shuffled only **once per render** using `useRef()` inside the `Answers` component:

```js
const shuffledAnswers = useRef();
if (!shuffledAnswers.current) {
  shuffledAnswers.current = [...answers].sort(() => Math.random() - 0.5);
}

 ##🚨 Live View 
 <a href="https://react-quiz-sooty.vercel.app/">click here</a>

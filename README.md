# ⚙️ Task 2 Component Library SDK – Internship Task

This project is a minimal component library SDK built from scratch using **React**, **JavaScript**, and **Context API** — with a focus on modularity, reusability, and clean architecture. This SDK includes foundational components like buttons, forms, headers, typography, input fields, and more — all built without external UI libraries.

## 📁 Folder Structure (src file)

```
src/
├── assets/                # Static assets (images, icons, etc.)
├── components/            # Reusable UI components (grouped by type)
│   ├── buttons/           # <Button />
│   ├── form/              # <Form />
│   ├── header/            # <Header />
│   ├── input-fields/      # <AvatarInput />, <Input />
│   ├── logo/              # <Logo />
│   ├── main/              # <Main />
│   ├── ticket/            # <Ticket />, <TicketDetails />, <UserCard />
│   └── typography/        # <H1 />, <Subtext />
├── context/               # Global user state via React Context API
│   └── UserContext.jsx
├── pages/                 # Demo pages using the component library
│   ├── Dashboard.jsx
│   └── TicketPage.jsx
├── utils/                 # Shared utility functions
│   └── helper.js
```

---

## 🧩 How to Use the Components

Each component is fully customizable via class names using the `clsx` utility. No hardcoded styling is applied inside the components, making them easily themeable and reusable across the application.

> **Example Usage:**

```jsx
import Button from "../components/buttons/Button";

<Button className="bg-blue-500 text-white px-4 py-2 rounded">Click Me</Button>;

//The components contain default stylings to match the reference page and are responsive by default as well.
```

You can pass custom props, styles, or logic depending on the component. All layout and visual styling are delegated to parent components via `className`, promoting flexibility.

---

## 🌐 Global State Management

The `UserContext` (inside `context/UserContext.jsx`) provides global access to the authenticated user across the app. Wrap your app with the context provider to access or update user data anywhere in the component tree.

---

## 🚀 How to Run the Demo

### 1. Clone the Repository

```bash
git clone https://github.com/Manan-Singh10/task-2-component-lib-sdk.git
cd component-lib-sdk
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Start the Development Server

```bash
npm run dev
# or
yarn dev
```

This will start the app on `http://localhost:3000` (or your configured port), where you can view:

- `/dashboard` — Uses components like Header, Main (-- H1, Subtext, Form).
- `/ticket` — Uses components like Header, H1, Subtext, Ticket.

---

## ✅ Features

- 🔧 Built from scratch without UI libraries
- ♻️ Reusable, DRY, and self-contained components
- 🎨 Custom styling via `clsx` and `className` props
- 🧠 Context API for user management
- 📂 Scalable folder structure ready for production
- PropTypes is defined for every prop

---

## 📌 Notes

- This SDK prioritizes **readability**, **modularity**, and **real-world reusability** over design variants or exhaustive features.
- You can extend this with component variants, PropTypes/TypeScript interfaces, and Storybook documentation later if required.

---

## 📄 License

This project is open for evaluation as part of the internship task.

---

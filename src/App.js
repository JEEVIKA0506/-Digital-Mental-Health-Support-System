import { HashRouter, Routes, Route, NavLink, useNavigate } from "react-router-dom";
import { createContext, useContext, useEffect, useState } from "react";
import "./App.css";

const AppContext = createContext();

function getJSON(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function setJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function userKey(email, type) {
  return `mindcare_${email}_${type}`;
}

function useApp() {
  return useContext(AppContext);
}

function calculateScore(email) {
  const moods = getJSON(userKey(email, "moods"), []);
  const journals = getJSON(userKey(email, "journals"), []);
  const assessment = Number(localStorage.getItem(userKey(email, "score"))) || 0;

  let score = 40;
  score += Math.min(moods.length * 4, 20);
  score += Math.min(journals.length * 3, 15);
  score += assessment * 0.45;

  return Math.min(Math.round(score), 100);
}

function AuthPage() {
  const { login } = useApp();
  const [isRegister, setIsRegister] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    emergency: "",
    password: ""
  });

  function update(field, value) {
    setForm({ ...form, [field]: value });
  }

  function submit(e) {
    e.preventDefault();

    const users = getJSON("mindcare_users", {});
    const email = form.email.trim().toLowerCase();

    if (!email || !form.password) {
      alert("Please enter email and password.");
      return;
    }

    if (isRegister) {
      if (!form.name || !form.phone || !form.emergency) {
        alert("Please fill all registration details.");
        return;
      }

      users[email] = {
        name: form.name,
        email,
        phone: form.phone,
        emergency: form.emergency,
        password: form.password
      };

      setJSON("mindcare_users", users);
      login(users[email]);
    } else {
      if (!users[email] || users[email].password !== form.password) {
        alert("Invalid email or password.");
        return;
      }

      login(users[email]);
    }
  }
return
   (
    <div className="auth-page">
      <section className="auth-left">
        <div className="auth-badge">Healthcare Technology</div>
        <h1>Digital Mental Health Support System</h1>
        <p>
          A secure personal wellness space for mood tracking, journaling,
          self-assessment, analytics, and emergency support information.
        </p>

        <div className="auth-points">
          <div className="auth-point">Personal profile</div>
          <div className="auth-point">User-wise mood data</div>
          <div className="auth-point">Dynamic wellness reports</div>
          <div className="auth-point">Emergency contact access</div>
        </div>
      </section>

      <section className="auth-panel">
        <form className="auth-card" onSubmit={submit}>
          <h1>{isRegister ? "Create Account" : "Welcome Back"}</h1>
          <p>
            {isRegister
              ? "Start your wellness journey with MindCare."
              : "Login to continue your wellness tracking."}
          </p>

          {isRegister && (
            <>
              <input placeholder="Full Name" value={form.name} onChange={(e) => update("name", e.target.value)} />
              <input placeholder="Phone Number" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
              <input placeholder="Emergency Contact" value={form.emergency} onChange={(e) => update("emergency", e.target.value)} />
            </>
          )}

          <input placeholder="Email ID" value={form.email} onChange={(e) => update("email", e.target.value)} />
          <input type="password" placeholder="Password" value={form.password} onChange={(e) => update("password", e.target.value)} />

          <button type="submit">{isRegister ? "Create Account" : "Login"}</button>

          <button type="button" className="link-button" onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? "Already have an account? Login" : "New user? Create account"}
          </button>

          <div className="auth-mini">
            <span>Private</span>
            <span>Local Data</span>
            <span>Wellness Focused</span>
          </div>
        </form>
      </section>
    </div>
  );
}

function Sidebar() {
  const { user, logout } = useApp();

  const links = [
    ["🏠 Dashboard", "/dashboard"],
    ["😊 Mood Tracker", "/mood"],
    ["📝 Journal", "/journal"],
    ["✅ Assessment", "/assessment"],
    ["📊 Analytics", "/analytics"],
    ["👤 Profile", "/profile"],
    ["⚙️ Settings", "/settings"],
    ["☎️ Support Hub", "/support"],
    ["📄 Wellness Report", "/report"]
  ];

  return (
    <aside className="sidebar">
      <h2>MindCare</h2>
      <p>{user.name}</p>

      {links.map(([name, path]) => (
        <NavLink key={path} to={path} className={({ isActive }) => (isActive ? "nav active" : "nav")}>
          {name}
        </NavLink>
      ))}

      <button className="logout-btn" onClick={logout}>Logout</button>
    </aside>
  );
}

function Layout({ children }) {
  return (
    <div className="app">
      <Sidebar />
      <main className="main">{children}</main>
    </div>
  );
}

function Home() {
  const navigate = useNavigate();

  return (
    <section className="home">
      <div className="hero">
        <span className="tag">Healthcare Technology</span>
        <h1>Digital Mental Health Support System</h1>
        <p>
          Track moods, write journals, assess wellness, view insights, and access
          support resources in one calm digital space.
        </p>
        <button onClick={() => navigate("/dashboard")}>Get Started</button>
      </div>

      <div className="feature-grid">
        {["Mood Tracking", "Private Journal", "Self Assessment", "Support Hub"].map((item) => (
          <div className="glass-card" key={item}>
            <h3>{item}</h3>
            <p>Designed for daily mental wellness awareness.</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Card({ title, value }) {
  return (
    <div className="stat-card">
      <p>{title}</p>
      <h2>{value}</h2>
    </div>
  );
}

function Dashboard() {
  const { user } = useApp();
  const moods = getJSON(userKey(user.email, "moods"), []);
  const journals = getJSON(userKey(user.email, "journals"), []);
  const score = calculateScore(user.email);

  return (
    <Layout>
      <h1>Welcome, {user.name}</h1>

      <div className="stats">
        <Card title="Wellness Score" value={`${score}%`} />
        <Card title="Mood Records" value={moods.length} />
        <Card title="Journal Entries" value={journals.length} />
      </div>

      <div className="panel">
        <h2>Wellness Progress</h2>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${score}%` }}></div>
        </div>
        <p>{score}% overall wellness score</p>
      </div>

      <div className="panel">
        <h2>Today's Wellness Insight</h2>
        <p>
          Your wellness score is calculated from your mood logs, journal entries,
          and assessment answers.
        </p>
      </div>
    </Layout>
  );
}

function MoodTracker() {
  const { user } = useApp();
  const [mood, setMood] = useState("Calm");
  const [note, setNote] = useState("");
  const [history, setHistory] = useState(() => getJSON(userKey(user.email, "moods"), []));

  useEffect(() => {
    setJSON(userKey(user.email, "moods"), history);
  }, [history, user.email]);

  function saveMood() {
    setHistory([{ mood, note, date: new Date().toLocaleString() }, ...history]);
    setNote("");
  }

  function deleteMood(index) {
    const updated = history.filter((_, i) => i !== index);
    setHistory(updated);
  }

  return (
    <Layout>
      <h1>Mood Tracker</h1>

      <div className="panel">
        <div className="mood-list">
          {["Happy", "Calm", "Neutral", "Sad", "Anxious", "Stressed"].map((m) => (
            <button key={m} className={mood === m ? "mood selected" : "mood"} onClick={() => setMood(m)}>
              {m}
            </button>
          ))}
        </div>

        <textarea placeholder="Add a note..." value={note} onChange={(e) => setNote(e.target.value)} />
        <button onClick={saveMood}>Save Mood</button>
      </div>

      {history.map((item, i) => (
        <div className="entry" key={i}>
          <strong>{item.mood}</strong>
          <p>{item.note}</p>
          <small>{item.date}</small>
          <br />
          <button className="delete-btn" onClick={() => deleteMood(i)}>Delete</button>
        </div>
      ))}
    </Layout>
  );
}

function Journal() {
  const { user } = useApp();
  const [journalText, setJournalText] = useState("");
  const [entries, setEntries] = useState(() => getJSON(userKey(user.email, "journals"), []));

  useEffect(() => {
    setJSON(userKey(user.email, "journals"), entries);
  }, [entries, user.email]);

  function saveJournal() {
    if (!journalText.trim()) return;
    setEntries([{ text: journalText, date: new Date().toLocaleString() }, ...entries]);
    setJournalText("");
  }

  function deleteJournal(index) {
    const updated = entries.filter((_, i) => i !== index);
    setEntries(updated);
  }

  return (
    <Layout>
      <h1>Journal</h1>

      <div className="panel">
        <textarea
          rows="7"
          placeholder="Write your thoughts..."
          value={journalText}
          onChange={(e) => setJournalText(e.target.value)}
        />
        <button onClick={saveJournal}>Save Entry</button>
      </div>

      {entries.map((entry, i) => (
        <div className="entry" key={i}>
          <p>{entry.text}</p>
          <small>{entry.date}</small>
          <br />
          <button className="delete-btn" onClick={() => deleteJournal(i)}>Delete</button>
        </div>
      ))}
    </Layout>
  );
}

function Assessment() {
  const { user } = useApp();

  const questions = [
    "Did you sleep well?",
    "Are you able to focus?",
    "Do you feel emotionally calm?",
    "Do you feel supported?"
  ];

  const options = [
    { text: "Yes", value: 25 },
    { text: "Sometimes", value: 15 },
    { text: "No", value: 5 }
  ];

  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [score, setScore] = useState(localStorage.getItem(userKey(user.email, "score")));

  function selectAnswer(index, value) {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);
  }

  function submitAssessment() {
    if (answers.includes("")) {
      alert("Please answer all questions.");
      return;
    }

    const total = answers.reduce((sum, value) => sum + Number(value), 0);
    setScore(total);
    localStorage.setItem(userKey(user.email, "score"), total);
  }

  return (
    <Layout>
      <h1>Assessment</h1>

      <div className="panel">
        {questions.map((question, index) => (
          <div className="question-box" key={index}>
            <h3>{index + 1}. {question}</h3>

            <div className="answer-options">
              {options.map((option) => (
                <button
                  key={option.text}
                  className={answers[index] === option.value ? "option selected-option" : "option"}
                  onClick={() => selectAnswer(index, option.value)}
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        ))}

        <button onClick={submitAssessment}>Submit Assessment</button>
      </div>

      {score && (
        <div className="result">
          <h2>{score}%</h2>
          <p>{Number(score) >= 75 ? "Stable wellness level" : "Needs more care and support"}</p>
        </div>
      )}
    </Layout>
  );
}

function Analytics() {
  const { user } = useApp();
  const moods = getJSON(userKey(user.email, "moods"), []);
  const journals = getJSON(userKey(user.email, "journals"), []);
  const score = calculateScore(user.email);
  const latestMood = moods.length ? moods[0].mood : "No mood recorded";

  return (
    <Layout>
      <h1>Analytics</h1>

      <div className="stats">
        <Card title="Mood Logs" value={moods.length} />
        <Card title="Journal Logs" value={journals.length} />
        <Card title="Wellness Score" value={`${score}%`} />
      </div>

      <div className="panel">
        <h2>Latest Mood</h2>
        <p>{latestMood}</p>
      </div>
    </Layout>
  );
}

function Profile() {
  const { user } = useApp();
  const score = calculateScore(user.email);

  return (
    <Layout>
      <h1>Profile</h1>

      <div className="panel profile">
        <div className="avatar">{user.name.charAt(0).toUpperCase()}</div>
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Emergency Contact: {user.emergency}</p>
        <p>Current Wellness Score: {score}%</p>
      </div>
    </Layout>
  );
}

function Settings() {
  const { darkMode, setDarkMode, notifications, setNotifications } = useApp();

  return (
    <Layout>
      <h1>Settings</h1>

      <div className="panel">
        <label className="setting-row">
          <span>Enable Dark Mode</span>
          <input type="checkbox" checked={darkMode} onChange={(e) => setDarkMode(e.target.checked)} />
        </label>

        <label className="setting-row">
          <span>Enable Notifications</span>
          <input type="checkbox" checked={notifications} onChange={(e) => setNotifications(e.target.checked)} />
        </label>
      </div>
    </Layout>
  );
}

function SupportHub() {
  const { user } = useApp();

  return (
    <Layout>
      <h1>Support Hub</h1>

      <div className="panel danger">
        <h2>Emergency Help</h2>
        <p>If you feel unsafe, call emergency services immediately: 112</p>
      </div>

      <div className="panel">
        <h2>Your Emergency Contact</h2>
        <p>{user.emergency}</p>
      </div>
    </Layout>
  );
}

function Report() {
  const { user } = useApp();
  const moods = getJSON(userKey(user.email, "moods"), []);
  const journals = getJSON(userKey(user.email, "journals"), []);
  const assessment = localStorage.getItem(userKey(user.email, "score")) || "Not completed";
  const score = calculateScore(user.email);

  return (
    <Layout>
      <h1>Wellness Report</h1>

      <div className="panel">
        <h2>{user.name}'s Summary</h2>
        <p>Overall Wellness Score: {score}%</p>
        <p>Assessment Score: {assessment}</p>
        <p>Total Mood Records: {moods.length}</p>
        <p>Total Journal Entries: {journals.length}</p>

        <h3>Recommendation</h3>
        <p>
          {score >= 75
            ? "Your wellness activity looks stable. Continue regular mood tracking and journaling."
            : "Your wellness score needs attention. Try journaling regularly and reach out for support if needed."}
        </p>
      </div>
    </Layout>
  );
}

function ProtectedApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/mood" element={<MoodTracker />} />
      <Route path="/journal" element={<Journal />} />
      <Route path="/assessment" element={<Assessment />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/support" element={<SupportHub />} />
      <Route path="/report" element={<Report />} />
    </Routes>
  );
}

export default function App() {
  const [user, setUser] = useState(() => getJSON("mindcare_current_user", null));
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true");
  const [notifications, setNotifications] = useState(localStorage.getItem("notifications") !== "false");

  function login(userData) {
    setUser(userData);
    setJSON("mindcare_current_user", userData);
  }

  function logout() {
    localStorage.removeItem("mindcare_current_user");
    setUser(null);
  }

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    localStorage.setItem("notifications", notifications);

    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode, notifications]);

  return (
    <AppContext.Provider value={{ user, login, logout, darkMode, setDarkMode, notifications, setNotifications }}>
      <HashRouter>
  {user ? <ProtectedApp /> : <AuthPage />}</HashRouter>
    </AppContext.Provider>
  );
}
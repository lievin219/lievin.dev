import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const footerLinks = [
 
];

const techStack = [
  
];

const devStatuses = [
  "Coding 💻",
  "In flow 🎧",
  "Reviewing PR 👀",
  "Writing tests 🧪",
  "Deploying... 🚀",
  "Reading docs 📖",
];

const moods = [
  { emoji: "🔥", label: "In the zone learning some data sructures and Algorithms" },
  { emoji: "🙏", label: "A prayer" },
  { emoji: "🐛", label: "Debugging" },
  { emoji: "🚀", label: "Into production" },
  { emoji: "😴", label: "taking a break" },
];

const weatherIcons = {
  0: "☀️", 1: "🌤️", 2: "⛅", 3: "☁️",
  45: "🌫️", 48: "🌫️", 51: "🌦️", 61: "🌧️",
  80: "🌦️", 95: "⛈️",
};
const weatherDescs = {
  0: "Sunny", 1: "Mostly sunny", 2: "Partly cloudy", 3: "Overcast",
  45: "Foggy", 48: "Foggy", 51: "Drizzle", 61: "Rainy",
  80: "Showers", 95: "Thunderstorm",
};

function getWeatherKey(code) {
  return Object.keys(weatherIcons)
    .map(Number)
    .reduce((a, b) => (Math.abs(b - code) < Math.abs(a - code) ? b : a));
}

const uptimeBlocks = Array.from({ length: 14 }, () => Math.random() > 0.1);

export default function FooterMain() {
  const [time, setTime] = useState("");
  const [statusIndex, setStatusIndex] = useState(0);
  const [selectedMood, setSelectedMood] = useState(null);
  const [weather, setWeather] = useState({ temp: null, icon: "🌡️", desc: "Loading…" });

  // Live clock — Kigali (CAT = UTC+2)
  useEffect(() => {
    const tick = () => {
      const t = new Date().toLocaleTimeString("en-GB", {
        timeZone: "Africa/Kigali",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setTime(t);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // Dev status cycle
  useEffect(() => {
    const id = setInterval(() => {
      setStatusIndex((i) => (i + 1) % devStatuses.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  // Live weather from Open-Meteo (no API key needed)
  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=-1.9441&longitude=30.0619&current_weather=true&timezone=Africa/Kigali"
    )
      .then((r) => r.json())
      .then((d) => {
        const code = d.current_weather.weathercode;
        const temp = Math.round(d.current_weather.temperature);
        const key = getWeatherKey(code);
        setWeather({
          temp,
          icon: weatherIcons[key] || "🌡️",
          desc: weatherDescs[key] || "",
        });
      })
      .catch(() => setWeather({ temp: null, icon: "🌡️", desc: "Kigali" }));
  }, []);

  return (
    <div className="px-4">
      {/* Divider */}
      <div className="w-full h-px bg-lightGrey mt-24" />

      <div className="max-w-[1200px] mx-auto pt-6 pb-12">

        {/* TOP ROW — name + live widgets */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
          {/* Name + status */}
          <div className="flex flex-col gap-1">
            <p className="text-3xl text-lightGrey font-medium">Lievin Gakiza</p>
            <span className="flex items-center gap-2 text-sm text-lightGrey/60">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
             
            </span>
          </div>

          {/* Live pills */}
          <div className="flex flex-wrap gap-2 items-center">
            {/* Clock */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-lightGrey/70 hover:border-white/20 hover:text-lightGrey transition-colors">
              <span>🕐</span>
              <span className="font-mono font-medium text-lightGrey">{time || "--:--:--"}</span>
              <span className="text-xs opacity-60">CAT</span>
            </div>

            {/* Weather */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-lightGrey/70 hover:border-white/20 hover:text-lightGrey transition-colors">
              <span>{weather.icon}</span>
              <span className="font-medium text-lightGrey">
                {weather.temp !== null ? `${weather.temp}°C` : "--°C"}
              </span>
              <span className="text-xs opacity-60">{weather.desc}</span>
            </div>

            {/* Dev status */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-lightGrey/70 hover:border-white/20 hover:text-lightGrey transition-colors">
              <span>⚡</span>
              <span className="font-medium text-lightGrey transition-all duration-500">
                {devStatuses[statusIndex]}
              </span>
            </div>
          </div>
        </div>

        {/* TECH STACK BADGES */}
        <div className="flex flex-wrap gap-2 mb-5">
          {techStack.map((t) => (
            <span
              key={t.label}
              className={`font-mono text-[11px] px-2.5 py-1 rounded-full border ${t.color} font-medium`}
            >
              {t.label}
            </span>
          ))}
        </div>

        {/* GIT COMMIT ROW */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-lightGrey/50 font-mono mb-5">
          <span>🔀</span>
          <span></span>
          <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-lightGrey/70">
           
          </span>
          <span></span>
          <span className="ml-2 flex items-center gap-1">
            Uptime:
            <span className="flex gap-0.5 ml-1">
              {uptimeBlocks.map((ok, i) => (
                <span
                  key={i}
                  className={`inline-block w-2 h-3.5 rounded-[2px] ${ok ? "bg-green-600" : "bg-red-500"}`}
                />
              ))}
            </span>
          </span>
        </div>

        {/* NAV + SOCIALS */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
          {/* Nav links */}
          <ul className="flex flex-wrap gap-1">
            {footerLinks.map((item, i) => (
              <li key={i}>
                <Link
                  spy smooth duration={500} offset={-120}
                  to={item.section}
                  className="px-3 py-1.5 text-sm text-lightGrey/60 rounded-lg border border-transparent hover:border-white/10 hover:bg-white/5 hover:text-lightGrey transition-all duration-200 cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="mailto:gakizalievin219@gmail.com"
                className="px-3 py-1.5 text-sm text-lightGrey/60 rounded-lg border border-transparent hover:border-white/10 hover:bg-white/5 hover:text-lightGrey transition-all duration-200"
              >
                Contact ↗
              </a>
            </li>
          </ul>

          {/* Social icons */}
          <div className="flex gap-2">
            {[
              { href: "https://github.com/", icon: "GH", title: "GitHub" },
              { href: "https://linkedin.com/", icon: "in", title: "LinkedIn" },
              { href: "https://twitter.com/", icon: "𝕏", title: "Twitter" },
              { href: "mailto:gakizalievin219@gmail.com", icon: "✉", title: "Email" },
            ].map((s) => (
              <a
                key={s.title}
                href={s.href}
                title={s.title}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 text-lightGrey/60 hover:bg-white/10 hover:text-lightGrey hover:border-white/20 transition-all duration-200 text-xs font-medium"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* BOTTOM BAR — copyright + mood picker */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
          <p className="text-xs text-lightBrown">
          
          </p>

          {/* Mood picker */}
          <div className="flex items-center gap-2 text-xs text-lightGrey/40">
            <span>Dev mood:</span>
            <div className="flex gap-1">
              {moods.map((m) => (
                <button
                  key={m.emoji}
                  title={m.label}
                  onClick={() => setSelectedMood(m)}
                  className={`text-base transition-transform duration-150 hover:scale-125 ${
                    selectedMood?.emoji === m.emoji ? "scale-125 drop-shadow-md" : ""
                  }`}
                >
                  {m.emoji}
                </button>
              ))}
            </div>
            {selectedMood && (
              <span className="text-lightGrey/60 ml-1">{selectedMood.label}</span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
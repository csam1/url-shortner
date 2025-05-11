import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [shorturl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const validateUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const generateUniqueId = () => {
    let uuid;
    do {
      uuid = crypto.randomUUID();
    } while (localStorage.getItem(uuid) !== null);
    return uuid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setCopied(false);

    if (!validateUrl(url)) {
      setError("Please enter a valid URL (e.g., https://example.com)");
      return;
    }

    const uuid = generateUniqueId();
    const store = {
      id: uuid,
      url: url,
      shortnedUrl: uuid,
      createdAt: new Date().toISOString(),
    };
    setShortUrl(`/${uuid}`);
    localStorage.setItem(uuid, JSON.stringify(store));
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.origin + shorturl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      setError("Failed to copy to clipboard");
    }
  };

  return (
    <div className="container">
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit} className="url-form">
        <div className="input-group">
          <input
            required
            type="url"
            value={url}
            placeholder="Enter your URL here (e.g., https://example.com)"
            onChange={(e) => setUrl(e.target.value)}
            className="url-input"
          />
          <button type="submit" className="submit-btn">Shorten</button>
        </div>
        {error && <p className="error-message">{error}</p>}
      </form>

      {shorturl && (
        <div className="result-container">
          <p>Your shortened URL:</p>
          <div className="short-url-container">
            <Link to={shorturl} className="short-url">
              {window.location.origin + shorturl}
            </Link>
            <button 
              onClick={copyToClipboard}
              className={`copy-btn ${copied ? 'copied' : ''}`}
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const WrapperRoute = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("Invalid URL");
      return;
    }

    const urlStore = localStorage.getItem(id);
    
    if (!urlStore) {
      setError("URL not found");
      return;
    }

    try {
      const store = JSON.parse(urlStore);
      if (!store.url) {
        setError("Invalid URL format");
        return;
      }
      window.location.replace(store.url);
    } catch (err) {
      setError("Error processing URL");
    }
  }, [id, navigate]);

  if (error) {
    return (
      <div className="container">
        <h1>Error</h1>
        <p className="error-message">{error}</p>
        <button 
          onClick={() => navigate('/')}
          className="submit-btn"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Redirecting...</h1>
      <p>Please wait while we redirect you to your destination.</p>
    </div>
  );
};

export default WrapperRoute; 
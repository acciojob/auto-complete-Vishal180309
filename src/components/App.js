import React, { useState } from "react";

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

const AutoComplete = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = async (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value === "") {
      setSuggestions([]);
      return;
    }

    // Simulate asynchronous fetch with a timeout
    setIsLoading(true);
    setTimeout(() => {
      const filteredSuggestions = fruits.filter((fruit) =>
        fruit.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setIsLoading(false);
    }, 300); // Simulate a delay of 300ms
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
  };

  return (
    <div style={{ maxWidth: "300px", margin: "0 auto", fontFamily: "Arial" }}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Start typing..."
        style={{
          width: "100%",
          padding: "8px",
          boxSizing: "border-box",
          marginBottom: "10px",
        }}
      />
      {isLoading && <p>Loading suggestions...</p>}
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          border: suggestions.length > 0 ? "1px solid #ddd" : "none",
        }}
      >
        {suggestions.map((suggestion) => (
          <li
            key={suggestion}
            onClick={() => handleSuggestionClick(suggestion)}
            style={{
              padding: "8px",
              cursor: "pointer",
              backgroundColor: "#f9f9f9",
              borderBottom: "1px solid #ddd",
            }}
          >
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AutoComplete;

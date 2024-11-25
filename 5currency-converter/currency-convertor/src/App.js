import React, { useState } from "react";

function App() {
  // Hardcoded exchange rate
  const exchangeRate = 82.50; // 1 USD = 82.50 INR

  // State to store input and converted amount
  const [dollarAmount, setDollarAmount] = useState("");
  const [rupeeAmount, setRupeeAmount] = useState(0);

  // Event handler for input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setDollarAmount(value);

    // Calculate rupees only if input is a valid number
    if (!isNaN(value) && value.trim() !== "") {
      setRupeeAmount((value * exchangeRate).toFixed(2));
    } else {
      setRupeeAmount(0);
    }
  };

  return (
    <div className="app-container">
      <h1>Currency Converter</h1>
      <div className="converter">
        <label>
          Enter Amount in USD:
          <input
            type="text"
            value={dollarAmount}
            onChange={handleInputChange}
            placeholder="Enter amount in dollars"
          />
        </label>
        <p>
          Converted Amount in INR: <strong>₹ {rupeeAmount}</strong>
        </p>
      </div>
    </div>
  );
}

export default App;

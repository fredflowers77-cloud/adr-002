#frontend/pages/dashboard.js#
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/execute", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "token"
      },
      body: JSON.stringify({ action: "load_dashboard" })
    })
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div>
      <h1>BuzzFlow Dashboard</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

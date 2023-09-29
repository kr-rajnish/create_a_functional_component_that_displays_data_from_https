import { useEffect, useState } from "react";
// import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((apiData) => setData(apiData.data));
  }, []);
  return (
    <div className="App">
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.first_name} {user.last_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

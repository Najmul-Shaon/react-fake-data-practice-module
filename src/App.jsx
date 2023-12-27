import { useState } from "react";
import "./App.css";
import Users from "./Users";
import { useEffect } from "react";

function App() {
  const users = [
    {
      id: 1,
      username: "john_doe",
      email: "john@example.com",
      age: 30,
    },
    {
      id: 2,
      username: "jane_smith",
      email: "jane@example.com",
      age: 25,
    },
    {
      id: 3,
      username: "sam_jones",
      email: "sam@example.com",
      age: 28,
    },
    {
      id: 4,
      username: "emily_wilson",
      email: "emily@example.com",
      age: 32,
    },
    {
      id: 5,
      username: "alex_brown",
      email: "alex@example.com",
      age: 27,
    },
    {
      id: 6,
      username: "lisa_jackson",
      email: "lisa@example.com",
      age: 29,
    },
    {
      id: 7,
      username: "michael_thomas",
      email: "michael@example.com",
      age: 35,
    },
    {
      id: 8,
      username: "sarah_anderson",
      email: "sarah@example.com",
      age: 26,
    },
    {
      id: 9,
      username: "william_clark",
      email: "william@example.com",
      age: 31,
    },
    {
      id: 10,
      username: "olivia_wright",
      email: "olivia@example.com",
      age: 24,
    },
    {
      id: 11,
      username: "daniel_miller",
      email: "daniel@example.com",
      age: 33,
    },
    {
      id: 12,
      username: "chloe_taylor",
      email: "chloe@example.com",
      age: 22,
    },
    {
      id: 13,
      username: "ethan_hall",
      email: "ethan@example.com",
      age: 28,
    },
    {
      id: 14,
      username: "ava_johnson",
      email: "ava@example.com",
      age: 30,
    },
    {
      id: 15,
      username: "noah_anderson",
      email: "noah@example.com",
      age: 29,
    },
  ];

  const [usersV2, setUsersV2] = useState([]);

  useEffect(() => {
    fetch("users.json")
      .then((res) => res.json())
      .then((data) => setUsersV2(data));
  }, []);
  return (
    <>
      <h1>Fake Data load from local file</h1>
      {users.map((user) => (
        <Users key={user.id} user={user}></Users>
      ))}
      <h1>Fake Data load from local file JSON</h1>
      {usersV2.map((user) => (
        <Users key={user.id} user={user}></Users>
      ))}
    </>
  );
}

export default App;

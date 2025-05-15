import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.TARGET_APP_URL}/api/message`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message,
            from: process.env.APP_NAME,
          }),
        }
      );

      if (response.ok) {
        setStatus(`Сообщение отправлено в ${process.env.TARGET_APP_NAME}!`);
        setMessage("");
      } else {
        setStatus("Ошибка при отправке сообщения");
      }
    } catch (error) {
      setStatus("Ошибка сети: " + error.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>{process.env.APP_NAME}</h1>
      <form onSubmit={handleSubmit} style={{ margin: "20px 0" }}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Введите сообщение"
          required
          style={{ padding: "8px", marginRight: "10px", width: "300px" }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 16px",
            background: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Отправить в {process.env.TARGET_APP_NAME}
        </button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}

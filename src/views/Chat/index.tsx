"use client";

import { useEffect, useState } from "react";
import { useSocket } from "../../contexts/SocketContext";
import { useDash } from "../../contexts/DashContext";
import { Button } from "@/components/ui/Button";

export default function ChatPage(): React.JSX.Element {
  const { socket } = useSocket();
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const { updateDashStatus } = useDash();

  useEffect(() => {
    updateDashStatus(false);
    if (socket) {
      socket.on("message", (message: string) => {
        setMessages((previous) => [...previous, message]);
      });
    }

    return () => {
      if (socket) socket.off("message");
    };
  }, [socket, updateDashStatus]);

  const sendMessage = () => {
    if (socket && input) {
      socket.emit("message", input);
      setInput("");
    }
  };

  return (
    <main className="min-h-[calc(100vh-68px)] bg-surface-canvas px-4 pb-16 pt-24 sm:px-6">
      <div className="mx-auto max-w-2xl rounded-container border border-white/70 bg-white p-6 shadow-card">
        <h1 className="font-quicksand text-2xl font-semibold text-royal-ink">
          Chat room
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Live support and project conversation.
        </p>

        <div className="mt-5 h-64 space-y-2 overflow-y-auto rounded-card bg-surface-canvas p-4">
          {messages.length === 0 ? (
            <p className="text-sm text-slate-500">No messages yet.</p>
          ) : (
            messages.map((message, index) => (
              <p
                key={index}
                className="w-max max-w-full rounded-control bg-white px-3 py-2 text-sm text-slate-700 shadow-card"
              >
                {message}
              </p>
            ))
          )}
        </div>

        <div className="mt-4 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                sendMessage();
              }
            }}
            placeholder="Type a message"
            className="h-11 flex-1 rounded-control border border-slate-200 bg-white px-3.5 text-sm text-slate-900 outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10"
          />
          <Button type="button" variant="primary" onClick={sendMessage}>
            Send
          </Button>
        </div>
      </div>
    </main>
  );
}

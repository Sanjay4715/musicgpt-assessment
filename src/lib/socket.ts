import { io, Socket } from "socket.io-client";

const SOCKET_URL =
  process.env.NODE_ENV === "production"
    ? "https://musicgpt-assessment.vercel.app"
    : "http://localhost:4000";

export const socket: Socket = io(SOCKET_URL, { autoConnect: true });

import { io, Socket } from "socket.io-client";

console.log(process.env.NODE_ENV);

const SOCKET_URL =
  process.env.NODE_ENV === "production"
    ? "https://musicgpt-assessment-socket-production.up.railway.app"
    : "http://localhost:4000/";

export const socket: Socket = io(SOCKET_URL, { autoConnect: true });

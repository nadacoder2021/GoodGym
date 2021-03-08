import { upcomingSessions, attendances } from "./data";

export const attendees = (sessionId: string) => attendances[sessionId] || [];

export const session = (id: string) =>
  upcomingSessions.find((h) => h.id === id);

export const register = (sessionId: string, userId: string) => {
  attendances[sessionId] = attendances[sessionId] || [];
  if (!attendances[sessionId].includes(userId)) {
    attendances[sessionId].push(userId);
  }
  return session(sessionId);
};

export const unregister = (sessionId: string, userId: string) => {
  attendances[sessionId] = attendances[sessionId] || [];
  const idx = attendances[sessionId].indexOf(userId);
  if (idx !== -1) {
    attendances[sessionId].splice(idx);
  }
  return session(sessionId);
};

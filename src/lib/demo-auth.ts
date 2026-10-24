/**
 * Login demo khusus situs statis. Kredensial terlihat di bundle browser,
 * jadi ini bukan autentikasi aman dan tidak boleh dipakai untuk data sensitif.
 */
export const DEMO_USER = "demo";
export const DEMO_PASS = "demo";

const SESSION_KEY = "pn-demo-session";

export function isLoggedIn(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

export function login(user: string, pass: string): boolean {
  if (user.trim() !== DEMO_USER || pass !== DEMO_PASS) return false;
  try {
    window.localStorage.setItem(SESSION_KEY, "1");
  } catch {
    // Mode privat bisa menolak localStorage; redirect tetap dilanjutkan.
  }
  return true;
}

export function logout(): void {
  try {
    window.localStorage.removeItem(SESSION_KEY);
  } catch {
    // Tidak ada yang perlu dilakukan.
  }
}

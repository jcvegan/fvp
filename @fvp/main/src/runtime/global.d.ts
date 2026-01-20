
export {};
declare global {
  interface Window {
    __ENV__: RuntimeEnv;
  }
}
window.__ENV__ = window.__ENV__ || {};
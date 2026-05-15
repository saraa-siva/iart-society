import "./styles.css";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js");
}

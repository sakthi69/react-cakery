import React from "react";
export default function Footer() {
  return (
    <div className="footer">
      <h2 class="name">Sakthi's Cakery</h2>

      <h3 class="address">
        1665 Echo Park Ave, <br />
        Los Angeles,
        <br />
        California 90026.
      </h3>
      <p class="copyright">
        © {new Date().getFullYear()} Sakthi @ Sakthi's Cakery
      </p>
    </div>
  );
}

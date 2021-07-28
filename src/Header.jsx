import React from "react";
function Header() {
  return (
    <div className="header">
      <img
        class="topcheese1"
        src={require("./cheesecake.png")}
        alt="cheesecake"
      />
      <img
        class="topcheese2"
        src={require("./cheesecake.png")}
        alt="cheesecake"
      />
      <div class="title-text">
        <h1>Sakthi's Cakery</h1>
        <h2>
          <span class="pro">Baked</span> with love
        </h2>
      </div>

      <img
        class="topcake"
        src={require("./birthday-cake.png")}
        alt="birthday cake"
      />
    </div>
  );
}
export default Header;

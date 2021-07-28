import React from "react";
export default function Middle() {
  return (
    <div className="middle">
      <hr class="border" />
      <div class="profile">
        <img
          class="quotes"
          src={require("./cakequotes.jpg")}
          alt="cakequotes"
          height="500px"
        />
        <h2>Welcome to Sakthi's Cakery.</h2>
        <p class="intro">
          Celebrate every occasion with our cakes!!! Baked with lots of love and
          cream specially for you
        </p>
      </div>
      <hr />
      <div class="skills">
        <h2>Delight in Every Bite!!!</h2>
        <div class="skill-row">
          <img
            class="birthday-img"
            src={require("./birthday.jpg")}
            alt="birthday-cake"
          />

          <h3>Birthday Cake</h3>
          <p>
            Birthdays are nature's way of telling us to eat more cakes.You know
            you are getting old when the candles cost more than cake.
          </p>
          <h4>Dedicate your beloved ones with our Chocolate Truffle.</h4>
        </div>
        <div class="skill-row">
          <img
            class="cup-img"
            src={require("./cupcake.jpg")}
            alt="cupcake"
            width="200px"
          />

          <h3>Cup Cake</h3>
          <p>
            You can't buy HAPPINESS, But you can buy CUPCAKES ...And that's
            kinda the same thing. A balanced diet is having a cup cake in each
            hand.
          </p>
          <h4>
            When stressed and in doubt{" "}
            <strong>
              <i>CUPCAKE</i>
            </strong>{" "}
            it out!!
          </h4>
        </div>
      </div>
      <hr />
      <center>
        <h2>
          <u>Other Available CAKES</u>
        </h2>
        <table>
          <tbody>
            <tr>
              <td>🧁 </td>
              <td class="bullet">Black Forest Cake</td>

              <td>🧁 </td>
              <td class="bullet">Sponge Cake</td>
            </tr>
            <br />
            <tr>
              <td>🧁 </td>
              <td class="bullet">Cheese Cake</td>

              <td>🧁 </td>
              <td class="bullet">Red Velvet Cake</td>
            </tr>
            <br />
            <tr>
              <td>🧁 </td>
              <td class="bullet">Chocolate Lava</td>

              <td>🧁 </td>
              <td class="bullet">Blueberry Glaze</td>
            </tr>
            <br />
          </tbody>
        </table>
      </center>
      <br />
      <hr />
      <br />

      <div class="contact-me">
        <h2 class="exclusive">Exclusive OFFERS!!!</h2>
        <h3 class="offer">
          Buy 2{" "}
          <img
            className="bulle"
            src={require("./cup-cake.png")}
            alt="cupcake"
            height="70px"
          />
          ..... GET 1 FREE!!!
        </h3>
        <p class="contact-message">
          Only till 20th JUNE..Smash the button below and enjoy the offer right
          now
        </p>
      </div>
      <hr class="border" />
    </div>
  );
}

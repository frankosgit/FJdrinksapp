import { html, css, render } from "lit";
import { component } from "haunted";

const Logo = ({ logo, link }) => {
  const style = css`
    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
    }
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
    a {
      text-decoration: none;
    }
  `;

  return html`<style>
      ${style}
    </style>
    <p>testing from my logo</p>`;
};

customElements.define(
  "my-logo",
  component(Logo, {
    observedAttributes: ["logo", "link"],
  })
);
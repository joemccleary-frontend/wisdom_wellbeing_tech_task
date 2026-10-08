import "@testing-library/jest-dom/vitest";

// jsdom does not implement the modal methods of <dialog>, so we provide
// minimal versions that toggle the `open` attribute like a browser would.
HTMLDialogElement.prototype.showModal = function () {
  this.setAttribute("open", "");
};

HTMLDialogElement.prototype.close = function () {
  this.removeAttribute("open");
  this.dispatchEvent(new Event("close"));
};

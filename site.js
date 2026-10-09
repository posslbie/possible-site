// The only file you need to edit. Fill in the two values below, save, and upload the site again.
var SITE = {
  email: "possibletweakshelp@yahoo.com",   // your support email
  checkoutUrl: "https://posslbie.gumroad.com/l/vyrwpe"           // the Share link of your product in Lemon Squeezy
};

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-email]").forEach(function (a) {
    if (SITE.email) { a.textContent = SITE.email; if (a.tagName === "A") a.href = "mailto:" + SITE.email; }
    else { a.textContent = "support email (add it in site.js)"; }
  });
  document.querySelectorAll("[data-buy]").forEach(function (a) {
    a.href = SITE.checkoutUrl || "index.html#pricing";
  });
  var y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear();
});

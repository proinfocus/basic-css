// Message Close
var messages = document.querySelectorAll(".message");
messages.forEach((m) => {
  m.querySelector(".message-header button").addEventListener("click", () => {
    m.classList.toggle("ani-toright");
    m.addEventListener("animationend", () => {
      m.style.display = "none";
    });
  });
});

// Notification Close
var notifications = document.querySelectorAll(".notification");
notifications.forEach((m) => {
  m.querySelector("button").addEventListener("click", () => {
    m.classList.toggle("ani-toright");
    m.addEventListener("animationend", () => {
      m.style.display = "none";
    });
  });
});

// Tabs selection
var tabs = document.querySelectorAll(".tabs");
tabs.forEach((ta) => {
  ta.addEventListener("click", () => {
    ta.querySelectorAll("a").forEach((t, i) => {
      t.addEventListener("click", (e) => {
        ta.querySelectorAll(".tabs li").forEach((a) =>
          a.classList.remove("active")
        );
        ta.querySelectorAll(".tabs li")[i].classList.add("active");
        ta.querySelectorAll(".tabs-content div").forEach((a) =>
          a.classList.remove("active")
        );
        ta.querySelectorAll(".tabs-content div")[i].classList.toggle("active");
      });
    });
  });
  ta.click();
});

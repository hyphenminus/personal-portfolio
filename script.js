"use strict";
/*
 Toggle light/dark mode
 by clicking #mode element
 */
function toggleMode() {
    const html = document.getElementsByTagName("html").item(0);
    html.className === "dark" ? html.className = "" : html.className = "dark";
}
document.getElementById("mode").addEventListener("click", toggleMode);
document.addEventListener("DOMContentLoaded", function () {
    const caseColumn = document.querySelector(".case-content");
    const caseButton = document.querySelector(".case-btn");

    caseButton.addEventListener("click", function () {
        caseColumn.classList.toggle("active");
        caseButton.classList.toggle("active");
    });
});



// document.addEventListener("DOMContentLoaded", function () {
//     const faqQuestions = document.querySelectorAll(".faq-block-q");
//     const faqAnswers = document.querySelectorAll(".faq-block-a");

//     faqQuestions.forEach((faqQuestion, index) => {
//         faqQuestion.addEventListener("click", function (event) {
//             event.currentTarget.classList.toggle("active");
//             faqAnswers[index].classList.toggle("active");
//         });
//     });
// });


document.addEventListener("DOMContentLoaded", function () {
    const faqBlocks = document.querySelectorAll(".faq-block");
    const faqQuestions = document.querySelectorAll(".faq-block-q");
    const faqAnswers = document.querySelectorAll(".faq-block-a");
    const faqImgs = document.querySelectorAll(".faq-block-q__txt");

    faqAnswers.forEach((faqAnswer) => {
        faqAnswer.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    });

    faqBlocks.forEach((faqBlock, index) => {
        faqBlock.addEventListener("click", function () {
            faqQuestions[index].classList.toggle("active");
            faqAnswers[index].classList.toggle("active");
            faqImgs[index].classList.toggle("active");
        });
    });
});



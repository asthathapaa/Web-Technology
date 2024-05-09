document.addEventListener('DOMContentLoaded', function () {
    const Accordions = document.querySelectorAll('.Accordian');

    Accordions.forEach(singleAccordion => {
        const icon = singleAccordion.querySelector('.icon');
        const Answer = singleAccordion.querySelector('.Answer');

        singleAccordion.addEventListener('click', () => {
            if (icon.classList.contains('active')) {
                icon.classList.remove('active');
                Answer.style.maxHeight = null;
            } else {
                icon.classList.add('active');
                Answer.style.maxHeight = Answer.scrollHeight + 'px';
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const classContainers = document.querySelectorAll('.classes');
    const tabsContent = document.querySelectorAll('.TabsContent');

    classContainers.forEach(container => {
        container.addEventListener('click', function () {
            const radioInput = this.querySelector('input[type="radio"]');
            const tabId = this.getAttribute('data-tab');

            radioInput.checked = true;

            tabsContent.forEach(tab => tab.classList.remove('show'));

            document.getElementById(tabId).classList.add('show');
        });
    });
});
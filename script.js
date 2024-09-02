document.addEventListener('DOMContentLoaded', () => {
    const viewButtons = document.querySelectorAll('.view-button');
    const rows = document.querySelectorAll('tbody tr');
    const slideOut = document.getElementById('slide-out');
    const closeButton = slideOut.querySelector('.close');
    const content = document.querySelector('#content');

    const updateSlideOutContent = (employee, saasApp) => {
        slideOut.querySelector('.details').innerHTML = `
            <div class="d-flex border-b">
                <div class="medium">Employee</div>
                <div>${employee}</div>
            </div>
            <div class="d-flex border-b">
                <div class="medium">SaaS Application</div>
                <div>${saasApp}</div>
            </div>
            <div class="d-flex border-b">
                <div class="medium d-flex f-col justify-center">
                    Data Source
                </div>
                <div>
                    <span class="dataSource">
                        <img class="w-100" src="assets/chrome.svg" alt="Chrome icon" />
                    </span>
                </div>
            </div>
        `;
    };

    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr');
            const employee = row.querySelector('td:nth-child(2) a').textContent.trim();
            const saasApp = row.querySelector('td:nth-child(4)').textContent.trim();

            updateSlideOutContent(employee, saasApp);
            slideOut.classList.add('open');
            content.style.width = 'calc(100% - 400px)';
        });
    });

    rows.forEach(row => {
        row.addEventListener('click', event => {
            if (!event.target.matches('input[type="checkbox"], button')) {
                const checkbox = row.querySelector('input[type="checkbox"]');
                checkbox.checked = !checkbox.checked;
            }
        });
    });

    closeButton.addEventListener('click', () => {
        slideOut.classList.remove('open');
        content.style.width = '97%';
    });

    document.addEventListener('click', event => {
        if (!slideOut.contains(event.target) && !event.target.matches('.view-button')) {
            slideOut.classList.remove('open');
            content.style.width = '97%';
        }
    });
});

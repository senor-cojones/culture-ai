document.addEventListener('DOMContentLoaded', function() {
    const viewButtons = document.querySelectorAll('.view-button');
    const rows = document.querySelectorAll('tbody tr');
    const slideOut = document.getElementById('slide-out');
    const closeButton = slideOut.querySelector('.close');

    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr');
            const employee = row.querySelector('td:nth-child(2) a').textContent.trim();
            const saasApp = row.querySelector('td:nth-child(4)').textContent.trim();

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
                            <img class="w-100" src="assets/chrome.svg" alt="chrome icon" />
                        </span>
                    </div>
                </div>
            `;

            slideOut.classList.add('open');
        });
    });

    rows.forEach(row => {
        row.addEventListener('click', function(event) {
            // Check if the click is on the row (not on a checkbox or button)
            if (!event.target.matches('input[type="checkbox"]') && !event.target.matches('button')) {
                const checkbox = this.querySelector('input[type="checkbox"]');

                checkbox.checked = !checkbox.checked;
            }
        });
    });

    closeButton.addEventListener('click', function() {
        slideOut.classList.remove('open');
    });
});

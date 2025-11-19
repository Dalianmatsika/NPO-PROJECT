document.addEventListener('DOMContentLoaded', function () {
    // =========================================================
    // 2.1 Interactive Elements: Accordion Logic
    // =========================================================
    const headers = document.querySelectorAll('.program-accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling;
            const icon = this.querySelector('.toggle-icon');

            // Toggle the current panel
            content.classList.toggle('hidden');
            icon.textContent = content.classList.contains('hidden') ? '+' : '-';

            // Close other open panels
            document.querySelectorAll('.program-accordion-content').forEach(otherContent => {
                if (otherContent !== content && !otherContent.classList.contains('hidden')) {
                    otherContent.classList.add('hidden');
                    const otherIcon = otherContent.previousElementSibling.querySelector('.toggle-icon');
                    if (otherIcon) otherIcon.textContent = '+';
                }
            });
        });
    });

    const searchInput = document.getElementById('programSearch');
    const programCards = document.querySelectorAll('.program-card');

    searchInput.addEventListener('keyup', function () {
        const searchTerm = searchInput.value.toLowerCase().trim();

        programCards.forEach(card => {
            // Search in title and expanded content
            const title = card.querySelector('h3').textContent.toLowerCase();
            // Note: If the accordion content is not yet structured, this might need refinement.
            // Assuming the structure is stable for search function.
            const descriptionElement = card.querySelector('.program-accordion-content p');
            const description = descriptionElement ? descriptionElement.textContent.toLowerCase() : '';
            
            const searchableText = title + description;

            if (searchableText.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
// FAQ Toggle Functionality with Accessibility Support
document.addEventListener('DOMContentLoaded', function() {
    // Get all FAQ questions
    const faqQuestions = document.querySelectorAll('.faq-question');

    // Add event listeners to each FAQ question
    faqQuestions.forEach((question, index) => {
        // Convert the question to a button for accessibility
        question.setAttribute('role', 'button');
        question.setAttribute('tabindex', '0');
        question.setAttribute('aria-expanded', 'false');
        question.setAttribute('aria-controls', `faq-answer-${index}`);

        // Create unique ID for the answer
        const faqItem = question.parentElement;
        const answer = faqItem.querySelector('.faq-answer');
        answer.id = `faq-answer-${index}`;

        // Toggle function
        const toggleFAQ = () => {
            const isActive = faqItem.classList.contains('active');

            // Close all other FAQs
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            document.querySelectorAll('.faq-question').forEach(q => {
                q.setAttribute('aria-expanded', 'false');
            });

            // Toggle current FAQ
            if (!isActive) {
                faqItem.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
            } else {
                faqItem.classList.remove('active');
                question.setAttribute('aria-expanded', 'false');
            }
        };

        // Click event
        question.addEventListener('click', toggleFAQ);

        // Keyboard events (Enter and Space)
        question.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleFAQ();
            }
        });
    });
});
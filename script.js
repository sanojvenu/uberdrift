document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Mouse movement parallax effect on the sale card
    const card = document.querySelector('.sale-card');
    
    document.addEventListener('mousemove', (e) => {
        if (window.innerWidth > 768 && card) {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 60;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 60;
            card.style.transform = `perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        }
    });

    // Reset card position when mouse leaves window
    document.addEventListener('mouseleave', () => {
        if (window.innerWidth > 768 && card) {
            card.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg)`;
        }
    });

    // Copy email to clipboard
    const copyBtn = document.getElementById('copyEmailBtn');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const email = copyBtn.getAttribute('data-email');
            navigator.clipboard.writeText(email).then(() => {
                const textSpan = copyBtn.querySelector('.btn-text');
                const originalText = textSpan.textContent;
                textSpan.textContent = 'Email Copied!';
                copyBtn.style.background = '#00ff88';
                copyBtn.style.color = '#0a0a0a';
                
                setTimeout(() => {
                    textSpan.textContent = originalText;
                    copyBtn.style.background = 'var(--primary)';
                    copyBtn.style.color = 'white';
                }, 3000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    }
});

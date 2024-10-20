function toggleContent(sectionId) {
    const detailsSection = document.getElementById(sectionId);
    
    if (detailsSection.style.display === 'none' || detailsSection.style.display === '') {
        detailsSection.style.display = 'block';
        detailsSection.style.animation = 'fadeIn 0.5s';
    } else {
        detailsSection.style.display = 'none';
    }
}

// Add a fade-in animation to toggle the content
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);


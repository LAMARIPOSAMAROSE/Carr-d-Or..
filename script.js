// تطبيق تأثيرات الحركة عند التفاعل مع المشاريع والخدمات
document.querySelectorAll('.project-card, .service-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.1)';
    });
});

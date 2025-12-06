document.addEventListener("DOMContentLoaded", function() {
    // 監測所有要動畫的元素
    const targets = document.querySelectorAll('.intro-txtcontent, .product-item');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('animate'); // 加上 animate class 播放動畫
                observer.unobserve(entry.target); // 動畫只播放一次
            }
        });
    }, { threshold: 0.2 }); // 元素 20% 可見就觸發

    targets.forEach(target => {
        observer.observe(target);
    });
});


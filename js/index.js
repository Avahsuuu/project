// document.addEventListener("DOMContentLoaded", function() {
//     // 監測所有要動畫的元素
//     const targets = document.querySelectorAll('.intro-txtcontent, .product-item');

//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if(entry.isIntersecting) {
//                 entry.target.classList.add('animate'); // 加上 animate class 播放動畫
//                 observer.unobserve(entry.target); // 動畫只播放一次
//             }
//         });
//     }, { threshold: 0.2 }); // 元素 20% 可見就觸發

//     targets.forEach(target => {
//         observer.observe(target);
//     });
// });


// 點擊換圖


document.addEventListener('DOMContentLoaded', function() {
    // 1. 獲取所有相關元素
    const items = document.querySelectorAll('.reviews-info-list .info-item');
    const prevArrow = document.querySelector('.arrow-icon-1');
    const nextArrow = document.querySelector('.arrow-icon-2');

    // 如果沒有評論項目，則停止執行
    if (items.length === 0) return;

    // 2. 追蹤當前顯示的項目索引 (從 0 開始)
    let currentIndex = 0; 
    
    // 確保第一個項目有 active class (如果前面 HTML 沒加，這裡補上)
    items[currentIndex].classList.add('active');

    // 3. 定義切換函數
    function showItem(index) {
        // 移除所有項目的 active class
        items.forEach(item => {
            item.classList.remove('active');
        });
        
        // 給新的項目添加 active class
        items[index].classList.add('active');
        currentIndex = index; // 更新當前索引
    }

    // 4. 處理「下一則」箭頭點擊
    nextArrow.addEventListener('click', function() {
        // 計算下一個索引
        // % items.length 確保索引在達到尾部後會繞回第一個 (循環)
        const nextIndex = (currentIndex + 1) % items.length; 
        showItem(nextIndex);
    });

    // 5. 處理「上一則」箭頭點擊
    prevArrow.addEventListener('click', function() {
        // 計算上一個索引
        // (currentIndex - 1 + items.length) % items.length 確保索引在達到開頭後會繞回最後一個 (循環)
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(prevIndex);
    });
});


/*淡入效果*/
document.addEventListener('DOMContentLoaded', () => {

    const fadeTarget = document.querySelector('.fade-feature');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.25
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    observer.observe(fadeTarget);

});




//左右動畫//
document.addEventListener('DOMContentLoaded', () => {
    const fadeServices = document.querySelectorAll('.fade-service');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.25
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // 只動畫一次
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);
    fadeServices.forEach(el => observer.observe(el));
});




//文字//
document.addEventListener('DOMContentLoaded', () => {
    const fadeTexts = document.querySelectorAll('.fade-text');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.25
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);
    fadeTexts.forEach(el => observer.observe(el));
});
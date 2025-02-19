// 搜索功能
document.getElementById('search-box').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
                var url = document.getElementById('search-box').value;
                if (url) {
                    if (!/^https?:\/\//i.test(url)) {
                        url = 'http://' + url;
                    }
                    window.location.href = url;
                }
            }
});

// 获取访问次数并更新页面
        fetch('/visit')
            .then(response => response.json())
            .then(data => {
                document.getElementById('visit-count').textContent = data.count;
            });
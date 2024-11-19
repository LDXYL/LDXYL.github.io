/*!
    * Start Bootstrap - SB Admin v7.0.2 (https://startbootstrap.com/template/sb-admin)
    * 版权所有 2013-2021 Start Bootstrap
    * 根据 MIT 许可证授权 (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */


// 当 DOM 内容完全加载后执行以下代码
window.addEventListener('DOMContentLoaded', event => {
    // 获取 ID 为 'sidebarToggle' 的元素，该元素用于切换侧边栏
    const sidebarToggle = document.body.querySelector('#sidebarToggle');

    // 检查侧边栏切换按钮是否存在
    if (sidebarToggle) {
        // 如果存在，为侧边栏切换按钮添加点击事件监听器
        sidebarToggle.addEventListener('click', event => {
            // 阻止默认事件行为
            event.preventDefault();

            // 切换 body 元素的 'sb-sidenav-toggled' 类
            document.body.classList.toggle('sb-sidenav-toggled');

            // 将侧边栏的当前状态（展开或收起）存储在本地存储中
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }
});

window.addEventListener('DOMContentLoaded', event => {

    // 当 DOM 内容完全加载后执行以下代码

    // Simple-DataTables 是一个轻量级的数据表格库
    // 项目地址：https://github.com/fiduswriter/Simple-DataTables/wiki

    // 获取 ID 为 'datatablesSimple' 的表格元素
    const datatablesSimple = document.getElementById('datatablesSimple');

    // 检查表格元素是否存在
    if (datatablesSimple) {
        // 如果存在，则使用 Simple-DataTables 初始化表格，并设置中文标签
        new simpleDatatables.DataTable(datatablesSimple, {
            labels: {
                placeholder: "会员号/卡号 搜索...", // 搜索框占位符
                perPage: "条/页", // 每页显示条数选择框
                noRows: "没有数据", // 没有数据时的提示
                info: "显示 {start} 到 {end} 条，共 {rows} 条", // 分页信息
                noResults: "没有匹配的结果", // 搜索无结果时的提示
            }
        });
    }
});
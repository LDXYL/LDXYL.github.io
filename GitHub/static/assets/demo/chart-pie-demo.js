// 设置图表的默认字体和颜色，模仿 Bootstrap 的默认样式

Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// 饼图示例
var ctx = document.getElementById("myPieChart"); // 获取画布元素
var myPieChart = new Chart(ctx, {
  type: 'pie', // 图表类型为饼图
  data: {
    labels: ["Blue", "Red", "Yellow", "Green"], // 饼图的标签，表示不同的颜色
    datasets: [{
      data: [12.21, 15.58, 11.25, 8.32], // 数据点的具体数值，表示每种颜色的占比
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'], // 每种颜色的背景颜色
    }],
  },
});
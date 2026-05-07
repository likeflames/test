<script setup lang="ts" name="ContributeChart">
import * as echarts from "echarts";
import { ref, watch, nextTick, computed, useTemplateRef, onMounted } from "vue";
import { useData } from "vitepress";
import { formatDate, usePosts, useIntersectionObserver } from "vitepress-theme-teek";

const { isDark } = useData();
const posts = usePosts();

// 今天
const today = formatDate(new Date(), "yyyy-MM-dd");
// 获取一年前的时间
const beforeOnYear = formatDate(new Date(new Date().getTime() - 364 * 24 * 60 * 60 * 1000), "yyyy-MM-dd");
// 移动端：最近 3 个完整月份（3月1日 → 5月31日）
const now = new Date();
const padN = (n: number) => String(n).padStart(2, "0");
const mobileRange = [
  `${now.getFullYear()}-${padN(now.getMonth() + 1 - 2)}-01`,
  `${now.getFullYear()}-${padN(now.getMonth() + 1)}-${padN(new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate())}`,
] as [string, string];

// 贡献图数据
const contributeList = computed(() => {
  const contributeObject = ref({});

  posts.value.sortPostsByDate.forEach(item => {
    if (!item.date) return;

    const date = item.date.substring(0, 10);
    if (contributeObject.value[date]) contributeObject.value[date]++;
    else contributeObject.value[date] = 1;
  });

  const contributeDays = Object.keys(contributeObject.value);

  return contributeDays.map((item: string) => [item, contributeObject.value[item]]).reverse();
});

const chartRef = useTemplateRef("chartRef");
const contributeChart = ref();

const { create } = useIntersectionObserver(
  chartRef,
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 使用 requestAnimationFrame 确保在下一帧执行
        requestAnimationFrame(() => {
          try {
            renderChart(contributeList.value);
          } catch (error) {
            console.error("初始化动画失败:", error);
          }
        });
      }
    });
  },
  0.1
);

// Echarts 配置项
const option = {
  tooltip: {
    formatter: function (params) {
      return `${params.value[0]} <br/> ${params.value[1]} 篇文章`;
    },
  },
  visualMap: {
    show: false,
    min: 0,
    max: 5,
    inRange: {
      color: ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127", "#196127"],
    },
  },
  calendar: {
    left: "center",
    itemStyle: {
      color: "#ebedf0",
      borderWidth: 5,
      borderColor: "#fff",
      shadowBlur: 0,
    },
    cellSize: [20, 20],
    splitLine: true,
    dayLabel: {
      firstDay: 7,
      nameMap: "ZH",
      color: "#3c3c43",
    },
    monthLabel: {
      color: "#3c3c43",
    },
    yearLabel: {
      show: true,
      position: "right",
    },
    silent: {
      show: false,
    },
  },
  series: {
    type: "heatmap",
    coordinateSystem: "calendar",
    data: [],
  },
};

// 渲染贡献图
const renderChart = (data: any) => {
  option.calendar.itemStyle.borderColor = isDark.value ? "#1b1b1f" : "#fff";
  option.calendar.itemStyle.color = isDark.value ? "#787878" : "#ebedf0";

  option.calendar.range = window.innerWidth < 768 ? mobileRange : [beforeOnYear, today];
  // 移动端隐藏年份标签（短范围下显示异常）
  if (window.innerWidth < 768) {
    option.calendar.yearLabel.show = false;
  } else {
    option.calendar.yearLabel.show = true;
  }
  if (contributeChart.value) echarts.dispose(contributeChart.value);
  if (chartRef.value) contributeChart.value = echarts.init(chartRef.value);

  option.series.data = data;
  contributeChart.value?.setOption(option);
};

watch(
  contributeList,
  async newValue => {
    await nextTick();
    renderChart(newValue);
  },
  { flush: "post" }
);

watch(isDark, async () => {
  await nextTick();
  renderChart(contributeList.value);
});

onMounted(() => {
  if (chartRef.value) create();
});
</script>

<template>
  <div class="contribute__chart">
    <div class="chart__box" ref="chartRef"></div>
  </div>
</template>

<style>
.tk-article-page.tk-archives {
  width: 1220px;
}

.tk-archives .contribute__chart {
  width: 100%;
  height: 260px;
}

.tk-archives .contribute__chart .chart__box {
  margin: auto;
  width: 100%;
  height: 100%;
}
</style>

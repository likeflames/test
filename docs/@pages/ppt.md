---
title: PPT 演示
permalink: /ppt
layout: page
article: false
sidebar: false
---

# PPT 演示

<div class="ppt-card" onclick="location.href='/ppt/tutorial.html'">
  <div class="ppt-card-icon">🎓</div>
  <div class="ppt-card-body">
    <h3>从零搭建个人网站 - 完整教程</h3>
    <p>涵盖初始化、配置、部署、评论系统、移动适配等全部内容。</p>
    <span class="ppt-card-link">打开 →</span>
  </div>
</div>

<div class="ppt-card" onclick="location.href='/ppt/advanced.html'" style="margin-top:12px">
  <div class="ppt-card-icon">🚀</div>
  <div class="ppt-card-body">
    <h3>HTML PPT 进阶技巧</h3>
    <p>过渡动画、代码高亮、图表、深色/浅色切换、QR码等高级功能。</p>
    <span class="ppt-card-link">打开 →</span>
  </div>
</div>

<div class="ppt-card" onclick="location.href='/ppt/how-to.html'" style="margin-top:12px">
  <div class="ppt-card-icon">📖</div>
  <div class="ppt-card-body">
    <h3>如何制作 HTML PPT</h3>
    <p>从创建文件到推送上线的完整教程。</p>
    <span class="ppt-card-link">打开 →</span>
  </div>
</div>

<div class="ppt-card" onclick="location.href='/ppt/test.html'" style="margin-top:12px">
  <div class="ppt-card-icon">📄</div>
  <div class="ppt-card-body">
    <h3>测试演示</h3>
    <p>测试页面，用于验证 PPT 展示功能是否正常。</p>
    <span class="ppt-card-link">打开 →</span>
  </div>
</div>

<style>
.ppt-card {
  display: flex; gap: 20px; align-items: center;
  background: var(--vp-c-bg-soft); border-radius: 10px;
  padding: 20px 24px; cursor: pointer;
  transition: all .3s; border: 1px solid var(--vp-c-divider);
}
.ppt-card:hover {
  transform: translateY(-2px); box-shadow: var(--vp-shadow-2);
  border-color: var(--vp-c-brand-1);
}
.ppt-card-icon { font-size: 36px; flex-shrink: 0; }
.ppt-card-body h3 { margin: 0 0 6px; font-size: 18px; }
.ppt-card-body p { margin: 0 0 8px; color: var(--vp-c-text-2); font-size: 14px; }
.ppt-card-link { color: var(--vp-c-brand-1); font-size: 14px; font-weight: 500; }
</style>

---
title: 笔记
permalink: /notes
layout: page
article: false
sidebar: false
---

# 笔记

> 以下笔记在 Notion 中持续维护，点击卡片在新标签页打开查看。

<a class="note-card" href="https://perpetual-canid-a04.notion.site/LEM-P2P-3e1bc0c0dcb981bf81f7fcbd7d02564f" target="_blank" rel="noopener noreferrer">
  <div class="note-card-icon">🔬</div>
  <div class="note-card-body">
    <div class="note-card-meta">
      <span class="note-card-tag">研究笔记</span>
      <span class="note-card-external">Notion ↗</span>
    </div>
    <h3>局部能源市场（LEM）与 P2P 能源竞价机制研究</h3>
    <p>LEM 与 P2P 能源交易的机制设计、文献综述、研究方向与学习路径，涵盖双向拍卖、Nash 议价、分布式出清、区块链与 AI 竞价等核心方法。</p>
    <span class="note-card-cta">打开笔记 →</span>
  </div>
</a>

<a class="note-card" href="https://perpetual-canid-a04.notion.site/3e2bc0c0dcb981dcbbacf664c48a8380" target="_blank" rel="noopener noreferrer">
  <div class="note-card-icon">🏆</div>
  <div class="note-card-body">
    <div class="note-card-meta">
      <span class="note-card-tag">研究笔记</span>
      <span class="note-card-external">Notion ↗</span>
    </div>
    <h3>全国大学生节能减排竞赛：历届特等奖获奖作品与获奖规律研究</h3>
    <p>梳理 2008–2026 年历届全国特等奖代表作品，从选题方向、学校格局、作品形式与评审维度归纳获奖规律，附备赛启示与信息来源。</p>
    <span class="note-card-cta">打开笔记 →</span>
  </div>
</a>

<a class="note-card" href="https://app.notion.com/p/3e2bc0c0dcb981a5b33ec3b30a296cbf" target="_blank" rel="noopener noreferrer">
  <div class="note-card-icon">⚡</div>
  <div class="note-card-body">
    <div class="note-card-meta">
      <span class="note-card-tag">研究笔记</span>
      <span class="note-card-external">Notion ↗</span>
    </div>
    <h3>虚拟电厂聚合入市 × MARL：中国市场应用前景深度调研</h3>
    <p>聚焦 VPP 聚合入市这一中国最具落地性的方向，系统分析 MARL 与 VPP 调度/竞价结合的市场空间、技术架构、客户主体与商业模式。涵盖政策时间线、市场规模、VPP 运营商业务与报价方法痛点、三梯队客户画像、产品定位与四步落地路径。</p>
    <span class="note-card-cta">打开笔记 →</span>
  </div>
</a>

<style>
.note-card {
  display: flex;
  gap: 24px;
  align-items: flex-start;
  background: var(--vp-c-bg-soft);
  border-radius: 14px;
  padding: 28px 30px;
  text-decoration: none;
  color: inherit;
  transition: all .3s cubic-bezier(.4,0,.2,1);
  border: 1px solid var(--vp-c-divider);
  position: relative;
  overflow: hidden;
}
.note-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 4px; height: 100%;
  background: linear-gradient(180deg, #0f766e, #14b8a6);
  opacity: 0;
  transition: opacity .3s;
}
.note-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--vp-shadow-2);
  border-color: var(--vp-c-brand-1);
}
.note-card:hover::before { opacity: 1; }
.note-card-icon {
  font-size: 42px;
  flex-shrink: 0;
  line-height: 1;
  padding-top: 4px;
}
.note-card-body { flex: 1; min-width: 0; }
.note-card-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}
.note-card-tag {
  font-size: 12px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 20px;
  background: linear-gradient(135deg, #ccfbf1, #99f6e4);
  color: #115e59;
  letter-spacing: .3px;
}
.note-card-external {
  font-size: 12px;
  color: var(--vp-c-text-3);
  font-weight: 500;
}
.note-card-body h3 {
  margin: 0 0 8px;
  font-size: 19px;
  font-weight: 700;
  line-height: 1.4;
}
.note-card-body p {
  margin: 0 0 14px;
  color: var(--vp-c-text-2);
  font-size: 14.5px;
  line-height: 1.75;
}
.note-card-cta {
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: gap .2s;
}
.note-card:hover .note-card-cta { gap: 8px; }
</style>

---
title: C27｜Finerenone vs Spironolactone 與第一次 AF 紀錄
aliases:
  - C27
  - Finerenone AF TriNetX
  - TriNetX 競賽
tags:
  - TriNetX
  - 研究設計
  - Target trial emulation
cssclasses:
  - hide-listing
---

> [!abstract] 一句話重點
> - **問題**：沒有 heart failure 的 T2DM＋CKD 病人，已經在用 ACEi／ARB，要再加 MRA 時，**finerenone 和 spironolactone 哪個之後比較少出現 AF**？
> - **設計**：TriNetX US Collaborative Network，**==active-comparator new-user design==**（模擬 target trial），1:1 PSM 後每組 780 人，追蹤 2 年
> - **結果**：finerenone 組第一次被記錄 AF 或 atrial flutter 較少，**==HR 0.49（95% CI 0.26–0.93）==**，day 730 KM 機率 2.25% vs 4.07%
> - **但是**：差距**==大多在前 90 天==**就出現，**==all-cause death 也少了一半（HR 0.51）==** → 選藥差異（residual confounding）與偵測差異（detection bias）都可能是原因
> - **結論只能寫到**：finerenone 起始和較少的第一次 AF 紀錄「**有關**」，**==不能說 finerenone 預防 AF==**

## 🎯 30 秒講完這篇

<div class="oncall">
<div class="oc-start">T2DM＋CKD、用過 ACEi／ARB、沒有 HF 也沒有 AF → 醫師決定加一種 MRA</div>

<div class="oc-q"><span class="oc-n">1</span><div><span class="oc-qt">為什麼做？（Introduction）</span><small>已知 → 未知 → 這篇做什麼</small></div></div>
<div class="oc-split three">
<div class="oc-box b"><span class="oc-ans">已知</span><br/>DM、CKD 都增加 AF；AF 帶來死亡、HF、中風、ESKD；finerenone 在 RCT（<b>和 placebo 比</b>）AF 較少</div>
<div class="oc-box a"><span class="oc-ans">未知</span><br/>RCT 沒有和 spironolactone 比；真實世界比較多看心腎結局，看 AF 的都是<b>已有心臟病</b>的族群</div>
<div class="oc-box g"><span class="oc-ans">這篇</span><br/><b>沒有 HF</b> 的 T2DM 腎病病人，<b>兩種 MRA 直接比</b>第一次 AF 紀錄</div>
</div>

<div class="oc-q"><span class="oc-n">2</span><div><span class="oc-qt">怎麼做？（Methods）</span><small>每一個設計選擇都在對付一種偏差</small></div></div>
<div class="oc-check">
<div><b>Active comparator</b>：兩組都是「決定加 MRA」的人 → 減少 confounding by indication</div>
<div><b>New user</b>：都從第一次處方日（time zero）起算 → 避免 prevalent user bias</div>
<div><b>排除 HF</b>：不然 spironolactone 組會塞滿 HF 病人</div>
<div><b>排除 spironolactone 的其他用途</b>：resistant HTN、hyperaldosteronism、水腫、肝硬化、antiandrogen</div>
<div><b>1:1 PSM</b>（354 個變項）→ 配對後 SMD 全部 &lt; 0.10</div>
<div><b>追蹤 2 年</b>：在「追得夠久、事件夠多」和「人數夠、換藥少」之間取捨</div>
</div>

<div class="oc-q"><span class="oc-n">3</span><div><span class="oc-qt">發現什麼？（Results）</span><small>主結果 → 但是 → 再檢查</small></div></div>
<div class="oc-rx">
<div class="oc-rxh">📊 結果三層次</div>
<div class="oc-rr"><div class="oc-k k-g">1</div><div class="oc-if"><b>主結果</b><br/>Table 2、Figure 2</div><div class="oc-drug">AF 14 vs 28 人，<b>HR 0.49（0.26–0.93）</b>，P = 0.026｜day 730：2.25% vs 4.07%（差 −1.82 個百分點）</div></div>
<div class="oc-rr"><div class="oc-k k-r">2</div><div class="oc-if"><b>警訊</b><br/>Figure 2、Table 2</div><div class="oc-drug">差距<b>集中在前 90 天</b>（PH test P = 0.015）｜<b>Death HR 0.51</b>，和 AF 幾乎一樣大 → 兩組預後可能本來就不同</div></div>
<div class="oc-rr"><div class="oc-k k-a">3</div><div class="oc-if"><b>敏感度分析</b><br/>Figure 3、Table S4</div><div class="oc-drug">有結果的 5 個 alternative analyses HR 0.45–0.63，方向一致；排除 thiazide、排除 BNP 升高時 <b>CI 包含 1</b>｜E-value 3.49，但 <b>CI 上限只要 1.35</b></div></div>
<div class="oc-rr"><div class="oc-k k-b">4</div><div class="oc-if"><b>偏差檢查</b><br/>Figure 4、Table S5、negative control</div><div class="oc-drug"><b>前 30 天 finerenone 組看診較少</b>（79.4% vs 83.5%）、驗血鉀較少 → 早期 AF 可能較晚被記錄｜Negative control 沒有明確差異，但 CI 很寬</div></div>
</div>

<div class="oc-q"><span class="oc-n">4</span><div><span class="oc-qt">代表什麼？（Discussion）</span><small>四種解釋都要談</small></div></div>
<div class="oc-split three">
<div class="oc-box g"><span class="oc-ans">真的藥效？</span><br/>和 RCT 方向一致，但<b>幾週內就少一半</b>很難用藥效解釋</div>
<div class="oc-box r"><span class="oc-ans">選藥差異／偵測差異？</span><br/>死亡也少一半、前 30 天看診較少、未診斷的 HF 或難控的 HTN 可能偏向開 spironolactone</div>
<div class="oc-box a"><span class="oc-ans">不精確？</span><br/>只有 <b>42 個事件</b>，CI 很寬；6 個 alternative analyses 因事件 ≤ 10 看不到結果</div>
</div>
<div class="oc-foot">結論：<b>association</b>，不是 prevention；不能建議為了降低 AF 而改選 finerenone</div>
<div class="oc-note">依 C27 教學資料包整理，自製</div>
</div>

## 📚 分篇

<div class="af-cards">
<a class="af-card internal" href="/trinetx/c27-finerenone-af/c27-1-idea">
<div class="af-num">①</div>
<div class="af-body"><div class="af-title">研究發想（寫 Introduction）</div><div class="af-desc">臨床場景、已知與未知、PICO、每個設計選擇的理由、題目成立前的四個問題、事前估算人數與事件數</div><div class="af-cover">資料包第一部分</div></div>
</a>
<a class="af-card internal" href="/trinetx/c27-finerenone-af/c27-2-design">
<div class="af-num">②</div>
<div class="af-body"><div class="af-title">收案與分析（寫 Methods）</div><div class="af-desc">Index date、納入與排除條件的時間窗、人數怎麼減少、PSM 設定、主要與次要結局、alternative analyses、negative control、TriNetX 遮蔽規則</div><div class="af-cover">Figure 1｜Table S2</div></div>
</a>
<a class="af-card internal" href="/trinetx/c27-finerenone-af/c27-3-results">
<div class="af-num">③</div>
<div class="af-body"><div class="af-title">讀懂主文圖表（寫 Results）</div><div class="af-desc"><b>先懂 7 個統計概念</b>，再逐張看 Table 1、Table 2、Figure 2、Figure 3、Figure 4：用意、怎麼看、重點數字、寫作提醒</div><div class="af-cover">Table 1、2｜Figure 2、3、4</div></div>
</a>
<a class="af-card internal" href="/trinetx/c27-finerenone-af/c27-4-supplement">
<div class="af-num">④</div>
<div class="af-body"><div class="af-title">補充資料</div><div class="af-desc">Method S1–S2、Figure S1（次要結局 KM）、Figure S2（追蹤時間）、Table S1–S5（TARGET checklist、target trial 規格、negative control、追蹤期間描述）</div><div class="af-cover">Figure S1、S2｜Table S2、S4、S5</div></div>
</a>
<a class="af-card internal" href="/trinetx/c27-finerenone-af/c27-5-discussion">
<div class="af-num">⑤</div>
<div class="af-body"><div class="af-title">故事線、Discussion 與上台準備</div><div class="af-desc">圖表怎麼串成一個故事、Discussion 架構、limitations、<b>評審可能問的問題</b>、名詞小抄</div><div class="af-cover">資料包第五、六部分</div></div>
</a>
</div>

## 建議的準備順序

1. 先看上面「30 秒講完這篇」，能用自己的話講出來
2. 讀 ①，試著寫 Introduction：已知什麼、還不知道什麼、這篇要做什麼
3. 讀 ②，試著寫 Methods；先填 Table S2（target trial 規格），它就是 Methods 的骨架
4. 讀 ③ 開頭的 **7 個概念**，再照順序看圖表、寫 Results
5. 用 ⑤ 的故事線安排 Discussion，練習回答評審問題

## 參考資料

- C27 教學資料包：First recorded atrial fibrillation or flutter after finerenone versus spironolactone initiation in type 2 diabetes and kidney disease without recorded heart failure（研究發想與圖表解說，2026-11-21 版）。參考資料庫：`TriNetX/C27_教學資料包_研究發想與圖表解說.pdf`
- 資料來源：TriNetX US Collaborative Network（去識別化 EHR）

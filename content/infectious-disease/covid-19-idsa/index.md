---
title: 新冠肺炎 COVID-19（IDSA 指引）
aliases:
  - COVID-19
  - SARS-CoV-2
  - 新冠肺炎
  - IDSA COVID-19 guideline
  - COVID-19 指引
tags:
  - 感染科
  - COVID-19
  - 指引圖表
cssclasses:
  - hide-listing
---

> [!abstract] 一句話重點
> **診斷**用 **NAAT（strong）**；快篩陽性可信、**陰性不能排除**（5 天後敏感度只剩 54%），沒有 NAAT 就**重複快篩**；**抗體不診斷急性感染**，只在 **MIS-C** 有用。**治療看氧氣**：**不需氧＋高風險**（**≥ 75 歲、嚴重免疫抑制**，或好幾項 65–74 歲、DM、HF、obesity 等）→ **==5 天內 nirmatrelvir/ritonavir 首選==**，DDI 不行改 **remdesivir 3 天**，最後才 molnupiravir；**沒有危險因子不給藥**、**不給類固醇**。**需氧** → **==dexamethasone 6 mg × 10 天＋remdesivir 5 天==**；**持續惡化或 HFNC／NIV／IMV** → 再加 **baricitinib 或 tocilizumab 擇一**。**感控**：🆕 CDC 現行要求照護時一律 **N95＋gown＋gloves＋eye protection**，**AGP 盡量在負壓室**；**不要用 PCR 轉陰決定解除隔離**。

本系列依 **IDSA COVID-19 living guidelines** 的 5 個部分整理：治療（拆成 ① 門診、② 住院兩篇）、③ 醫護人員感染預防、④ 分子檢測、⑤ 抗原快篩、⑥ 血清抗體，加上 ⑦ 內專考點。各部分最後更新時間不同（治療 2026-09、分子檢測 2023-09、抗原 2022-12、血清 2024-02、感染預防 2021-11），已被新規範取代的地方用 🆕 框標出。

## 🌳 值班決策流程：照順序回答 5 個問題

<div class="oncall">
<div class="oc-start">懷疑 COVID-19：fever、cough、sore throat、anosmia、dyspnea，或有確診接觸；也包括因其他原因住院、入院時驗到陽性的病人</div>

<div class="oc-time">
<div class="oc-tt">⏱ 先記住：驗什麼？藥什麼時候給？</div>
<div class="oc-tr oc-th"><div>情境</div><div>🧪 檢驗</div><div>💊 治療</div></div>
<div class="oc-tr"><div class="oc-sit">有症狀、門診</div><div class="ac-now" data-l="🧪"><b>NAAT</b>（AN、MT、唾液都可，可自採）；沒有或要等 &gt; 1 天 → 快篩，<b>陰性就重複</b></div><div class="yes" data-l="💊">高風險：<b>Paxlovid 5 天內</b>、remdesivir 7 天內</div></div>
<div class="oc-tr"><div class="oc-sit"><b>住院、需氧</b></div><div class="ac-now" data-l="🧪">NAAT；考慮細菌合併感染（入院時只約 1–4%）</div><div class="yes" data-l="💊"><b>Dexamethasone 6 mg＋remdesivir 5 天</b></div></div>
<div class="oc-tr"><div class="oc-sit">無症狀、<b>有暴露</b>（24 h 內累計 ≥ 15 分鐘）</div><div class="wait" data-l="🧪"><b>暴露後 ≥ 5 天</b>驗 NAAT；一有症狀立即驗</div><div class="wait" data-l="💊">陽性再依風險決定</div></div>
<div class="oc-tr"><div class="oc-sit">無症狀、<b>入院或術前</b></div><div class="wait" data-l="🧪"><b>不常規篩檢</b>；移植、CAR-T 前或社區流行高可考慮</div><div class="wait" data-l="💊">—</div></div>
<div class="oc-tr"><div class="oc-sit">得過 COVID，要<b>開刀或解除隔離</b></div><div class="wait" data-l="🧪"><b>不要重驗 NAAT</b>（RNA 可長期陽性）</div><div class="wait" data-l="💊">依天數與症狀解除（見 ⑤ 步）</div></div>
<div class="oc-tf">❌ 發病 2 週內驗抗體｜❌ NAAT 陰性但懷疑高就去驗 IgG｜❌ 用 Ct 值判斷傳染力｜✅ <b>MIS-C</b> 才 IgG＋NAAT 一起驗</div>
</div>

<div class="oc-q"><span class="oc-n">1</span><div><span class="oc-qt">確診了嗎？選對檢驗</span><small>Specificity 都接近 100%，差在敏感度與時機</small></div></div>
<div class="oc-split three">
<div class="oc-box g"><span class="oc-ans">NAAT（首選）</span><br/>Sensitivity <b>97%</b>；rapid NAAT 96%<br/>第一次陰性但<b>症狀新出現或惡化、檢體採不好</b> → <b>24–48 h 重驗</b></div>
<div class="oc-box a"><span class="oc-ans">抗原快篩</span><br/>有症狀 <b>5 天內 89%</b>、5 天後 <b>54%</b>、無症狀暴露 <b>63%</b><br/><b>陽性可信；陰性 → NAAT 或隔天再篩</b>（兩次可達 98%）</div>
<div class="oc-box r"><span class="oc-ans">抗體（急性期別用）</span><br/>第 1 週 24–35%、第 2 週 64–74%<br/>證明過去感染：<b>3–5 週</b>、<b>anti-N</b>（疫苗只有 anti-S）、<b>不單驗 IgM</b></div>
</div>

<div class="oc-q"><span class="oc-n">2</span><div><span class="oc-qt">多嚴重？看氧氣</span><small>決定走門診抗病毒（③）還是住院免疫調節（④）</small></div></div>
<div class="oc-split three">
<div class="oc-box g"><span class="oc-ans">Mild–moderate</span><br/><b>不需氧</b>，room air SpO₂ &gt; 94%<br/>（即使因其他原因住院也算）→ 往下 <b>③</b></div>
<div class="oc-box a"><span class="oc-ans">Severe</span><br/><b>SpO₂ ≤ 94%</b> room air 或 <b>low-flow O₂</b><br/>→ 跳到 <b>④</b></div>
<div class="oc-box r"><span class="oc-ans">Critical</span><br/><b>HFNC、NIV</b>；或 <b>IMV、ECMO</b><br/>→ 跳到 <b>④</b></div>
</div>

<div class="oc-q"><span class="oc-n">3</span><div><span class="oc-qt">不需氧：住院風險有多高？</span><small>1 項 Table 1，或「好幾項」Table 2 ＝ 高風險（預估住院 ≥ 6%）</small></div></div>
<div class="oc-check">
<div><b>Table 1｜High risk</b><br/><b>年齡 ≥ 75</b>、SOT、<b>HSCT &lt; 2 年</b>、heme malignancy 治療中、<b>HIV CD4 &lt; 200</b>、GVHD、primary immunodeficiency</div>
<div><b>Table 1｜藥物</b><br/><b>Rituximab 等 B-cell depletion、CAR-T</b>（12 個月內）、BTK inhibitor、abatacept、anthracycline、<b>prednisone ≥ 20 mg ≥ 4 週</b></div>
<div><b>Table 2｜Increased</b><br/><b>65–74 歲</b>、ASCVD、<b>HF</b>、chronic lung disease、asthma、<b>DM</b>、<b>obesity</b>、cirrhosis、<b>ESRD</b>、dementia、懷孕、抽菸史、HIV CD4 &gt; 200</div>
<div><b>Table 2｜藥物</b><br/>Anti-IL-6、anti-IL-12/23、<b>prednisone 10–20 mg ≥ 4 週</b></div>
</div>
<div class="oc-split three">
<div class="oc-box r"><span class="oc-ans">High → 一定給</span><br/>Paxlovid 或 remdesivir（<b>strong</b>）</div>
<div class="oc-box a"><span class="oc-ans">Increased → 共享決策</span><br/>Paxlovid、remdesivir（conditional）；<b>不常規用 molnupiravir</b></div>
<div class="oc-box g"><span class="oc-ans">沒有危險因子 → 不給</span><br/>支持性治療；<b>不給類固醇、不給吸入型類固醇</b></div>
</div>

<div class="oc-q"><span class="oc-n">4</span><div><span class="oc-qt">開什麼？</span><small>由上往下問，<b>第一個符合就用那一列</b></small></div></div>
<div class="oc-rx">
<div class="oc-rxh">💊 由重到輕：第一個符合就停</div>
<div class="oc-rr"><div class="oc-k k-r">1</div><div class="oc-if"><b>IMV／ECMO</b></div><div class="oc-drug"><b>Dexamethasone 6 mg IV qd × 10 天</b>（strong）＋ <b>baricitinib 4 mg PO qd × 14 天</b> 或 <b>tocilizumab 8 mg/kg IV（≤ 800 mg）單次</b><br/><b>不新開 remdesivir</b>；vilobelimab 只在試驗中</div></div>
<div class="oc-rr"><div class="oc-k k-r">2</div><div class="oc-if"><b>HFNC／NIV</b>，或需氧且<b>類固醇下仍惡化</b></div><div class="oc-drug">Dexamethasone ＋ <b>baricitinib 或 tocilizumab 擇一</b>（不併用；baricitinib 在 HFNC/NIV 效益最大；tocilizumab 試驗收 CRP ≥ 75）<br/>兩者都沒有 → <b>abatacept 10 mg/kg（≤ 1 g）</b>或 <b>infliximab 5 mg/kg</b>；需氧未插管者加 remdesivir 5 天</div></div>
<div class="oc-rr"><div class="oc-k k-o">3</div><div class="oc-if"><b>需 low-flow O₂</b>（SpO₂ ≤ 94%）</div><div class="oc-drug"><b>Dexamethasone 6 mg IV/PO qd × 10 天或到出院</b>（替代：methylprednisolone 32 mg、prednisone 40 mg）<br/>＋ <b>remdesivir 200 mg IV D1、100 mg qd D2–5</b>（5 天優於 10 天；🆕 不需腎功能調整）</div></div>
<div class="oc-rr"><div class="oc-k k-a">4</div><div class="oc-if">不需氧、<b>高風險或 increased</b>，Paxlovid 可用</div><div class="oc-drug"><b>Nirmatrelvir/ritonavir × 5 天，症狀 5 天內</b><br/>eGFR ≥ 60：<b>300/100 mg q12h</b>｜30–&lt; 60：<b>150/100 mg q12h</b>｜&lt; 30 含洗腎：<b>D1 300/100 mg，D2–5 150/100 mg qd</b><br/>DDI：<b>statin 暫停</b>、<b>clopidogrel 不併用</b>、tacrolimus 等大幅上升、CYP3A 誘導劑禁用</div></div>
<div class="oc-rr"><div class="oc-k k-a">5</div><div class="oc-if">同上，但 <b>Paxlovid 因 DDI 不能用</b></div><div class="oc-drug"><b>Remdesivir 200 mg IV D1、100 mg D2–3</b>，<b>症狀 7 天內</b>，不需腎功能調整</div></div>
<div class="oc-rr"><div class="oc-k k-b">6</div><div class="oc-if">高風險，<b>前兩者都不行</b></div><div class="oc-drug"><b>Molnupiravir 800 mg PO q12h × 5 天</b>，5 天內；<b>≥ 18 歲、非住院、非孕婦</b>；說明 mutagenicity 與避孕</div></div>
<div class="oc-rr"><div class="oc-k k-g">7</div><div class="oc-if"><b>沒有危險因子</b></div><div class="oc-drug"><b>支持性治療</b>，不給抗病毒、不給類固醇</div></div>
<div class="oc-rf"><b>中重度免疫不全的 PrEP</b>：<b>pemivibart 4,500 mg IV q3 個月</b>（當地變異株仍敏感時，與疫苗間隔 ≥ 2 週）｜<b>Rebound</b> 0.8–6.6%，吃不吃藥都會發生，通常不住院｜<b>不合併兩種抗病毒藥</b></div>
</div>

<div class="oc-q"><span class="oc-n">5</span><div><span class="oc-qt">怎麼保護自己、何時解除隔離？</span><small>IDSA 2021 為最低標準；🆕 CDC 現行規範較嚴</small></div></div>
<div class="oc-dose">
<div><div class="oc-ct">一般照護</div>IDSA：外科口罩或 N95（strong）＋eye protection<br/>🆕 <b>CDC：N95 等級以上＋gown＋gloves＋eye protection</b>；單人房、關門</div>
<div><div class="oc-ct">AGP（插管、bronchoscopy、NIV、CPR）</div><b>N95 而非外科口罩（strong）</b>＋眼罩＋隔離衣＋手套；<b>盡量 AIIR</b>、限制人數<br/>N95 短缺：外加 face shield／外科口罩延長使用（strong）、再處理後重用</div>
<div><div class="oc-ct">解除隔離（CDC）</div>輕中度：<b>≥ 10 天＋退燒 24 h＋症狀改善</b>｜重症：<b>10–20 天</b>｜<b>中重度免疫不全：間隔 48 h 兩次陰性</b>（抗原或 NAAT）</div>
</div>

<div class="oc-foot">❌ 不需氧給 dexamethasone｜❌ Baricitinib＋tocilizumab 同時用｜❌ 插管後才開始 remdesivir｜❌ 沒有危險因子開 Paxlovid、molnupiravir｜❌ Paxlovid＋clopidogrel｜❌ HCQ、ivermectin、colchicine、lopinavir/r（strong 不建議）｜❌ 免疫正常住院病人用 convalescent plasma（strong）｜❌ 快篩陰性就排除｜❌ 用 PCR 轉陰決定解隔離或手術｜❌ AGP 只戴外科口罩</div>
<div class="oc-note">依 IDSA COVID-19 指引治療（2026-09-23 線上版；Table 1、2 依 Shumaker 2025）、感染預防（2021）、分子檢測（2023）、抗原（2022）、血清（2024）內容自製；🆕 標示 CDC 2023 感染管制規範與 FDA 2023 remdesivir 仿單</div>
</div>

## 📌 必看表：三種檢驗怎麼用

| | NAAT（PCR） | 抗原快篩 | 抗體 |
| --- | --- | --- | --- |
| **用途** | **急性診斷首選**（strong） | 急性診斷；NAAT 拿不到或太慢時 | **不診斷急性感染**；MIS-C、證明曾感染 |
| **Sensitivity** | **97%** | 有症狀 5 天內 **89%**、5 天後 **54%**、無症狀 **63%** | 第 1 週 24–35%、第 2 週 64–74%、第 3–8 週 73–97% |
| **Specificity** | 100% | 100% | 98–100%（疫苗、感染史會干擾） |
| **陰性怎麼辦** | 症狀新出現或惡化、採檢差 → **24–48 h 重驗** | **重複快篩或改 NAAT** | 症狀持續 → 重驗 NAAT、找其他病因 |
| **檢體** | NP、AN、MT、OP、唾液、漱口液；可自採 | 鼻腔；可自採（有無人看著都可） | 血清；選 **anti-N**、不單驗 IgM |
| **不要用在** | 入院、術前常規篩檢；**解除隔離**、術前重驗 | 大型集會前、學校職場定期篩（證據不足） | **發病 2 週內**；疫苗後常規追蹤；**決定是否追加疫苗** |

## 📌 必看表：SARS、MERS 與 COVID-19（內專愛考）

| | SARS-CoV（2002–03） | MERS-CoV（2012–） | SARS-CoV-2（2019–） |
| --- | --- | --- | --- |
| **受體** | **ACE2** | **==DPP4（CD26）==** | **==ACE2==**（spike RBD；TMPRSS2 切割） |
| **動物來源** | 蝙蝠 → 果子狸 | 蝙蝠 → **單峰駱駝**（生駱駝奶、肉） | 蝙蝠 →（中間宿主未定） |
| **症狀前傳染** | 少（症狀後才傳） | 少 | **顯著**（發病當天或之前最高） |
| **Case fatality** | 約 10% | **約 35%** | 遠較低（依年齡、疫苗） |
| **傳播** | 醫院群聚 | **醫院**與家庭群聚 | 社區大流行 |
| **治療** | 支持性 | 支持性 | 抗病毒＋免疫調節（本系列） |

## 分篇筆記

<div class="af-cards">
<a class="af-card internal" href="/infectious-disease/covid-19-idsa/covid-1-outpatient-antivirals">
<div class="af-num">①</div>
<div class="af-body"><div class="af-title">輕中度：門診抗病毒與預防</div><div class="af-desc">嚴重度分級、<b>Table 1／Table 2 風險分層</b>、nirmatrelvir/ritonavir（腎功能劑量、DDI、rebound）、remdesivir 3 天、molnupiravir、兒童、pemivibart PrEP</div><div class="af-cover">治療指引：Nirmatrelvir/r、Remdesivir（mild–moderate）、Molnupiravir、Pemivibart</div></div>
</a>
<a class="af-card internal" href="/infectious-disease/covid-19-idsa/covid-2-hospitalized">
<div class="af-num">②</div>
<div class="af-body"><div class="af-title">住院重症：免疫調節與不建議的藥</div><div class="af-desc"><b>Dexamethasone</b>、remdesivir 5 天、<b>baricitinib vs tocilizumab</b>、abatacept、infliximab、anakinra、vilobelimab、<b>不建議藥物總表</b>、細菌合併感染、MIS-C；🆕 FDA 2023 remdesivir 腎功能</div><div class="af-cover">治療指引：Glucocorticoids、JAK、IL-6 等章節</div></div>
</a>
<a class="af-card internal" href="/infectious-disease/covid-19-idsa/covid-3-infection-prevention">
<div class="af-num">③</div>
<div class="af-body"><div class="af-title">醫護人員感染預防</div><div class="af-desc">外科口罩 vs N95、眼部防護、<b>AGP 用 N95</b>、N95 短缺時的延長使用與重複使用；🆕 CDC 現行 PPE 與解除隔離</div><div class="af-cover">Part 2，建議 1–8</div></div>
</a>
<a class="af-card internal" href="/infectious-disease/covid-19-idsa/covid-4-molecular-diagnostics">
<div class="af-num">④</div>
<div class="af-body"><div class="af-title">分子檢測 NAAT</div><div class="af-desc">有症狀與無症狀的檢驗、<b>檢體選擇與自採</b>、rapid NAAT、何時重驗、<b>入院與術前不常規篩</b>、不用重驗解除隔離</div><div class="af-cover">Version 3.0，建議 1–12</div></div>
</a>
<a class="af-card internal" href="/infectious-disease/covid-19-idsa/covid-5-antigen">
<div class="af-num">⑤</div>
<div class="af-body"><div class="af-title">抗原快篩</div><div class="af-desc"><b>發病 5 天內 vs 5 天後</b>的敏感度、NAAT vs 快篩、<b>重複快篩</b>、無症狀暴露者、POC 與自採</div><div class="af-cover">Part 5，建議 1–10</div></div>
</a>
<a class="af-card internal" href="/infectious-disease/covid-19-idsa/covid-6-serology">
<div class="af-num">⑥</div>
<div class="af-body"><div class="af-title">血清抗體</div><div class="af-desc"><b>急性期不用</b>、<b>MIS-C 用 IgG＋NAAT</b>、anti-N vs anti-S、IgM 單驗不可靠、疫苗後不常規驗</div><div class="af-cover">Part 4，建議 1–6</div></div>
</a>
<a class="af-card internal" href="/infectious-disease/covid-19-idsa/covid-exam">
<div class="af-num">⑦</div>
<div class="af-body"><div class="af-title">內專考點</div><div class="af-desc">104–114 年冠狀病毒相關考古題 13 題（治療藥物機轉、ACE2／DPP4、MERS、症狀前傳染、AGP 防護），附 2 題模擬題</div><div class="af-cover">Influenza-COVID、Infection-Control 標籤</div></div>
</a>
</div>

## 依臨床情境找重點

### 門診或急診：確診、不需氧

- <a class="internal" href="/infectious-disease/covid-19-idsa/covid-1-outpatient-antivirals#先估住院風險table-1-與-table-2成人">風險分層 Table 1／Table 2</a>　<span class="af-where">①</span>
- <a class="internal" href="/infectious-disease/covid-19-idsa/covid-1-outpatient-antivirals#藥物交互作用">Paxlovid 交互作用</a>　<span class="af-where">①</span>

### 住院後氧氣需求增加

- <a class="internal" href="/infectious-disease/covid-19-idsa/covid-2-hospitalized#依氧氣需求的治療階梯依指引內容自製">依氧氣需求的治療階梯</a>　<span class="af-where">②</span>
- <a class="internal" href="/infectious-disease/covid-19-idsa/covid-2-hospitalized#baricitinib-vs-tocilizumab2025-10-14最新">Baricitinib vs tocilizumab</a>　<span class="af-where">②</span>

### 快篩陰性但很像、PCR 一直陽性

- <a class="internal" href="/infectious-disease/covid-19-idsa/covid-5-antigen#關鍵數字快篩的準確度">快篩敏感度與重複快篩</a>　<span class="af-where">⑤</span>
- <a class="internal" href="/infectious-disease/covid-19-idsa/covid-4-molecular-diagnostics#近期得過-covid-的人">PCR 陽性 ≠ 有傳染力</a>　<span class="af-where">④</span>

### 要插管、要開刀

- <a class="internal" href="/infectious-disease/covid-19-idsa/covid-3-infection-prevention#8-條建議">AGP 的 PPE</a>　<span class="af-where">③</span>
- <a class="internal" href="/infectious-disease/covid-19-idsa/covid-4-molecular-diagnostics#無症狀者">術前要不要篩</a>　<span class="af-where">④</span>

## 相關筆記

- [[infectious-disease/pneumonia/index|肺炎 Pneumonia（台灣肺炎診治指引 2018）]]
- [[pulmonology/emergent-airway-management|緊急呼吸道處置]]

## 參考資料

- Infectious Diseases Society of America. IDSA Guidelines on the Treatment and Management of Patients with COVID-19（living guideline，線上 2026-09-23 版）. https://www.idsociety.org/practice-guideline/covid-19-guideline-treatment-and-management/
- Shumaker AH, et al. 2025 Clinical Practice Guideline Update by the IDSA on the Treatment and Management of COVID-19: Antiviral Treatment for Mild to Moderate COVID-19 in Adults. *Clin Infect Dis* 2026;82(Suppl 3):i1–i17.
- Lynch JB, et al. IDSA Guidelines on Infection Prevention for Health Care Personnel Caring for Patients With Suspected or Known COVID-19. *Clin Infect Dis* 2021（Version 2.0.0）. https://www.idsociety.org/practice-guideline/covid-19-guideline-infection-prevention/
- Hayden MK, et al. IDSA Guidelines on the Diagnosis of COVID-19: Molecular Diagnostic Testing. Version 3.0, 2023. https://www.idsociety.org/practice-guideline/covid-19-guideline-diagnostics/
- Hayden MK, et al. IDSA Guidelines on the Diagnosis of COVID-19: Serologic Testing. *Clin Infect Dis* 2024. https://www.idsociety.org/practice-guideline/covid-19-guideline-serology/
- Hayden MK, et al. IDSA Guidelines on the Diagnosis of COVID-19: Antigen Testing. *Clin Infect Dis* 2023. https://www.idsociety.org/practice-guideline/covid-19-guideline-antigen-testing/
- Centers for Disease Control and Prevention. Infection Control Guidance: SARS-CoV-2（2023-05-08）.

---
title: 目標試驗模擬 Target Trial Emulation：方法學總整理
aliases:
  - Target trial emulation
  - TTE
  - Target trial
  - TARGET statement
tags:
  - TriNetX
  - 研究設計
  - Target trial emulation
  - 方法學
---

> [!abstract] 一句話重點
> - **兩步驟**：① 先寫出一個「能回答問題的 RCT」的 protocol（target trial）→ ② 用觀察資料**逐項模擬**這份 protocol
> - Target trial 不是夢想中的完美 RCT，而是**手上資料模擬得出來的 pragmatic trial**
> - 最核心的設計原則：**==eligibility、treatment assignment、time zero 三者同步==**——歷史上最有名的觀察研究失敗，都敗在這裡
> - 它能消除**設計偏差**（prevalent user、immortal time、selection），但**==消除不了資料偏差==**（unmeasured confounding、measurement error、loss to follow-up）
> - 和 RCT 唯一必然的差別是**沒有 randomization** → 要靠「conditional exchangeability」這個假設補上，所以 confounder 資料比統計方法重要
> - 報告照 **TARGET Statement（21 項）**；最大的貢獻是**讓因果問題不再模糊**

## 🧭 一張圖看懂

<div class="oncall">
<div class="oc-start">一個臨床因果問題：「A 藥 vs B 藥，哪個結局比較好？」→ 沒有 RCT，只有觀察資料</div>

<div class="oc-q"><span class="oc-n">1</span><div><span class="oc-qt">Specification：寫出 target trial 的 protocol</span><small>如果真的做 RCT，會怎麼設計？</small></div></div>
<div class="oc-check">
<div><b>Eligibility criteria</b>：誰可以進來</div>
<div><b>Treatment strategies</b>：比哪兩種策略（含何時開始、何時停）</div>
<div><b>Assignment</b>：隨機分派、不盲（pragmatic）</div>
<div><b>Follow-up</b>：從分派那刻（time zero）開始，到何時結束</div>
<div><b>Outcome</b>：結局是什麼、怎麼確認</div>
<div><b>Causal contrast</b>：intention-to-treat 還是 per-protocol</div>
<div><b>Identifying assumptions ＋ Analysis plan</b>：需要哪些假設、怎麼分析</div>
</div>

<div class="oc-q"><span class="oc-n">2</span><div><span class="oc-qt">Emulation：用觀察資料逐項模擬</span><small>每一項都要「對應到資料裡的哪個欄位」</small></div></div>
<div class="oc-split side">
<div class="oc-box g"><span class="oc-ans">✅ 做對可以避免：設計偏差</span><br/>Prevalent user bias、immortal time bias、用「之後才發生的事」選人造成的 selection bias</div>
<div class="oc-box r"><span class="oc-ans">❌ 做對也避免不了：資料偏差</span><br/>沒量到的 confounder、測量錯誤（代碼不準）、loss to follow-up、結局偵測不公平</div>
</div>

<div class="oc-q"><span class="oc-n">3</span><div><span class="oc-qt">報告：TARGET checklist（21 項）</span><small>Protocol 的 specification 和 emulation 並排寫出來</small></div></div>
<div class="oc-foot">結果：設計偏差被擋掉 → 大家可以<b>專心討論 confounding 等資料限制</b>；最大的價值是<b>把因果問題講清楚</b></div>
<div class="oc-note">依 Hernán & Robins 2016、Hernán 2022（JAMA）、Hernán 2025（Ann Intern Med）、TARGET 2025 整合，自製</div>
</div>

---

## 1. 先問：RCT 為什麼值得信任？

Hernán 2025 把 RCT 的可信度拆成三件事：

| # | RCT 做到的事 | 觀察研究能不能做到？ |
| --- | --- | --- |
| 1 | 問了一個**定義清楚**的因果問題（protocol 寫明了一切） | ✅ **可以**——觀察研究沒有理由問模糊的問題 |
| 2 | 事先規劃好**怎麼收資料** | ⚠️ 部分——資料已經存在，只能「對應」 |
| 3 | 用 **randomization** 讓兩組可比，**不需要無法驗證的假設** | ❌ **不行**——只能靠假設補 |

- **==Randomization 是 target trial 和它的觀察模擬之間「唯一必然」的差別==**
- 前兩件事觀察研究都可以學；過去太強調「沒有隨機分派」，反而忽略了「問題本身要問清楚」

> [!tip] 這一節的核心
> 觀察研究很多失敗**不是因為資料不好，而是因為問題沒問清楚、資料用錯了**。Target trial 就是一套「把問題問清楚、把資料用對」的鷹架（scaffolding）。

## 2. 什麼是 target trial emulation

**兩步驟**（四篇的共同定義）：

1. **Specification**：把因果問題寫成一個假想 RCT 的 protocol
2. **Emulation**：用觀察資料逐項模擬這份 protocol——找出符合條件的人、依資料把他們歸到某個策略、從 time zero 追到結局或追蹤結束、做和 RCT 相同的分析（**只多了一步：調整 baseline confounders 來模擬隨機分派**）

### Target trial 不是「理想的完美 RCT」

| 誤解 | 正確觀念 |
| --- | --- |
| Target trial＝研究者心中最理想的試驗 | Target trial＝**==手上資料「模擬得出來」的 RCT==** |
| 可以有 placebo、雙盲 | 觀察資料裡醫師和病人都知道用什麼藥 → **只能是不盲、pragmatic trial** |
| 結局可以照研究排程嚴格檢查 | 資料裡的結局是**照常規照護**被發現的 → target trial 的結局也要寫成「常規照護中被診斷」 |
| 先寫 protocol，再去找資料 | **Specification 和 emulation 是反覆來回的**：某個條件在資料裡對應不到，就要回頭修改 protocol |
| 新藥也可以模擬 | 只能模擬**臨床上真的有人在用**的治療策略 |

- 做法：列出資料能支持的幾個 target trials，挑**最接近理想試驗**的那一個，並寫明它和理想試驗**差在哪裡**

## 3. Protocol 的七個要素（核心表）

<div class="orig-fig" data-src="TriNetX/tte-originals/aje-2016-table-1.png" data-label="Hernán & Robins 2016 Table 1"></div>

<div class="orig-fig" data-src="TriNetX/tte-originals/annals-2025-figure.png" data-label="Hernán 2025 Figure"></div>

Hernán 2025 把 protocol 分成三層（比 2016 版更清楚）：

| 層次 | 包含 | 意義 |
| --- | --- | --- |
| **Causal estimand**（要估什麼） | 前 6 個要素 | 把因果問題**精確定義**；不用懂反事實的數學符號也能寫出來 |
| **Identifying assumptions**（要假設什麼） | 第 7 個要素前半 | 就算樣本無限大，也需要這些假設才能算出因果效應 |
| **Estimator**（怎麼算） | 第 7 個要素後半 | 統計分析方法與模型假設 |

依原表內容整理、合併四篇的重點：

| 要素 | Target trial 怎麼寫 | 觀察資料怎麼模擬 | 常見陷阱 |
| --- | --- | --- | --- |
| **1. Eligibility criteria** | 收案條件（人口學、診斷、疾病分期、治療史） | 每一條對應到資料欄位（例如 ICD 碼）；寫出**對應不完美**的地方 | **==不能用 baseline 之後才發生的事選人==**（例如「只收追蹤期間有用過藥的人」）；資料裡只有「做過檢查」沒有「結果」→ 條件可能做不到 |
| **2. Treatment strategies** | 比較的策略，包含劑量、開始與停止規則、容許的併用治療、**grace period** | 用處方、調劑紀錄對應；只收「開始」某策略的人 | 符合條件但**兩種策略都沒開始**的人，不屬於這個 target trial（要排除） |
| **3. Assignment** | **隨機分派、病人知道自己用什麼**（不盲） | 依 baseline 資料把每個人「歸類」到一個策略（例如新開處方） | 隨機分派只能靠**調整 baseline confounders** 模擬 → 見第 6 節 |
| **4. Follow-up** | **從分派那刻（time zero）開始**，到結局、死亡、loss to follow-up 或研究結束 | Time zero＝符合條件**且**開始策略的那一刻 | **==Time zero 錯位==**是最常見、最致命的錯誤 → 見第 4 節；資料裡消失的人要當 **censored**，不能直接刪掉 |
| **5. Outcome** | 結局定義、何時與如何確認 | 用代碼或演算法對應；**最好做過驗證** | 醫師知道病人吃什麼藥，可能**更積極去找結局** → 偵測差異（見第 6 節） |
| **6. Causal contrast** | **ITT**（分派的效果）和／或 **per-protocol**（完全照做的效果）；有 competing events 要寫怎麼處理 | ITT 的對應：比較 **initiators**（開始用的人），不管之後有沒有繼續 | Per-protocol 不能只是「刪掉沒照做的人」→ 需要 g-methods |
| **7. Assumptions ＋ Analysis plan** | 需要的假設、分析方法、次群組與敏感度分析 | 加上 confounding 調整；說明為了模擬做了哪些修改 | **同時報相對（HR、RR）和絕對（risk difference）效果** |

## 4. Time zero：最重要的設計原則

> [!important] 同步原則
> 在 RCT 裡，**符合條件、被分派、開始追蹤**是同一個時間點，自然而然。觀察研究必須**刻意讓這三件事同步**：
> - 收案條件要在 time zero **當時**就符合，不能用之後的資訊
> - 結局要從 time zero **之後**才開始算，不能更早

### 三件事不同步，會出什麼錯？

| 錯在哪 | 偏差 | 例子 |
| --- | --- | --- |
| **Time zero 設在開始用藥很久之後**（收「正在用藥的人」） | **Prevalent user bias**（一種 selection bias） | HRT 與 CHD：用藥早期就出事的人已經被「篩掉」，剩下的是能耐受的人 → 藥看起來比較好 |
| **用追蹤期間「之後才開始用藥」來分組** | **Immortal time bias** | 「後來有用藥」組在開始用藥前**不可能死**（否則就不會被歸到這組）→ 白白多了一段「不死時間」 |
| **只收追蹤期間「從沒用藥」的人當對照** | Selection bias | 用未來的資訊決定誰能進對照組 |

> [!warning] 經典教訓：HRT 與冠心病
> - RCT（WHI）：estrogen＋progestin **增加** CHD 風險
> - 觀察研究：**沒看到**風險增加（甚至看起來保護）
> - 原因不是資料差，而是**拿「已經用一段時間的人」和沒用的人比**：早期的 CHD 事件沒被算進來，而且容易得病的人早已被篩掉
> - 如果**==把 RCT 的資料也用同樣錯的方法分析==**（刪掉前期追蹤），RCT 也會得出「HRT 有好處」
> - 改用 target trial 的方式重新分析觀察資料後，**結果和 RCT 一致**
> - Statin 與 cancer 也是同樣的故事：觀察研究說 statin 防癌、RCT 說沒有；重新正確設計後差異消失或大幅縮小

### 同一個人在很多時間點都符合條件時

例如停經後女性從 51 到 65 歲都符合收案條件，time zero 要選哪一年？

| 做法 | 說明 | 注意 |
| --- | --- | --- |
| **選一個時間點** | 第一次符合、或隨機選一個 | 簡單；**C27 用的就是「第一次處方」** |
| **所有時間點都用**（sequential／nested trials） | 每個月（EHR）或每次收資料（固定排程）都開一個新 trial | 統計上更有效率；同一人進多個 trials → **變異數要校正**；報告要寫 unique individuals 和 person-trials |

### Grace period 與 cloning

- **Grace period**：真實世界決定用藥後，常要幾週才真正開始（等檢查、行政手續）。Protocol 可以容許「分派後 X 天內開始」都算照做
- 問題：grace period 內，一個人的資料**同時符合兩種策略**（還沒開始用，但之後可能會開始）
- 解法 **clone–censor–weight**：
  1. 把這個人**複製成兩份**，各分到一個策略
  2. 當資料不再符合某策略時，那份複製**censor 掉**（例如第 3 個月開始用藥 →「從不用藥」那份在第 3 個月 censor）
  3. 因為 censoring 和預後有關，要用 **inverse probability weighting** 校正
  4. 如果 grace period 內就死亡 → **兩份都算死亡**，事件不會被系統性地只算給某一組
- 代價：用了 cloning 就**==無法估 ITT==**（每個人同時在兩組），只能估 per-protocol 效果
- **成功案例（JAMA 2022）**：COVID-19 ICU 病人，tocilizumab「入 ICU 2 天內開始」vs「不開始」
  - 正確模擬：30 天死亡 27.5% vs 37.1%，**HR 0.71（0.56–0.92）**，之後被大型 RCT 證實
  - 錯誤分析（比「任何時候有用過」vs「沒用過」，且沒仔細調整 time zero 的臨床特徵）：HR 0.91（0.79–1.06）→ **大幅低估效益**

## 5. Causal contrast：ITT vs per-protocol

| | ITT（effect of assignment） | Per-protocol |
| --- | --- | --- |
| 回答 | 「**被分派**到某策略」的效果 | 「**完全照**策略做」的效果 |
| RCT 中 | 隨機分派保證兩組可比 → 不需額外假設（沒有 loss to follow-up 時） | 實際有沒有照做**不是隨機的** → 需要調整 baseline 和**隨時間變化的** confounders |
| 觀察資料的對應 | 比較 **initiators**（開始用的人），之後換藥停藥都不管 | 需要 **g-methods**（例如 IPW、g-formula），因為「之前的遵從度」會影響之後的預後因子 |
| 錯誤做法 | — | 「刪掉沒照做的人」——在 RCT 和觀察研究都不對 |

- **Loss to follow-up**：ITT 和 per-protocol 都可能需要調整，連 RCT 也一樣
- **Competing events**（例如研究非死亡結局時發生死亡）：要在 causal contrast **裡面**定義清楚怎麼處理，否則估計的東西不明確

## 6. Confounding：設計解決不了的那一塊

> [!danger] 最重要的限制
> 就算其他六個要素都模擬得完美，**沒有 randomization 造成的 confounding 仍然存在**。所以成功的 emulation 需要詳細的 **confounder 資料**，不只是治療和結局資料。
> - Claims 資料常常治療和結局記得很好，但**臨床嚴重度記得不夠**
> - 重點是**==有沒有 confounder 資料==**，不是用哪種調整方法

### 關鍵假設：Conditional exchangeability

- 意思：在調整了某些 baseline 變項後，兩組**就像隨機分派一樣可比**＝「沒有 unmeasured confounding」
- 其他領域的同義詞：selection on observables、no omitted variable bias
- **只要 confounder 都在 time zero 量到**，調整方法任選：matching（含 **propensity score**）、stratification、regression、standardization、IPW、g-estimation、doubly robust（JAMA 2022 的 tocilizumab 用 IPW）
- 也可以改用其他 identification 策略：instrumental variable、difference-in-differences、proximal causal inference（TARGET 目前不涵蓋這些）

### 怎麼降低 confounding

| 方法 | 說明 |
| --- | --- |
| **Active comparator** | 和「另一種有效治療」比，confounding 比和「不治療」比**輕微得多**（Hernán & Robins 2016） |
| 收「平常就有在看醫生」的人 | 模擬 RCT 中「預期會持續回診」的收案條件 |
| NLP、影像處理、machine learning | 從病歷文字抓出原本拿不到的 confounder 資訊 |

### 怎麼「偵測」有沒有殘存的 confounding（間接方法）

| 方法 | 原理 | 怎麼判讀 |
| --- | --- | --- |
| **Negative outcome control** | 選一個藥物**不可能影響**的結局（HRT 例子：腦瘤、肺炎） | 這個結局也有差 → 暗示有 confounding 或偏差 |
| **已知效果的 outcome control** | 選效果大小大致已知的結局 | 估出來和已知差很多 → 有問題 |
| **Treatment control** | 選適應症類似、但預期**沒有效果**的另一種治療 | 也看到「效果」→ 有問題 |
| **Reversed target trial** | 反過來模擬「正在用藥的人：繼續 vs 停藥」 | 開始用藥降低風險、停藥**也**降低風險 → 至少一個模擬失敗 |
| **Quantitative bias analysis** | 例如 E-value | 量化需要多強的未測量 confounder 才能推翻結論 |

### 結局偵測：被低估的偏差來源

- RCT 可以**系統性、盲性**地確認結局；觀察資料不行，因為醫師知道病人用什麼藥
- 如果用某藥的人被**檢查得比較多**，結局就會比較常被診斷——**==即使藥物沒有任何生物效應==**（HRT 例子：用藥者做較多乳房檢查 → 乳癌診斷變多）
- 例外：結局的確認**不受治療影響**（例如死亡資料來自獨立的死亡登記）
- 代碼要驗證：例如「乳癌」代碼可能只是懷疑乳癌、開檢查時就被記錄

## 7. 設計偏差 vs 資料偏差（整篇最重要的區分）

| | **設計偏差**（design biases） | **資料偏差**（data biases） |
| --- | --- | --- |
| 來源 | 研究者**設計分析時做錯的決定** | **資料本身的限制** |
| 例子 | Prevalent user bias、immortal time bias、用未來資訊選人的 selection bias | Unmeasured confounding、measurement error（代碼不準）、loss to follow-up 造成的 selection bias、missing data |
| Target trial 能不能解決 | ✅ **==可以預防==**（自找的傷害） | ❌ **==不能==**，只能透明地報告、做敏感度分析 |
| 意義 | 先把設計偏差擋掉 → 大家可以**專心討論資料限制**，並思考未來的資料怎麼改善 | |

> [!tip] 報告時的金句
> 「Target trial emulation 讓我們避免設計上的錯誤，但沒辦法彌補資料的不足；所以我們的 limitations 集中在 residual confounding 和 detection bias。」

## 8. 什麼時候適用、什麼時候不適用

**兩個條件**都成立時，target trial 框架特別有用（Hernán 2025）：

1. 比較的治療策略是**定義足夠清楚的介入**
2. Protocol 的各要素**能對應到資料**

| 情況 | 例子 | 結果 |
| --- | --- | --- |
| 兩個條件都成立 | 藥物 A vs B | ✅ 最適合 |
| 介入定義有爭議 | 「社群媒體的效果」 | 框架可以**促進討論**到底要比什麼 |
| 介入定義太模糊 | 「孤獨的效果」 | 連 RCT 都設計不出來 → 換成更明確的介入 |
| 資料不可能存在 | 「美國稅制改革對下一代壽命的效果」（只有一個美國） | 無法模擬，只能用 synthetic control 或數學模型，假設更強 |

- **Transportability**：RCT 和它的模擬都一樣，結果**不會自動適用**到其他時間、地點、族群（例如 COVID 疫苗在未感染者的效果，不一定適用已感染者）

## 9. 報告：TARGET Statement（2025）

<div class="orig-fig" data-src="TriNetX/tte-originals/target-2025-table-2-p1.png,TriNetX/tte-originals/target-2025-table-2-p2.png" data-label="TARGET Table 2（checklist）"></div>

- 2025 年同時發表在 JAMA 與 BMJ；系統性回顧（200 篇 TTE 研究的報告品質不一致）→ 兩輪專家問卷 → 3 天共識會議 → 108 人試用
- 適用範圍：模擬**平行分組、個人隨機分派**的 target trial，**用 baseline confounder 調整**的觀察研究
- 用途是**報告**，不是評估偏差風險的工具（評估偏差用 ROBINS-I）

### 四個關鍵建議

1. **標明**這是「用觀察資料模擬 target trial」的研究
2. **摘要因果問題**，以及為什麼要模擬 target trial
3. **清楚寫出 target trial protocol**（causal estimand、identifying assumptions、分析計畫）以及**怎麼對應到資料**
4. 報告每個 causal estimand 的估計值、**精確度**，以及檢驗假設與設計選擇的**敏感度分析**

### 21 項 checklist

| 段落 | 項目 | 重點 |
| --- | --- | --- |
| **Abstract** | 1a–c | 標明是 TTE、資料來源、主要假設與結果；**==不要寫「emulated trial」或「emulated RCT」==**，會讓讀者誤以為是真的 RCT |
| **Introduction** | 2 背景與 knowledge gap｜3 因果問題（PICO）｜4 為什麼用 TTE，引用影響設計的 RCT | |
| **Methods** | 5 資料來源（原始用途、類型、地區、場域、期間、怎麼串接） | |
| | **6a–h Target trial specification** ↔ **7a–h Emulation**（左右並排） | eligibility、strategies、assignment、follow-up、outcomes、causal contrasts、assumptions、analysis；**每一項都寫「理想」和「實際怎麼對應」** |
| | 7h(ii) 敏感度分析 | 寫出每個分析**針對哪種偏差**；可用 negative controls、quantitative bias analysis |
| **Results** | 8 **Flow diagram**（強烈建議）｜9 baseline 特徵（調整前後）｜10 追蹤長度與結束原因｜11 **missing data 頻率**｜12 各組結局（含**絕對風險隨時間**與精確度）｜13 **相對與絕對效果**＋CI｜14 所有敏感度分析結果 | 用 cloning 或 sequential trials 要寫 unique individuals 和 clones／person-trials |
| **Discussion** | 15 解讀（在 identifying assumptions 成立的前提下）｜16 **Limitations**：target trial 和模擬的差異、假設是否合理（尤其 no unmeasured confounding） | |
| **Other** | 17 倫理｜18 註冊｜19 資料與程式碼分享｜20 經費｜21 利益衝突 | |

### TARGET 名詞表

<div class="orig-fig" data-src="TriNetX/tte-originals/target-2025-table-1.png" data-label="TARGET Table 1（glossary）"></div>

| 名詞 | 白話 |
| --- | --- |
| **Causal contrast** | 比較兩種策略下的結局分布（ITT 或 per-protocol） |
| **Causal estimand** | 要估的因果效應；由 eligibility、策略、結局、追蹤時間、causal contrast 共同定義 |
| **Confounding** | 兩組在 time zero 的預後因子分布不同；TTE 的關鍵問題是**調整後還剩多少** |
| **Design-related biases** | 研究者設計時的決定造成的偏差（不是資料造成的），主要來自 time zero 錯位 |
| **Identifying assumptions** | 把因果效應和資料連起來的假設：① 調整變項的每一層內，兩組結局風險相同（conditional exchangeability）② 每種變項組合都有機會接受每種策略（**positivity**）③ 策略定義清楚 |
| **Target trial framework** | 用 RCT 的設計原則來設計觀察研究的方法學框架：specification ＋ emulation |

---

## 10. 套回 C27：用 TTE 的眼光檢查這篇

> [!example] 每一項都可以拿來回答評審
> 下表把上面的概念對應到 [[trinetx/c27-finerenone-af/index|C27（finerenone vs spironolactone）]] 的實際做法。

| TTE 概念 | C27 怎麼做 | 評價 |
| --- | --- | --- |
| **Time zero 同步** | Index＝第一次處方日；eligibility 在 index 當時或之前確認；結局從 day 1 算 | ✅ 避免 immortal time 與 prevalent user bias |
| **New-user（initiators）** | 只收第一次用藥、之前沒用過任一 MRA 的人 | ✅ 對應 ITT 的 initiators 比較 |
| **Active comparator** | Spironolactone，而不是沒用藥的人 | ✅ 依 Hernán & Robins 2016，confounding 比 vs 不治療輕微 |
| **Time zero 選擇** | 多個合格時間點中選「第一次」 | ✅ 兩種無偏差選法之一 |
| **Causal contrast** | 只看第一次開的藥，之後換藥停藥不中止追蹤 | ITT 的類比；**沒有估 per-protocol**（需要 g-methods，平台做不到）→ limitation |
| **Confounding 調整** | 1:1 PSM（354 個變項） | Conditional exchangeability **無法驗證**；death HR 0.51 提示可能殘存 confounding |
| **Negative outcome controls** | Seborrheic keratosis、impacted cerumen、presbyopia | ✅ 符合 Hernán & Robins 2016 建議；但 CI 寬，只能有限地安心 |
| **結局偵測** | 結局是「第一次被記錄」的 I48 代碼；檢查追蹤期間看診與 ECG（Figure 4） | 正視偵測偏差 ✅；前 30 天看診較少 → **正是 Hernán 說的「確認結局不盲」問題** |
| **Competing events** | 死亡沒有另外處理，KM 略高估 AF | TARGET 6f 要求寫清楚 → 寫進 limitations |
| **絕對與相對效果** | HR＋day 730 KM 機率與差距 | ✅ 符合 TARGET 13 與 JAMA 2022「只給 HR 對臨床決策幫助有限」 |
| **Flow diagram** | Figure 1 | ✅ TARGET 8 |
| **Specification ↔ emulation 對照** | Table S2 | ✅ TARGET 6–7 |
| **TARGET checklist** | Table S1 | ✅ |
| **Missing data** | K、eGFR、UACR 不強制要有值 | TARGET 11 要求報告各變項 missing 頻率 → 確認稿件有寫 |
| **Pragmatic、不盲** | EHR 資料，醫師知道開什麼藥 | Target trial 本質就是 pragmatic；結論要寫 association |

## 11. 評審可能問的方法學問題

> [!question]- Target trial emulation 和一般的 cohort study 有什麼不同？
> - 不是新的統計方法，而是**一套設計框架**：先寫出假想 RCT 的 protocol，再逐項對應到資料
> - 好處：強迫 time zero、eligibility、assignment 同步 → 避免 immortal time 與 prevalent user bias；因果問題更明確；報告更透明
> - 它**不能**解決 confounding，只能讓大家把注意力集中在 confounding

> [!question]- 你們的 target trial 和「理想的試驗」差在哪裡？
> - 不盲、pragmatic；結局是常規照護中被記錄，不是系統性篩檢
> - 只能估 ITT 類比，沒有 per-protocol
> - 部分收案條件（K、eGFR）沒強制要有檢驗值

> [!question]- 為什麼不估 per-protocol effect？
> - Per-protocol 需要調整**隨時間變化的 confounders**，通常要 g-methods（例如 IPW）
> - 平台只能做 baseline PSM ＋ Cox → 只能估「開始某藥」的效果（ITT 類比）

> [!question]- 你們用什麼假設來模擬隨機分派？成立嗎？
> - Conditional exchangeability：配對 354 個變項後兩組可比、沒有未測量的 confounding
> - **無法直接驗證**；間接證據：negative controls 沒有明確差異，但 death 也少一半、E-value 的 CI 上限只有 1.35 → 不夠穩固

> [!question]- 為什麼 HR 之外還要報 day 730 的絕對風險？
> - TARGET 建議同時報相對與絕對效果；Hernán 2022 指出只給 HR 對臨床決策幫助有限
> - 絕對差距（−1.82 個百分點）讓讀者知道實際影響多大

> [!question]- 為什麼不用 cloning 或 grace period？
> - 兩種策略都是「開始某藥」，第一次處方日就能明確分組，**不存在 time zero 時策略無法區分的問題**
> - Cloning 是用在「X 天內開始 vs 不開始」這類比較

## 名詞小抄

| 名詞 | 白話 |
| --- | --- |
| **Specification ／ Emulation** | 寫出理想 protocol ／ 用資料模擬它 |
| **Time zero（baseline）** | 符合條件＋被分派＋開始追蹤的那一刻 |
| **Pragmatic trial** | 在常規照護條件下比較策略的試驗；不盲、不嚴格監控 |
| **ITT（effect of assignment）** | 被分派到某策略的效果，不管之後有沒有照做 |
| **Per-protocol effect** | 完全照策略做的效果 |
| **Initiators** | 開始某治療策略的人；ITT 在觀察資料的對應 |
| **Prevalent user bias** | 收「正在用藥」的人，早期出事的人已被篩掉 |
| **Immortal time bias** | 分組依據是追蹤期間的事件，某組白白多了一段不可能發生結局的時間 |
| **Grace period** | 容許分派後一段時間內開始治療都算照做 |
| **Clone–censor–weight** | 策略在 time zero 分不出來時，複製個體、偏離策略時 censor、用 IPW 校正 |
| **Sequential（nested）trials** | 每個合格時間點都開一個 trial |
| **Conditional exchangeability** | 調整某些變項後兩組可比＝沒有 unmeasured confounding |
| **Positivity** | 每種變項組合的人都有機會接受每種策略 |
| **G-methods** | 處理隨時間變化 confounding 的方法（IPW、g-formula、g-estimation） |
| **Negative outcome control** | 藥物不該影響的結局，用來偵測偏差 |
| **Transportability** | 結果能不能推到其他族群、時間、地點 |
| **ROBINS-I** | 評估非隨機研究偏差風險的工具（和 TARGET 用途不同） |

## 相關筆記

- [[trinetx/c27-finerenone-af/index|C27 總覽]]
- [[trinetx/c27-finerenone-af/c27-1-idea|① 研究發想（每個設計選擇的理由）]]
- [[trinetx/c27-finerenone-af/c27-2-design|② 收案與分析]]
- [[trinetx/c27-finerenone-af/c27-4-supplement|④ 補充資料（Table S1 TARGET checklist、Table S2 target trial 規格）]]
- [[trinetx/c27-finerenone-af/c27-5-discussion|⑤ 故事線與評審問答]]

## 參考資料

- Hernán MA, Robins JM. Using big data to emulate a target trial when a randomized trial is not available. *Am J Epidemiol*. 2016;183(8):758–764. doi:10.1093/aje/kwv254. 參考資料庫：`TriNetX/kwv254.pdf`
- Hernán MA, Wang W, Leaf DE. Target trial emulation: a framework for causal inference from observational data. *JAMA*. 2022;328(24):2446–2447. doi:10.1001/jama.2022.21383. 參考資料庫：`TriNetX/P_jama_hernn_2022_gm_220007_1671489013.65036.pdf`
- Hernán MA, Dahabreh IJ, Dickerman BA, Swanson SA. The target trial framework for causal inference from observational data: why and when is it helpful? *Ann Intern Med*. 2025;178(3):402–407. doi:10.7326/ANNALS-24-01871. 參考資料庫：`TriNetX/nihms-2063403.pdf`
- Cashin AG, Hansford HJ, Hernán MA, et al. Transparent reporting of observational studies emulating a target trial: the TARGET statement. *JAMA*. 2025;334(12):1084–1093. doi:10.1001/jama.2025.13350（同步刊於 *BMJ* 2025;390:e087179）. 參考資料庫：`TriNetX/nihms-2159479.pdf`

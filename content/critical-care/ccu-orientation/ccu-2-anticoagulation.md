---
title: ②抗凝與導管相關 Anticoagulation & Catheter Care in CCU
aliases:
  - CCU heparin pump
  - Raschke nomogram
  - 拔 sheath
  - Tirofiban 劑量
  - Protamine
  - ACT 目標
tags:
  - 重症
  - 心臟科
  - CCU
  - 抗栓藥物
---

> [!abstract] 一句話重點
> - **==高濃度 heparin 看 ACT（PCI、ECMO），治療濃度看 aPTT（pump）==**；anti-Xa 院內要外送、不即時，不拿來調 pump
> - Heparin pump：**ACS** 70–100 U/kg → aPTT 60–80 s；**VTE／PE**（Raschke）**80 U/kg → 18 U/kg/h**，照 nomogram 調
> - aPTT 突然飆高或不動 → **先問從哪條管路抽的**、檢體有沒有抽滿
> - **HIT 先算 4Ts**：0–3 分不驗也不治；≥ 4 分停掉**所有** heparin（含沖管）、改 argatroban
> - **Tirofiban 只做 bailout**：25 µg/kg → 0.15 µg/kg/min 最多 18 h；**==CrCl ≤ 60 → bolus 不變、維持減半==**
> - **Protamine** 1 mg 中和 100 U、≤ 5 mg/min、單次 ≤ 50 mg；**給前問有沒有打 NPH insulin**
> - 拔 sheath：講義所述院內慣例 **ACT < 165 s**（用過 tirofiban < 180 s）；**低血壓＋背痛／側腹痛 → retroperitoneal bleeding**；搏動腫塊＋雜音 → 超音波導引 thrombin 注射
> - Radial 是預設路徑，**patent hemostasis** 一定要做；顯影劑腎病靠**補水＋少打**，不開 bicarbonate、NAC

> [!info] 系列導覽
> ↑ 回到 [[critical-care/ccu-orientation/index|CCU orientation 總覽]]
>
> ① [[critical-care/ccu-orientation/ccu-1-workflow|CCU 的一天]]｜② 抗凝與導管（本篇）｜③ [[critical-care/ccu-orientation/ccu-3-resuscitation|急救與復甦後]]｜④ [[critical-care/ccu-orientation/ccu-4-shock-hf|休克、MCS、急性心衰]]｜⑤ [[critical-care/ccu-orientation/ccu-5-acs-pci|ACS 與 PCI 後]]｜⑥ [[critical-care/ccu-orientation/ccu-6-arrhythmia|心律不整]]｜⑦ [[critical-care/ccu-orientation/ccu-7-other|其他急症]]

## 三個常規凝血檢驗

| 檢驗 | 量什麼 | 用在哪裡 | 要小心 |
| --- | --- | --- | --- |
| **ACT** | **高濃度** heparin | PCI、ECMO；床邊全血、幾分鐘出結果 | 受 platelet、fibrinogen、體溫、稀釋影響；**不同機器不能互換** |
| **aPTT** | **治療濃度** heparin | Heparin pump；院內常規 | 檢體前誤差多（見下） |
| **PT/INR** | Warfarin | 院內常規 | 不拿來看 heparin |
| anti-Xa | 治療濃度 heparin | 院內要外送、不即時 | 只在 aPTT 不可靠或 heparin resistance 才送 |

### aPTT 的檢體前誤差（抽錯比算錯常見）

- 藍頭管（**3.2% citrate**）要抽到 **> 90%**，citrate：血 = 1:9；Hct 很高要調 citrate 量
- 蝴蝶針或留置管抽血要**先丟一管**（死腔讓藍頭管抽不滿）
- **==從 heparin 管路抽的檢體不能驗 aPTT==**
- 監測 UFH 的檢體 **4 小時內離心**

## ACT 目標

| 情境 | 建議 | 出處 |
| --- | --- | --- |
| **PCI** | UFH 70–100 U/kg → ACT **250–300 s**（HemoTec）或 **300–350 s**（Hemochron）；併用 GPI → **200–250 s**（bolus 常用 50–70 U/kg） | 2021 ACC/AHA/SCAI；ESC 2023 只寫「或依 ACT」 |
| PCI 最佳 ACT | 6 個 RCT 合併：350–375 s 缺血事件最少；另 4 個 RCT：ACT 與缺血無關、**出血隨 ACT 上升** | Chew 2001；Brener 2004 |
| **ECMO** | ELSO 2021 不給固定 ACT（以 anti-Xa 分層）；依院內 ECMO 團隊 SOP（看 aPTT 與 ACT） | ELSO 2021 |
| **拔 sheath** | 沒有指引數字；講義所述院內慣例 **動脈 ACT < 165 s**，**用過 tirofiban < 180 s** | 院內慣例 |

## Heparin pump

| 適應症 | Bolus → 維持 | 目標 |
| --- | --- | --- |
| **ACS**（ESC 2023） | **70–100 U/kg** → 滴定 | **aPTT 60–80 s** |
| **VTE／PE**（Raschke 1993） | **80 U/kg → 18 U/kg/h** | 院內實驗室的 **heparin 校正 aPTT 區間**（Raschke 用 1.5–2.3 倍 control） |

- 泡法：**25,000 U in D5W 250 mL（約 100 U/mL）**
- **==PCI 一結束就停腸道外抗凝==**（ESC 2023 IIa C）
- **aPTT 目標不是固定秒數**：每個實驗室依試劑批號自訂 heparin 校正區間 → 問檢驗科「院內 heparin 區間是幾秒」
- 監測：**每 6 小時**，連續兩次達標後改每天；**調速率後 6 小時再抽**

### Raschke 體重法 nomogram

| aPTT（相對 control） | 調整 |
| --- | --- |
| < 1.2 倍 | 再 bolus **80 U/kg**，速率 **+4 U/kg/h** |
| 1.2–1.5 倍 | 再 bolus **40 U/kg**，速率 **+2 U/kg/h** |
| **1.5–2.3 倍** | **不變** |
| 2.3–3 倍 | 速率 **−2 U/kg/h** |
| > 3 倍 | **停 1 小時**，速率 **−3 U/kg/h** |

- 體重法 vs 標準法（n = 115）：24 小時內超過治療下限 **97% vs 77%**；標準法再發血栓 RR 5.0

### Heparin 越開越多、aPTT 不動

- **Heparin resistance** 常用定義：每天 > 35,000 U
- 先排除**檢體問題**（管路、citrate、延遲）
- 再想 aPTT 不可靠的情況：**基礎 aPTT 延長（lupus anticoagulant）**、fibrinogen 或 FVIII 高
- 這些情況 anti-Xa 較準，出血與血栓兩種監測相同；但 anti-Xa 外送，**不要等它**

## HIT：先算 4Ts

| 4Ts 分數 | 做法 | 依據 |
| --- | --- | --- |
| **低（0–3）** | **不驗 HIT、不給經驗性治療**（ASH 強建議） | NPV 0.998 |
| 中（4–5）、高（6–8） | **==停所有 heparin（含沖管）==**、送免疫分析 ± 功能性試驗、**改非 heparin 抗凝** | 中分 PPV 0.14、高分 PPV 0.64 |

- **Argatroban**：**2 µg/kg/min、不 bolus**；中重度肝功能不良 **0.5 µg/kg/min**；aPTT 1.5–3 倍、不超過 100 s；開始後 2 小時驗
- 4Ts 計分細項以 Lo 2006 原表為準

## Tirofiban：只做 bailout

| 項目 | 現行（ESC 2023、仿單） |
| --- | --- |
| 定位 | **只在 no-reflow 或血栓併發症**（IIa C）；**事前使用不建議（III A）** |
| 劑量 | **25 µg/kg bolus 3–5 分鐘 → 0.15 µg/kg/min，最多 18 小時** |
| 腎功能 | **CrCl ≤ 60 mL/min：bolus 不變，維持減半為 0.075 µg/kg/min** |
| 監測 | 開始後約 **6 小時驗 platelet**，之後每天；< 90,000 先排除凝集，確認後**停 tirofiban 與 heparin** |

- 泡法（講義所述院內慣例；現行仿單只有預混袋 50 µg/mL）：1 瓶 50 mL in D5W 250 mL，濃度 41.67 µg/mL

## Protamine

- **1 mg 中和 100 U heparin**；只算**最近幾小時**給的 heparin（UFH 半衰期短）
- **≤ 5 mg/min**、**單次 ≤ 50 mg**；pump 進行中實務常用 25 mg
- **LMWH 中和不完全**：enoxaparin 給藥 < 8 小時 → 每 1 mg enoxaparin 給 1 mg protamine，上限 50 mg（依仿單）
- **黑框警告**：嚴重低血壓、心血管崩潰、非心因性肺水腫、肺動脈高壓
- **高風險**：**NPH insulin 使用者**（嚴重反應 27% vs 0.5%）、魚過敏、輸精管結紮、用過 protamine、重度 LV 功能不良
- PCI 後為了早拔 sheath 常規給 protamine：meta-analysis **沒有增加 stent thrombosis**、大出血較少

> [!warning] Pitfall：給 protamine 前先問有沒有打 NPH insulin

## 動脈 sheath

| 問題 | 答案 |
| --- | --- |
| 拔的時機 | 講義所述院內慣例 **ACT < 165 s**；用過 tirofiban → 停藥後 **ACT < 180 s** |
| 壓多久 | 6F 診斷性導管徒手壓迫中位數 **10 分鐘**（ISAR-CLOSURE）；PCI 後或用 GPI 要壓更久 |
| 臥床多久 | 28 個研究、9,217 人：臥床長短與血腫、出血無關，越久背痛越多；**診斷性導管 2 小時下床安全** |
| 預防迷走反應 | 拔前 **atropine 0.5 mg**：迷走反應 2.3% vs 10.4%（RCT，n = 165） |

### 拔 sheath 的併發症

| 併發症 | 怎麼認 | 處理 | 數字 |
| --- | --- | --- | --- |
| Vasovagal reaction | 心跳慢、血壓掉、冒汗 | Atropine、輸液、抬腿 | 預防性 atropine 10.4% → 2.3% |
| Hematoma | 腫、痛 | 壓迫 | — |
| **Pseudoaneurysm** | **搏動性腫塊、雜音** | **==超音波導引 thrombin 注射==** | 成功 97% vs 壓迫 69%；約 0.7% |
| **Retroperitoneal bleeding** | **低血壓、背痛、側腹痛** | CT；輸血、介入 | 0.06%；股動脈 OR 20 |
| 閉塞、感染 | 脈搏消失、紅腫 | 外科、抗生素 | — |

- **閉合器**（ISAR-CLOSURE，n = 4,524）：30 天穿刺處併發症 6.9% vs 7.9%（非劣），**止血 1 vs 10 分鐘**；血管內型失敗 5.3%、血管外型 12.2%；Cochrane：省時間，但**不省併發症** → 拔完的觀察一樣要做

## Radial first

- **ESC 2023 radial 是標準路徑（I A）**；ACC/AHA 2025 COR 1 A
- MATRIX：NACE 9.8% vs 11.7%、死亡 1.6% vs 2.2%；RIVAL 全體沒差（HR 0.92），STEMI 次組 HR 0.60
- **Radial artery occlusion（RAO）**：24 小時 7.7%、> 1 週 5.5%，不痛不癢
  - 足量 heparin 有保護
  - **==Patent hemostasis==**（PROPHET）：24 小時 RAO 減 59%、30 天減 75% → 一定要做

## 顯影劑腎病

| | 內容 |
| --- | --- |
| ESC 2023 | 用**低滲或等滲**顯影劑、**最少量**（I A）；每個人都要有 **eGFR**（I C）；有風險者（尤其 AKI 或 eGFR < 30）**給水分**（IIa B） |
| **PRESERVE** | **Sodium bicarbonate 與 N-acetylcysteine 都沒有益處** |
| 做法 | 補水、少打顯影劑；**不開 bicarbonate、不開 NAC** |

## ECMO 的抗凝

| 項目 | ELSO 2021 | 院內 |
| --- | --- | --- |
| 成人 VA-ECMO | 建議常規抗凝；VV 傾向較少 | 依 ECMO 團隊 |
| 滴定 | 以 **anti-Xa** 目標帶滴定，**UFH 每次調 ±10–20%**；檢驗不一致時搭配 aPTT 60–90 s | anti-Xa 外送 → 以團隊 SOP 的 aPTT／ACT 為準 |
| 監測頻率 | ACT q1–2h；aPTT、platelet q6–12h；fibrinogen／INR q12–24h | 同左 |
| 出血 | 暫停 UFH 4–6 小時合理 | 依團隊 |

> [!tip] 模組 2 帶走
> - 高濃度看 ACT、治療濃度看 aPTT；拔 sheath ACT < 165（tirofiban 後 < 180）
> - Heparin：ACS 70–100 U/kg、aPTT 60–80；VTE 80 U/kg＋18 U/kg/h
> - aPTT 不動先查檢體與基礎值；HIT 先算 4Ts，低分不驗
> - Tirofiban 只做 bailout，CrCl ≤ 60 維持減半
> - Protamine 1 mg 中和 100 U、問 NPH；pseudoaneurysm 打 thrombin；radial 是預設
> - 劑量來自仿單與指引，**泡法與門檻是院內慣例**

## 📝 講義小考

> [!question]- Q1：CrCl 45 mL/min 的病人要用 tirofiban，怎麼調？
> (A) Bolus 減半、維持減半
> (B) Bolus 不變，維持 0.075 µg/kg/min
> (C) 不用調，門檻是 eGFR < 30
> (D) 改用 heparin 就好
>
> > [!success]- 答案與詳解
> > **(B)**。CrCl ≤ 60 時 bolus 25 µg/kg 不變，維持劑量從 0.15 減半為 0.075 µg/kg/min。

> [!question]- Q2：拔 sheath 後出現搏動性腫塊合併雜音，第一線處置？
> (A) 繼續壓迫 30 分鐘
> (B) 超音波導引 thrombin 注射
> (C) 直接開刀
> (D) 給 protamine
>
> > [!success]- 答案與詳解
> > **(B)**。Pseudoaneurysm 首選超音波導引 thrombin 注射，成功率 97%，優於壓迫的 69%。

## 相關筆記

- [[cardiology/acs-esc-2023/acs23-3-antithrombotic|ACS 抗血栓治療（ESC 2023）]]
- [[cardiology/pulmonary-embolism-esc/pe-esc-4-acute-treatment|PE 急性治療]]
- [[gastroenterology/antithrombotic-endoscopy-bsg-esge/index|抗栓藥物與內視鏡]]

## 參考資料

- Ling LC（Lo-Chieh Ling, MD）. CCU orientation 2026（住院醫師講義，模組 2）. 新光吳火獅紀念醫院心臟內科, 2026-11.
- McMichael ABV, et al. ELSO 2021 anticoagulation guideline. *ASAIO J* 2022;68:303–310.
- Smythe MA, et al. *J Thromb Thrombolysis* 2016;41:165–186.
- Raschke RA, et al. The weight-based heparin dosing nomogram. *Ann Intern Med* 1993;119:874–881.
- Lawton JS, et al. 2021 ACC/AHA/SCAI coronary revascularization guideline. *J Am Coll Cardiol* 2022;79:e21–e129.
- Byrne RA, et al. 2023 ESC Guidelines for ACS. *Eur Heart J* 2023;44:3720–3826.
- Cuker A, et al. ASH 2018 guidelines for HIT. *Blood Adv* 2018;2:3360–3392.
- Schulz-Schüpke S, et al. ISAR-CLOSURE. *JAMA* 2014;312:1981–1987.
- Weisbord SD, et al. PRESERVE. *N Engl J Med* 2018;378:603–614.

(()=>{"use strict";
const KEY="dpro_careplan_tutorial_first10_v1_1";
const articles=[
{role:"管理者",category:"A はじめに・安全・デモ",title:"デモ情報と架空データ利用",body:"管理者/ケアマネの「デモ情報を入力」は既存ログイン欄へ架空デモ情報を入れます。公開デモには実在情報を入れません。",safe:"First10はデモ入力ボタンやログインを自動クリックしません。"},
{role:"管理者",category:"B 管理者PC",title:"ダッシュボードと期限の見方",body:"利用中・相談中・承認待ち・認定期限・計画見直し・記録確認・書類期限・本日の予定・警告を最初に確認します。"},
{role:"管理者",category:"B 管理者PC",title:"新規相談の状態と担当",body:"新規相談は受付状態と担当職員を確認し、必要なときだけ既存画面で明示保存します。",safe:"Guide Centerは状態変更や担当保存を実行しません。"},
{role:"管理者",category:"B 管理者PC",title:"利用者基本・担当・認定・計画・会議",body:"利用者詳細は基本情報→担当ケアマネ→要介護認定→ケアプラン進捗→担当者会議の順に見ると期限と担当を追いやすくなります。"},
{role:"管理者",category:"B 管理者PC",title:"LINE連携承認とモニタリング確認",body:"本人/家族のLINE連携申請とケアマネ提出記録は内容を確認してから承認/差戻しします。",safe:"承認・却下・差戻しは案内のみ。自動実行しません。"},
{role:"管理者",category:"G 書類・通知",title:"書類受領と通知キュー",body:"非公開Storageの提出書類は受領/差戻し、通知は送信待ち/保留/送信済み/失敗の状態を確認します。",safe:"通知実行・受領・差戻しはGuideから実行しません。"},
{role:"ケアマネ",category:"C ケアマネ実務",title:"「今日」の予定・タスク・警告・申し送り",body:"ログイン後は今日の訪問/面談、自分のタスク、期限/警告、申し送りの順に確認します。"},
{role:"ケアマネ",category:"C ケアマネ実務",title:"担当利用者とモニタリング",body:"担当利用者を検索して詳細を開き、モニタリングでは状態・評価・本人/家族意向・課題・次の対応を確認します。",safe:"下書き保存/提出はFirst10の対象外です。"},
{role:"ケアマネ",category:"C ケアマネ実務",title:"連絡調整と内部申し送り",body:"関係事業所との連絡履歴と次の対応を記録し、内部申し送りは公開範囲を確認します。"},
{role:"本人・家族",category:"D 本人・家族ポータル",title:"予定・書類・事業所からの連絡",body:"家族ポータルでは訪問/面談予定、提出書類、事業所からの連絡を確認できます。",safe:"First10ではファイル提出やメッセージ送信をしません。"},
{role:"本人・家族",category:"D 本人・家族ポータル",title:"LINE連携申請",body:"本番では登録情報とLINE認証を照合し、事業所承認後に利用します。公開デモのFirst10では連携申請を行いません。"},
{role:"管理者iPad",category:"E 管理者iPad",title:"今日・承認・期限・担当・検査",body:"iPadは現場で今日の全体状況、承認待ち、認定/計画期限、ケアマネ担当状況、API/DB検査を素早く確認する画面です。"},
{role:"公開相談",category:"F 公開相談受付",title:"初めての相談受付",body:"本人・家族・医療/介護関係者からの相談を受け付けます。緊急通報や24時間窓口ではありません。"},
{role:"管理者",category:"H システム検査・トラブル",title:"system-checkとDEMO PREPAREの違い",body:"system-checkは状態確認、DEMO PREPAREはデモ基本データを再準備する別操作です。",safe:"DEMO PREPAREはFirst10/Guide Centerから絶対に自動実行しません。"},
{role:"管理者",category:"I FAQ・用語・公開範囲",title:"家族公開と内部情報",body:"家族公開要約/メモと、内部メモ/内部申し送りを明確に分けて入力します。"}
];
const $=id=>document.getElementById(id),grid=$("articleGrid"),empty=$("articleEmpty"),search=$("guideSearch"),role=$("roleFilter"),category=$("categoryFilter");
function esc(v){return String(v??"").replace(/[&<>'"]/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[ch]))}
function status(){let s=null;try{s=JSON.parse(localStorage.getItem(KEY)||"null")}catch{}const el=$("first10Status");if(!s){el.textContent="First10：未開始。10ステップをいつでも開始できます。";return}const n=Math.min(10,Number(s.index||0)+1);el.textContent=s.state==="COMPLETED"?"First10：完了済み。必要なら「最初から再生」で復習できます。":s.state==="SKIPPED"?`First10：スキップ済み（${n}/10位置）。「再開」または「最初から再生」を選べます。`:s.state==="IN_PROGRESS"?`First10：進行中（${n}/10）。「再開」から続けられます。`:"First10：未開始。"}
function render(){const q=search.value.trim().toLowerCase(),rv=role.value,cv=category.value;const items=articles.filter(a=>(!rv||a.role===rv)&&(!cv||a.category===cv)&&(!q||`${a.title} ${a.body} ${a.role} ${a.category} ${a.safe||""}`.toLowerCase().includes(q)));grid.innerHTML=items.map(a=>`<article class="gc-card"><span class="tag">${esc(a.category)}</span><h3>${esc(a.title)}</h3><p><b>${esc(a.role)}</b>｜${esc(a.body)}</p>${a.safe?`<div class="safe">${esc(a.safe)}</div>`:""}</article>`).join("");empty.hidden=items.length!==0}
search.addEventListener("input",render);role.addEventListener("change",render);category.addEventListener("change",render);status();render();
})();

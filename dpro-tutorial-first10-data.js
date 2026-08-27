window.DPRO_FIRST10 = Object.freeze([
  {
    content_id:"F10_001", chapter_id:"F10_CH01", title:"管理者デモでログイン", persona:"管理者・主任ケアマネ",
    route:"owner.html", target_id:"careplan.owner.login", selectors:["#loginPanel","#appPanel"],
    body:"「デモ情報を入力」を押し、続けて「ログイン」を押します。Tutorial自身はログイン操作やAPI通信を自動実行しません。",
    completion:"#appPanel:not(.hidden)", recovery:null, mutation:false
  },
  {
    content_id:"F10_002", chapter_id:"F10_CH01", title:"事業所ダッシュボードを見る", persona:"管理者・主任ケアマネ",
    route:"owner.html", target_id:"careplan.owner.dashboard", selectors:["#summaryGrid"],
    body:"利用中・相談中、新規相談、LINE承認待ち、認定期限、計画見直し、記録確認、書類期限、本日の予定、警告の全体像を確認します。",
    completion:null, recovery:{visible:"#appPanel:not(.hidden)",step:0}, mutation:false
  },
  {
    content_id:"F10_003", chapter_id:"F10_CH02", title:"利用者台帳へ移動", persona:"管理者・主任ケアマネ",
    route:"owner.html", target_id:"careplan.owner.clients_nav", selectors:[".owner-nav [data-view=\"clients\"]","#viewClients"],
    body:"左メニュー（モバイルでは横スクロールナビ）の「利用者台帳」を開きます。",
    completion:"#viewClients:not(.hidden)", recovery:{visible:"#appPanel:not(.hidden)",step:0}, mutation:false
  },
  {
    content_id:"F10_004", chapter_id:"F10_CH02", title:"デモ利用者を開く", persona:"管理者・主任ケアマネ",
    route:"owner.html", target_id:"careplan.owner.client_open", selectors:["#viewClientDetail:not(.hidden)","#clientList"],
    body:"架空デモ利用者のカードを1件開きます。実在する個人情報はTutorialでは使用しません。",
    completion:"#viewClientDetail:not(.hidden)", recovery:{visible:"#appPanel:not(.hidden)",step:0}, mutation:false
  },
  {
    content_id:"F10_005", chapter_id:"F10_CH03", title:"担当・認定・計画の見る順番", persona:"管理者・主任ケアマネ",
    route:"owner.html", target_id:"careplan.owner.client_overview", selectors:["#viewClientDetail"],
    body:"基本情報 → 担当ケアマネ → 要介護認定 → ケアプラン進捗の順に確認します。「編集」「新規」「保存」「担当を設定」は押しません。",
    completion:null, recovery:{visible:"#viewClientDetail:not(.hidden)",step:3}, mutation:false
  },
  {
    content_id:"F10_006", chapter_id:"F10_CH04", title:"山田様のご家族として体験", persona:"本人・家族",
    route:"member.html", target_id:"careplan.member.login", selectors:["#loginPanel","#portal"],
    body:"「山田様のご家族として体験」を押します。LINE連携申請はこのFirst10では使用しません。",
    completion:"#portal:not(.hidden)", recovery:null, mutation:false
  },
  {
    content_id:"F10_007", chapter_id:"F10_CH04", title:"家族ポータルの3情報を見る", persona:"本人・家族",
    route:"member.html", target_id:"careplan.member.dashboard", selectors:["#portal .dashboard"],
    body:"訪問・面談予定、提出書類、事業所からの連絡を確認します。ファイル提出やメッセージ送信は行いません。",
    completion:null, recovery:{visible:"#portal:not(.hidden)",step:5}, mutation:false
  },
  {
    content_id:"F10_008", chapter_id:"F10_CH05", title:"ケアマネデモでログイン", persona:"ケアマネ",
    route:"staff.html", target_id:"careplan.staff.login", selectors:["#loginPanel","#appPanel"],
    body:"「デモ情報を入力」を押し、「ログイン」を押します。予定・タスクの状態変更ボタンは押しません。",
    completion:"#appPanel:not(.hidden)", recovery:null, mutation:false
  },
  {
    content_id:"F10_009", chapter_id:"F10_CH05", title:"担当利用者を開く", persona:"ケアマネ",
    route:"staff.html", target_id:"careplan.staff.client_open", selectors:["#viewDetail:not(.hidden)","#clientList",".staff-nav [data-view=\"clients\"]"],
    body:"「担当利用者」へ移動し、架空デモ利用者カードを1件開きます。",
    completion:"#viewDetail:not(.hidden)", recovery:{visible:"#appPanel:not(.hidden)",step:7}, mutation:false
  },
  {
    content_id:"F10_010", chapter_id:"F10_CH06", title:"モニタリング入力項目を確認", persona:"ケアマネ",
    route:"staff.html", target_id:"careplan.staff.monitoring_open", selectors:["#monitoringForm:not(.hidden)","#newMonitoring"],
    body:"「今月分を入力」を押し、対象月・方法・状態・評価・本人/家族意向・課題・次の対応・内部申し送り・家族公開要約を確認します。「下書き保存」「提出する」は押しません。",
    completion:"#monitoringForm:not(.hidden)", recovery:{visible:"#viewDetail:not(.hidden)",step:8}, mutation:false
  }
]);

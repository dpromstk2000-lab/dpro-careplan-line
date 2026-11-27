(()=>{'use strict';
  const c=window.DPRO_CONFIG||{};
  const role=location.pathname.split('/').pop();
  const roles={'owner.html':'管理者PC','owner-ipad.html':'管理者iPad','staff.html':'ケアマネ実務','member.html':'本人・家族'};
  const fill=document.getElementById('demoFill');
  const enabled=c.systemCode==='CAREPLAN'&&c.environment==='demo'&&c.demo===true&&c.organizationCode==='dpro_careplan_demo'&&c.apiBase==='https://dpro-careplan-line-api.dpromstk2000.workers.dev';
  if(!enabled){if(fill){fill.hidden=true;fill.style.setProperty('display','none','important');}const member=document.getElementById('demoActions');if(member){member.hidden=true;member.style.setProperty('display','none','important');}return;}
  if(!Object.hasOwn(roles,role)||document.getElementById('careplanDemoNav'))return;
  const style=document.createElement('style');style.textContent=`
  #careplanDemoNav{box-sizing:border-box;max-width:1100px;margin:12px auto;padding:12px 16px;border:1px solid #b9dfd1;border-radius:14px;background:#f2fbf6;color:#103c31;font:inherit;width:calc(100% - 24px)}
  #careplanDemoNav strong{display:block;font-size:16px;margin-bottom:4px}#careplanDemoNav p{font-size:13px;line-height:1.5;margin:0 0 8px}
  #careplanDemoNav .demo-roles{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px}
  #careplanDemoNav a{display:flex;align-items:center;justify-content:center;min-height:44px;border:1px solid #9ccabc;border-radius:9px;background:#fff;color:#134e3e;text-decoration:none;font-size:14px;font-weight:800;text-align:center;padding:8px 4px;line-height:1.4}
  #careplanDemoNav a[aria-current=page]{background:#0b5342;color:#fff;border-color:#0b5342}
  #careplanQuickBox{margin:14px 0 16px;padding:14px;border:1px solid #a8dbca;border-radius:12px;background:#effaf5;color:#123d31}
  #careplanQuickBox p{font-size:14px;line-height:1.5;margin:0 0 10px}#careplanQuickLogin{display:block;width:100%;min-height:50px;padding:12px;border:0;border-radius:9px;background:#087552;color:white;font:inherit;font-size:17px;font-weight:850;cursor:pointer}
  #careplanQuickLogin:disabled{opacity:.65;cursor:wait}#careplanManual summary{cursor:pointer;padding:10px 0;font-size:14px;color:#34544b}#careplanManual form{margin-top:8px}
  #careplanDemoNav a:focus-visible,#careplanQuickLogin:focus-visible,#careplanManual summary:focus-visible{outline:3px solid #0b7557;outline-offset:3px}
  @media(max-width:550px){#careplanDemoNav .demo-roles{grid-template-columns:repeat(2,minmax(0,1fr))}}
  [hidden]{display:none!important}`;document.head.append(style);
  const nav=document.createElement('nav');nav.id='careplanDemoNav';nav.setAttribute('aria-label','公開DEMOの画面切り替え');
  const heading=document.createElement('strong');heading.textContent='DPRO CAREPLAN｜公開操作DEMO';nav.append(heading);
  const note=document.createElement('p');note.textContent='登録不要。画面を選んで体験できます。実在する利用者の情報・書類は入力しないでください。';nav.append(note);
  const links=document.createElement('div');links.className='demo-roles';for(const [path,label] of Object.entries(roles)){const a=document.createElement('a');a.href=path;a.textContent=label;if(path===role)a.setAttribute('aria-current','page');links.append(a)}nav.append(links);
  const main=document.querySelector('main');if(main)main.before(nav);else document.body.prepend(nav);
  if(role==='member.html'){const b=document.getElementById('demoLogin');if(b)b.textContent='本人・家族DEMOを体験する';return;}
  const form=document.getElementById('loginForm'),submit=document.getElementById('loginButton');if(!form||!fill||!submit)return;
  const box=document.createElement('div');box.id='careplanQuickBox';const desc=document.createElement('p');desc.textContent='事業所コードや職員コードの入力は不要です。下のボタンでデモ専用アカウントにログインします。';box.append(desc);
  const quick=document.createElement('button');quick.id='careplanQuickLogin';quick.type='button';quick.textContent=roles[role]+' DEMOを体験する';box.append(quick);form.before(box);
  const details=document.createElement('details');details.id='careplanManual';const summary=document.createElement('summary');summary.textContent='手動ログイン（必要な場合のみ）';details.append(summary);form.before(details);details.append(form);
  const fail=(message)=>{const status=document.getElementById('status');if(window.DPRO?.show)window.DPRO.show(status,'error',message);else if(status)status.textContent=message;};
  quick.addEventListener('click',()=>{if(submit.disabled)return;fill.click();const expected=role==='staff.html'?'DEMO-CARE-01':'DEMO-MANAGER';if(document.getElementById('organizationCode')?.value!=='dpro_careplan_demo'||document.getElementById('staffCode')?.value!==expected||document.getElementById('accessCode')?.value!=='1234'){fail('DEMO設定を確認できません。手動ログインをご確認ください。');return;}form.requestSubmit(submit);});
  const sync=()=>{quick.disabled=submit.disabled;quick.textContent=submit.disabled?'DEMOに接続中…':roles[role]+' DEMOを体験する';};new MutationObserver(sync).observe(submit,{attributes:true,attributeFilter:['disabled']});sync();
})();

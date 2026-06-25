(()=>{
  if(new URLSearchParams(window.location.search).get('studio')==='1')return;

  const STORAGE_KEY='mannypay-visual-studio-fresh-v2';
  const SYNC_KEY='mannypay-studio-sync-ping-v2';
  const syncChannel='BroadcastChannel' in window?new BroadcastChannel('mannypay-studio-sync'):null;
  let lastAppliedAt=0;

  const hasEdits=state=>{const responsive=state?.responsive||{};return state&&(['locals','globals','hoverLocals','hoverGlobals','texts','attributes'].some(key=>Object.keys(state[key]||{}).length)||['tablet','mobile'].some(key=>{const device=responsive[key]||{};return ['locals','globals','hoverLocals','hoverGlobals'].some(bucket=>Object.keys(device[bucket]||{}).length)})||(state.insertions||[]).length||(state.deletions||[]).length||(state.moves||[]).length)};
  function newerState(a,b){const at=Number(a?.updatedAt)||0,bt=Number(b?.updatedAt)||0;if(at!==bt)return at>bt?a:b;if(hasEdits(a))return a;if(hasEdits(b))return b;return a||b||{}}
  function safeGlobalEntries(globals={}){const blocked=new Set(['div','img','.container','body','main','header','footer']);return Object.entries(globals).filter(([selector])=>!blocked.has(selector))}
  function isEditableTextElement(element){return !!element&&!['IMG','INPUT','TEXTAREA','SELECT','OPTION','VIDEO','CANVAS','SVG','FORM'].includes(element.tagName)&&(/^(H[1-6]|P|A|BUTTON|SPAN|STRONG|EM|B|I|SMALL|LABEL|LI|FIGCAPTION|SUMMARY|BLOCKQUOTE|DD|DT)$/.test(element.tagName)||element.children.length===0)}
  async function fetchJson(url){try{const response=await fetch(url,{cache:'no-store'});return response.ok?await response.json():{}}catch{return {}}}
  async function loadSharedState(){
    const baked=window.MANNYPAY_BAKED_STUDIO_STATE||{};
    const api=await fetchJson('/api/studio-state');
    const staticState=hasEdits(api)?{}:await fetchJson('studio-state.json');
    return newerState(newerState(api,staticState),baked);
  }

  async function applySavedOverrides(){
    const state=await loadSharedState();
    if(!state)return;
    const updatedAt=Number(state.updatedAt)||0;
    if(updatedAt&&updatedAt<=lastAppliedAt)return;
    lastAppliedAt=updatedAt||Date.now();
    document.querySelectorAll('[data-studio-insertion-root]').forEach(el=>el.remove());
    document.getElementById('mannypay-saved-overrides')?.remove();
    if(!hasEdits(state)&&!Object.keys(state.texts||{}).length&&!Object.keys(state.attributes||{}).length)return;

    const selectable=[...document.body.querySelectorAll('*')].filter(el=>!['SCRIPT','STYLE','DIALOG'].includes(el.tagName)),pagePrefix=document.body.dataset.pageKey?`${document.body.dataset.pageKey.replace(/[^a-z0-9-]/gi,'-')}-chrome`:'chrome';
    let chromeIndex=0;
    selectable.forEach(el=>{el.dataset.studioId=el.dataset.studioLegacyId||`${pagePrefix}-${++chromeIndex}`});

    (state.insertions||[]).forEach(op=>{
      const anchor=document.querySelector(`[data-studio-id="${op.anchorId}"]`);
      if(!anchor)return;
      const template=document.createElement('template');
      template.innerHTML=op.html.trim();
      const root=template.content.firstElementChild;
      if(!root)return;
      root.dataset.studioInsertionRoot=op.id;
      [root,...root.querySelectorAll('*')].filter(el=>!['SCRIPT','STYLE','DIALOG'].includes(el.tagName)).forEach((el,index)=>{el.dataset.studioId=`${op.id}-${index+1}`});
      if(op.position==='inside')anchor.appendChild(root);else anchor.insertAdjacentElement('afterend',root);
    });

    (state.moves||[]).forEach(move=>{
      const source=document.querySelector(`[data-studio-id="${move.sourceId}"]`),target=document.querySelector(`[data-studio-id="${move.targetId}"]`);
      if(!source||!target||source===target||source.parentElement!==target.parentElement)return;
      if(move.position==='before')target.parentElement.insertBefore(source,target);
      else target.parentElement.insertBefore(source,target.nextElementSibling);
    });

    (state.deletions||[]).forEach(id=>document.querySelector(`[data-studio-id="${id}"]`)?.remove());

    Object.entries(state.attributes||{}).forEach(([id,attrs])=>{
      const el=document.querySelector(`[data-studio-id="${id}"]`);
      if(el)Object.entries(attrs).forEach(([name,value])=>value?el.setAttribute(name,value):el.removeAttribute(name));
    });

    const style=document.createElement('style');
    style.id='mannypay-saved-overrides';
    const declarations=props=>Object.entries(props).filter(([,value])=>value).map(([prop,value])=>`${prop}:${value}!important`).join(';');
    const rulesFor=device=>[...Object.entries(device?.locals||{}).map(([id,props])=>`[data-studio-id="${id}"]{${declarations(props)}}`),...safeGlobalEntries(device?.globals).map(([selector,props])=>`${selector}{${declarations(props)}}`),...Object.entries(device?.hoverLocals||{}).map(([id,props])=>`[data-studio-id="${id}"]:hover{${declarations(props)}}`),...safeGlobalEntries(device?.hoverGlobals).map(([selector,props])=>`${selector}:hover{${declarations(props)}}`)];
    const desktopRules=rulesFor(state);
    const tabletRules=rulesFor(state.responsive?.tablet),mobileRules=rulesFor(state.responsive?.mobile);
    style.textContent=[...desktopRules,tabletRules.length?`@media(max-width:991px){${tabletRules.join('\n')}}`:'',mobileRules.length?`@media(max-width:767px){${mobileRules.join('\n')}}`:''].filter(Boolean).join('\n');
    document.head.appendChild(style);

    Object.entries(state.texts||{}).forEach(([id,text])=>{
      const el=document.querySelector(`[data-studio-id="${id}"]`);
      if(el&&isEditableTextElement(el))el.textContent=text;
    });
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',applySavedOverrides,{once:true});
  else applySavedOverrides();
  syncChannel?.addEventListener('message',event=>{if(event.data?.type==='saved')applySavedOverrides()});
  window.addEventListener('storage',event=>{if(event.key===SYNC_KEY)applySavedOverrides()});
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)applySavedOverrides()});
  setInterval(applySavedOverrides,2500);
})();

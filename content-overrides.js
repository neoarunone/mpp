(()=>{
  const STORAGE_KEY='mannypay-content-overrides-v1';
  const param=new URLSearchParams(location.search);
  if(param.get('studio')==='1')return;

  const editableTags=new Set(['H1','H2','H3','H4','H5','H6','P','A','BUTTON','SPAN','STRONG','EM','B','I','SMALL','LABEL','LI','FIGCAPTION','SUMMARY','BLOCKQUOTE']);
  const pageKey=()=>document.body.dataset.pageKey||'home';
  const normalize=str=>String(str||'').replace(/\s+/g,' ').trim();
  const stableId=(el,index)=>el.dataset.contentId||(el.dataset.contentId=`${pageKey()}-content-${index+1}`);
  function editableElements(){
    return [...document.body.querySelectorAll('h1,h2,h3,h4,h5,h6,p,a,button,span,strong,em,b,i,small,label,li,figcaption,summary,blockquote,img')].filter(el=>!el.closest('[data-content-editor-ui],script,style,dialog')&&!el.closest('.site-header,.site-footer')&&normalize(el.textContent||el.alt||el.src));
  }
  async function fetchJson(url){try{const response=await fetch(url,{cache:'no-store'});return response.ok?await response.json():{}}catch{return {}}}
  async function loadContent(){
    let local={};try{local=JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}')}catch{}
    const file=await fetchJson('content-state.json');
    const localAt=Number(local.updatedAt)||0,fileAt=Number(file.updatedAt)||0;
    return localAt>=fileAt?local:file;
  }
  function applyContent(state){
    const pages=state.pages||{};
    const page=pages[pageKey()]||{};
    editableElements().forEach((el,index)=>{
      const id=stableId(el,index),item=page[id];
      if(!item)return;
      if(el.tagName==='IMG'){
        if(item.src)el.setAttribute('src',item.src);
        if(item.alt!==undefined)el.setAttribute('alt',item.alt);
      }else if(editableTags.has(el.tagName)&&item.text!==undefined)el.textContent=item.text;
      if(el.tagName==='A'&&item.href!==undefined)el.setAttribute('href',item.href);
    });
  }
  async function boot(){applyContent(await loadContent())}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
  window.MANNYPAY_CONTENT={STORAGE_KEY,editableElements,stableId,pageKey,loadContent,applyContent};
})();

window.ReviewSystem = (() => {
  const storageKey = 'eps-review-system-v1';
  const common = [
    'Is the artifact uniquely identified with its current revision, date and accountable owner?',
    'Have the required reviewers recorded their disposition for this maturity review?',
    'Are remaining review issues documented with an owner, due date and agreed impact on the gate decision?'
  ];
  const e = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const gates = window.MaturityMap.maturities.map(gate => ({...gate, questionnaires:gate.outputs.map((artifact,index)=>({
    ...artifact,id:`${gate.code}-A${String(index+1).padStart(2,'0')}`,
    questions:window.ReviewQuestions[artifact.name] ? [...window.ReviewQuestions[artifact.name],...common].map((question,q)=>({id:`${gate.code}-A${String(index+1).padStart(2,'0')}-Q${String(q+1).padStart(2,'0')}`,question})) : []
  }))}));
  const knownQuestions=new Map(gates.flatMap(g=>g.questionnaires.flatMap(a=>a.questions.map(q=>[q.id,q.question]))));
  let state={name:'',reviewer:'',date:'',answers:{}};
  let storageAvailable=true;
  try {
    const saved=JSON.parse(localStorage.getItem(storageKey)||'null');
    if(saved && saved.version===1 && saved.answers && typeof saved.answers==='object') {
      for(const key of ['name','reviewer','date']) if(typeof saved[key]==='string') state[key]=saved[key];
      for(const [id,answer] of Object.entries(saved.answers)) {
        // Keep answers only when the corresponding question is unchanged.
        if(!answer || answer.question!==knownQuestions.get(id)) continue;
        state.answers[id]={question:answer.question,response:['Yes','No','NA'].includes(answer.response)?answer.response:'',comments:typeof answer.comments==='string'?answer.comments:'',evidence:typeof answer.evidence==='string'?answer.evidence:''};
      }
    }
  } catch {storageAvailable=false;}
  const answerFor=id=>state.answers[id]||{response:'',comments:'',evidence:''};
  function counts(gate) {
    const questions=gate.questionnaires.flatMap(a=>a.questions), values=questions.map(q=>answerFor(q.id).response);
    return {total:questions.length,answered:values.filter(Boolean).length,yes:values.filter(v=>v==='Yes').length,no:values.filter(v=>v==='No').length,na:values.filter(v=>v==='NA').length};
  }
  function save() {
    try {localStorage.setItem(storageKey,JSON.stringify({version:1,...state}));storageAvailable=true;} catch {storageAvailable=false;}
    const status=document.getElementById('rs-save-status');
    if(status) status.textContent=storageAvailable?'Saved in this browser only. Export a copy for sharing or retention.':'Browser storage unavailable. Keep this page open and export your responses before leaving.';
  }
  function updateCounts() {
    const page=document.querySelector('[data-review-gate]');if(!page)return;
    const gate=gates.find(g=>g.id===page.dataset.reviewGate),count=counts(gate);
    for(const [key,value] of Object.entries(count)){const target=document.getElementById(`rs-count-${key}`);if(target)target.textContent=value;}
    const progress=document.querySelector(`[data-rs-progress="${gate.id}"]`);if(progress)progress.textContent=`${count.answered}/${count.total}`;
  }
  function renderArtifact(artifact) {
    return `<section class="rs-artifact" aria-labelledby="${artifact.id}-title"><header><div><span class="rs-artifact-id">${artifact.id} · OUTPUT ARTIFACT</span><h2 id="${artifact.id}-title">${e(artifact.name)}</h2><p><b>Owner:</b> ${e(artifact.owner)}<br>${e(artifact.responsibility)}</p></div><button type="button" class="rs-button" data-rs-export="${artifact.id}">Export artifact CSV</button></header>
    ${artifact.questions.length?`<div class="rs-table-scroll" tabindex="0" aria-label="${e(artifact.name)} questionnaire; scroll horizontally for all five columns"><table class="rs-table"><colgroup><col class="rs-col-id"><col class="rs-col-question"><col class="rs-col-response"><col class="rs-col-comments"><col class="rs-col-evidence"></colgroup><thead><tr><th scope="col">ID</th><th scope="col">Review Question</th><th scope="col">Response (Yes/No/NA)</th><th scope="col">Comments</th><th scope="col">Evidence/Reference</th></tr></thead><tbody>${artifact.questions.map(q=>{const a=answerFor(q.id);return `<tr><th scope="row">${q.id}</th><td id="${q.id}-question">${e(q.question)}</td><td><select data-rs-id="${q.id}" data-rs-field="response" aria-label="Response for ${q.id}" aria-describedby="${q.id}-question"><option value="">Select…</option>${['Yes','No','NA'].map(v=>`<option value="${v}"${a.response===v?' selected':''}>${v}</option>`).join('')}</select></td><td><textarea rows="3" data-rs-id="${q.id}" data-rs-field="comments" aria-label="Comments for ${q.id}" placeholder="Rationale or action">${e(a.comments)}</textarea></td><td><textarea rows="3" data-rs-id="${q.id}" data-rs-field="evidence" aria-label="Evidence or reference for ${q.id}" placeholder="Document ID, revision, section or link">${e(a.evidence)}</textarea></td></tr>`;}).join('')}</tbody></table></div>`:'<p class="rs-warning">Questionnaire coverage needs updating for this artifact. No questions have been inferred automatically.</p>'}</section>`;
  }
  function renderRoute(hash) {
    const gate=gates.find(g=>g.id===hash.split('/')[2])||gates[0],count=counts(gate);
    return `<div class="workspace-page rs-page" data-review-gate="${gate.id}">
      <div class="breadcrumb"><a href="#/home">Home</a><span>/</span><span>Review System</span><span>/</span><span>${gate.code}</span></div>
      <header class="rs-hero"><div class="rs-eyebrow">ENGINEERING PROCESS HUB <span>Draft questionnaires</span></div><h1>Review System</h1><p>Artifact review questionnaires for every maturity gate, M0–M10.</p><div class="rs-coverage"><strong>${gates.length} gates</strong><strong>${gates.reduce((n,g)=>n+g.questionnaires.length,0)} output artifacts</strong><strong>${knownQuestions.size} review questions</strong></div></header>
      <section class="rs-review-details" aria-label="Review information"><label>Review name / project<input data-rs-meta="name" value="${e(state.name)}" placeholder="Enter a review or project name"></label><label>Reviewer<input data-rs-meta="reviewer" value="${e(state.reviewer)}" placeholder="Reviewer name"></label><label>Review date<input type="date" data-rs-meta="date" value="${e(state.date)}"></label></section>
      <p class="rs-save-status" id="rs-save-status" role="status">${storageAvailable?'Responses stay in this browser only. Export a copy for sharing or retention.':'Browser storage unavailable. Export your responses before leaving.'}</p>
      <nav class="rs-gates" aria-label="Maturity review gates">${gates.map(g=>{const c=counts(g);return `<a href="#/review-system/${g.id}"${g.id===gate.id?' aria-current="page"':''}><strong>${g.code}</strong><span data-rs-progress="${g.id}">${c.answered}/${c.total}</span></a>`;}).join('')}</nav>
      <section class="rs-gate-header"><div><span class="rs-eyebrow-dark">${gate.code} / ${e(gate.stage)}</span><h2>${e(gate.title)}</h2><p>${e(gate.definition)}</p><a href="#/phases-and-milestones/${gate.id}">View source gate and output artifacts →</a></div><button type="button" class="rs-button rs-primary" data-rs-export="all">Export all gates CSV</button></section>
      <div class="rs-summary" aria-label="Response counts"><span><b id="rs-count-answered">${count.answered}</b> / <b id="rs-count-total">${count.total}</b> answered</span><span><b id="rs-count-yes">${count.yes}</b> Yes</span><span><b id="rs-count-no">${count.no}</b> No</span><span><b id="rs-count-na">${count.na}</b> NA</span></div>
      <div class="rs-guidance"><b>Review convention:</b> Yes = criterion met; No = gap or action needed; NA = not applicable. Leave unreviewed questions blank. Explain No and NA in Comments; cite objective evidence for Yes. Response counts do not approve a maturity gate.</div>
      <div class="rs-artifacts">${gate.questionnaires.map(renderArtifact).join('')}</div>
      <footer class="rs-footer">Proposed questions follow the output artifacts currently defined on the Phases and Milestones pages, which identify their lifecycle content as examples. Review and tailor the questions before adopting them as approved criteria. Changing the review name does not start a separate response set.</footer>
    </div>`;
  }
  const csvCell=value=>{let text=String(value??'');if(/^[\s]*[=+\-@]/.test(text))text="'"+text;return '"'+text.replaceAll('"','""')+'"';};
  function csvRows(scope) {
    const rows=[['ID','Review Question','Response (Yes/No/NA)','Comments','Evidence/Reference']];
    for(const gate of gates)for(const artifact of gate.questionnaires){if(scope!=='all'&&artifact.id!==scope)continue;for(const q of artifact.questions){const a=answerFor(q.id);rows.push([q.id,scope==='all'?`${gate.code} / ${artifact.name}: ${q.question}`:q.question,a.response,a.comments,a.evidence]);}}
    return '\uFEFF'+rows.map(row=>row.map(csvCell).join(',')).join('\r\n');
  }
  document.addEventListener('input',event=>{
    const target=event.target,meta=target.dataset.rsMeta;
    if(['name','reviewer','date'].includes(meta)){state[meta]=target.value;save();return;}
    const id=target.dataset.rsId,field=target.dataset.rsField;
    if(!knownQuestions.has(id)||!['response','comments','evidence'].includes(field))return;
    if(field==='response'&&!['','Yes','No','NA'].includes(target.value))return;
    state.answers[id]={...answerFor(id),question:knownQuestions.get(id),[field]:target.value};save();updateCounts();
  });
  document.addEventListener('click',event=>{
    const button=event.target.closest('[data-rs-export]');if(!button)return;
    const scope=button.dataset.rsExport,url=URL.createObjectURL(new Blob([csvRows(scope)],{type:'text/csv;charset=utf-8'})),link=document.createElement('a');
    link.href=url;link.download=`review-${state.name.replace(/[^a-z0-9_-]+/gi,'-').slice(0,60)||'draft'}-${scope}.csv`;
    document.body.appendChild(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
  });
  return {renderRoute,gates,counts,csvRows};
})();

const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const read=name=>fs.readFileSync(path.join(root,name),'utf8');
const context={};vm.createContext(context);
vm.runInContext(read('use-cases-data.js')+';globalThis.catalog={organizations,organizationForms,departments,useCases,featuredCaseIds};',context);
const c=context.catalog;
test('every catalog record has valid tags and a complete pilot',()=>{
 assert.equal(c.useCases.length,36);assert.equal(new Set(c.useCases.map(x=>x.id)).size,36);
 assert.equal(c.featuredCaseIds.length,12);
 for(const x of c.useCases){for(const field of ['id','title','summary','pilot','measure','validate'])assert.ok(x[field]?.trim(),x.id+':'+field);
 assert.ok(['Chat','Cowork','Code','API'].includes(x.route));assert.ok(c.departments[x.department]);
 for(const k of x.orgs)assert.ok(c.organizations[k]);for(const k of x.forms)assert.ok(c.organizationForms[k]);}
 for(const id of c.featuredCaseIds)assert.ok(c.useCases.some(x=>x.id===id));
});
test('every browse facet has at least one workflow',()=>{
 for(const k of Object.keys(c.organizations))assert.ok(c.useCases.some(x=>x.orgs.includes(k)));
 for(const k of Object.keys(c.organizationForms))assert.ok(c.useCases.some(x=>x.forms.includes(k)));
 for(const k of Object.keys(c.departments))assert.ok(c.useCases.some(x=>x.department===k));
});
test('every page has local assets and an independence notice',()=>{
 for(const name of ['index.html','use-cases.html','models.html','pilot-value.html']){
 const s=read(name);assert.match(s,/Independent JayAI project/);
 for(const m of s.matchAll(/(?:src|href)="([^"#]+)"/g)){
 const url=m[1].split('?')[0];if(!/^(https?:|data:)/.test(url))assert.ok(fs.existsSync(path.join(root,url)),name+':'+url);
 }
 }
});
const pilot=read('pilot-value.js');
const math=pilot.slice(pilot.indexOf('function calculate('),pilot.indexOf('\nfunction render()'));
vm.runInContext(math,context);
const standard={volume:250,baseline:20,assisted:14,realization:50,hourly:60,operating:400,'api-cost':0,implementation:10000};
test('capacity math reconciles and keeps full slower-workflow penalty',()=>{
 const r=context.calculate(standard);assert.equal(r.annualCapacityHours,150);assert.equal(r.threeYearNet,2600);assert.equal(r.payback,10000/350);
 const slower=context.calculate({...standard,assisted:26,realization:0});assert.equal(slower.annualCapacityHours,-300);assert.equal(slower.threeYearNet,-78400);assert.equal(slower.payback,null);
 const volunteer=context.calculate({...standard,hourly:0});assert.equal(volunteer.annualCapacityHours,150);assert.equal(volunteer.annualCapacityValue,0);assert.equal(volunteer.threeYearNet,-24400);
 const free=context.calculate({...standard,operating:0,implementation:0});assert.equal(free.roi,null);assert.equal(free.payback,0);
});
test('API base-rate arithmetic and limits match fixed reference cases',()=>{
 const models=read('models.js');const list=models.slice(models.indexOf('const MODELS'),models.indexOf('\nconst $'));
 const cost=models.slice(models.indexOf('function cost('),models.indexOf('\nfunction validateFields'));
 vm.runInContext(list+';'+cost+';globalThis.models=MODELS;',context);
 const totals=[27.5,55,110,275];context.models.forEach((m,i)=>assert.equal(context.cost(m,{input:2500,output:600,requests:5000}).total,totals[i]));
 assert.ok(context.modelLimit(context.models[0],{input:199000,output:2000}));assert.equal(context.modelLimit(context.models[1],{input:199000,output:2000}),'');
});

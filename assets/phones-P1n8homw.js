function e(r){return r?r.split(/[,;/]| or /i).map(t=>t.trim()).filter(t=>/\d/.test(t)):[]}function n(r){return`tel:${r.replace(/[^\d+]/g,"")}`}export{e as p,n as t};

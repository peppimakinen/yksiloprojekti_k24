import{f as a}from"./fetch-ZGf-g78y.js";let d=localStorage.getItem("token");const E=document.querySelector(".get_entry");E.addEventListener("click",async()=>{console.log("Hienosti klikkasit"),a("http://localhost:3000/api/entries/1").then(e=>{console.log(e)})});const g=document.querySelector(".get_users");g.addEventListener("click",y);async function y(){const n="http://localhost:3000/api/users",e={method:"GET",headers:{Authorization:"Bearer: "+d}};a(n,e).then(o=>{console.log(o),T(o)})}async function T(n){const e="http://127.0.0.1:3000/api/users",o={method:"GET",headers:{Authorization:"Bearer: "+d}};a(e,o).then(t=>{console.log(t)});const l=document.querySelector(".tbody");l.innerHTML="",n.forEach(t=>{console.log(t.username);let s=document.createElement("tr"),i=document.createElement("td");i.innerText=t.username;let u=document.createElement("td");u.innerText=t.user_level;let h=document.createElement("td"),r=document.createElement("button");r.className="check",r.setAttribute("data-id",t.user_id),r.innerText="Info",h.appendChild(r),r.addEventListener("click",b);let p=document.createElement("td"),c=document.createElement("button");c.className="del",c.setAttribute("data-id",t.user_id),c.innerText="Delete",p.appendChild(c),c.addEventListener("click",f);let m=document.createElement("td");m.innerText=t.user_id,s.appendChild(i),s.appendChild(u),s.appendChild(h),s.appendChild(p),s.appendChild(m),l.appendChild(s)})}function b(){console.log("hienosti osaat nappii painaa")}async function f(n){console.log("why are u trying to delete me :("),console.log(n);const e=n.target.attributes["data-id"].value;console.log(e);const o="http://127.0.0.1:3000/api/users/"+e,l={method:"DELETE",headers:{Authorization:"Bearer: "+d}};a(o,l).then(t=>{console.log(t)})}async function k(){const n="http://127.0.0.1:3000/api/auth/me",e={method:"GET",headers:{Authorization:"Bearer: "+d}};a(n,e).then(o=>{console.log(o),document.getElementById("name").innerHTML=o.user.username})}k();
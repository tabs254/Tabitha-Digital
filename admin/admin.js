let businesses = JSON.parse(localStorage.getItem('tabitha_businesses') || '[]');
if(businesses.length === 0){
 businesses = [{id:1, name:"StyledbyMoh Salon", category:"Salon", phone:"0700000000", location:"Ngong"}];
 localStorage.setItem('tabitha_businesses', JSON.stringify(businesses));
}
function showSection(id, e){
 document.querySelectorAll('.admin-section').forEach(s=>s.style.display='none');
 let sec=document.getElementById(id); if(sec) sec.style.display='block';
 if(e){document.querySelectorAll('.menu-link').forEach(l=>l.classList.remove('active'));e.target.classList.add('active');}
 if(id==='businesses') renderBusinessList();
}
function renderBusinessList(){
 let c=document.getElementById('businessList');
 let count=document.getElementById('activeCount');
 if(count) count.textContent=businesses.length;
 if(!c) return;
 c.innerHTML=businesses.map(b=>`<div style="border:1px solid #ddd;padding:12px;border-radius:8px;margin-bottom:8px;display:flex;justify-content:space-between;background:#fff"><div><b>${b.name}</b><br><small>${b.category} | ${b.phone}</small></div><button onclick="deleteBusiness(${b.id})" style="background:red;color:#fff;border:none;padding:6px 10px;border-radius:5px">Delete</button></div>`).join('');
}
function openAddBusinessModal(){
 let name=prompt('Business name:'); if(!name) return;
 let cat=prompt('Category (Salon, Barber, Shop):'); if(!cat) return;
 let phone=prompt('Phone:'); if(!phone) return;
 let loc=prompt('Location:')||'Kenya';
 businesses.push({id:Date.now(), name:name, category:cat, phone:phone, location:loc});
 localStorage.setItem('tabitha_businesses', JSON.stringify(businesses));
 renderBusinessList(); alert('Added: '+name);
}
function deleteBusiness(id){
 if(!confirm('Delete?')) return;
 businesses=businesses.filter(b=>b.id!==id);
 localStorage.setItem('tabitha_businesses', JSON.stringify(businesses));
 renderBusinessList();
}
function openAddServiceModal(){alert('Service added');}
function lockClient(i,n){if(confirm('Lock '+n+'?')) alert(n+' locked');}
function recordPayment(i,a){alert('Payment KES '+a+' recorded');}
function generatePaymentReport(){alert('Report generated');}
document.addEventListener('DOMContentLoaded',()=>{
 renderBusinessList();
 let el=document.getElementById('adminUsername'); if(el) el.textContent=sessionStorage.getItem('adminUsername')||'admin';
});

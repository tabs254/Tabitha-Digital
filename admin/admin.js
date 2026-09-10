// Tabitha Digital - Final Admin JS with Photos & Lock
let businesses = JSON.parse(localStorage.getItem('tabitha_businesses') || '[]');
if (businesses.length === 0) {
  businesses = [{ id: 1, name: "StyledbyMoh Salon", category: "Salon", phone: "0700000000", location: "Ngong", photo: "", locked: false }];
}

function showSection(id, e) {
  document.querySelectorAll('.admin-section').forEach(s => s.style.display = 'none');
  let sec = document.getElementById(id);
  if (sec) sec.style.display = 'block';
  if (e) {
    document.querySelectorAll('.menu-link,.sidebar a').forEach(l => l.classList.remove('active'));
    e.target.classList.add('active');
  }
  renderAll();
}

function renderAll() {
  localStorage.setItem('tabitha_businesses', JSON.stringify(businesses));

  // Update counters
  let activeCount = document.getElementById('activeCount');
  if (activeCount) activeCount.textContent = businesses.length;
  let totalEl = document.getElementById('totalBusinesses');
  if (totalEl) totalEl.textContent = businesses.length;

  // Render list
  let list = document.getElementById('businessList');
  if (list) {
    if (businesses.length === 0) {
      list.innerHTML = '<p style="padding:20px;text-align:center;color:#888">No businesses yet. Tap Add Business.</p>';
    } else {
      list.innerHTML = businesses.map(b => `
        <div style="border:1px solid #e5e7eb;padding:12px;border-radius:12px;margin-bottom:10px;display:flex;gap:12px;background:#fff;align-items:center">
          <div style="width:55px;height:55px;border-radius:8px;background:#f3f4f6;overflow:hidden;flex-shrink:0">
            ${b.photo? `<img src="${b.photo}" style="width:100%;height:100%;object-fit:cover">` : `<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:20px">🏢</div>`}
          </div>
          <div style="flex:1">
            <b>${b.name} ${b.locked? '🔒' : ''}</b><br>
            <small style="color:#666">${b.category} | ${b.phone} | ${b.location}</small><br>
            <small style="color:${b.locked? 'red' : 'green'}">${b.locked? 'Locked' : 'Active'}</small>
          </div>
          <div style="display:flex;flex-direction:column;gap:6px">
            <button onclick="toggleLock(${b.id})" style="background:${b.locked? '#10b981' : '#f59e0b'};color:#fff;border:none;padding:6px 10px;border-radius:6px;font-size:12px">${b.locked? 'Unlock' : 'Lock'}</button>
            <button onclick="deleteBusiness(${b.id})" style="background:#ef4444;color:#fff;border:none;padding:6px 10px;border-radius:6px;font-size:12px">Delete</button>
          </div>
        </div>
      `).join('');
    }
  }
}

// === ADD BUSINESS MODAL WITH PHOTO ===
function openAddBusinessModal() {
  // Create modal if not exists
  let existing = document.getElementById('addBusinessModal');
  if (existing) existing.remove();

  let modal = document.createElement('div');
  modal.id = 'addBusinessModal';
  modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px';
  modal.innerHTML = `
    <div style="background:#fff;border-radius:16px;padding:20px;width:100%;max-width:400px;max-height:90vh;overflow-y:auto">
      <h3 style="margin:0 0 15px">Add Business</h3>
      <input id="bName" placeholder="Business Name *" style="width:100%;padding:12px;margin-bottom:10px;border:1px solid #ddd;border-radius:8px">
      <input id="bCategory" placeholder="Category (Salon, Spa...)" value="Salon" style="width:100%;padding:12px;margin-bottom:10px;border:1px solid #ddd;border-radius:8px">
      <input id="bPhone" placeholder="Phone" style="width:100%;padding:12px;margin-bottom:10px;border:1px solid #ddd;border-radius:8px">
      <input id="bLocation" placeholder="Location" value="Ngong" style="width:100%;padding:12px;margin-bottom:10px;border:1px solid #ddd;border-radius:8px">
      <label style="font-size:13px;color:#666">Business Photo:</label>
      <input id="bPhoto" type="file" accept="image/*" style="width:100%;padding:10px;margin-bottom:15px;border:1px solid #ddd;border-radius:8px">
      <div style="display:flex;gap:10px">
        <button onclick="document.getElementById('addBusinessModal').remove()" style="flex:1;padding:12px;border:1px solid #ddd;background:#fff;border-radius:8px">Cancel</button>
        <button onclick="saveNewBusiness()" style="flex:1;padding:12px;background:#000;color:#fff;border:none;border-radius:8px;font-weight:bold">Save</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

function saveNewBusiness() {
  let name = document.getElementById('bName').value.trim();
  if (!name) { alert('Name required'); return; }
  let cat = document.getElementById('bCategory').value.trim() || 'Salon';
  let phone = document.getElementById('bPhone').value.trim() || '0700000000';
  let loc = document.getElementById('bLocation').value.trim() || 'Ngong';
  let photoInput = document.getElementById('bPhoto');

  let newBiz = { id: Date.now(), name, category: cat, phone, location: loc, photo: "", locked: false };

  if (photoInput.files && photoInput.files[0]) {
    let reader = new FileReader();
    reader.onload = function(e) {
      newBiz.photo = e.target.result;
      businesses.push(newBiz);
      renderAll();
      document.getElementById('addBusinessModal').remove();
      alert('Added: ' + name);
      showSection('businesses');
    };
    reader.readAsDataURL(photoInput.files[0]);
  } else {
    businesses.push(newBiz);
    renderAll();
    document.getElementById('addBusinessModal').remove();
    alert('Added: ' + name);
    showSection('businesses');
  }
}

function deleteBusiness(id) {
  if (!confirm('Delete this business?')) return;
  businesses = businesses.filter(b => b.id!== id);
  renderAll();
}

function toggleLock(id) {
  let b = businesses.find(x => x.id === id);
  if (b) {
    b.locked =!b.locked;
    renderAll();
  }
}

// Dummy functions for other buttons
function openAddServiceModal(){ alert('Add Service - coming soon'); }
function lockClient(i,n){ alert('Lock client: '+n); }
function recordPayment(i,a){ alert('Payment KES '+a+' recorded'); }
function generatePaymentReport(){ alert('Report generated'); }
function renderBusinessList(){ renderAll(); }

document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  let el = document.getElementById('adminUsername');
  if (el) el.textContent = sessionStorage.getItem('adminUsername') || 'admin';
});

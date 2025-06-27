document.getElementById('jobForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const job = {
    company: document.getElementById('company').value,
    position: document.getElementById('position').value,
    status: document.getElementById('status').value,
    appliedDate: document.getElementById('appliedDate').value
  };
  await fetch('/api/jobs', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(job)
  });
  location.reload();
});

async function loadJobs() {
  const res = await fetch('/api/jobs');
  const jobs = await res.json();
  const list = document.getElementById('jobList');
  list.innerHTML = '';
  jobs.forEach(job => {
    const li = document.createElement('li');
    li.textContent = `${job.company} - ${job.position} (${job.status})`;
    list.appendChild(li);
  });
}
loadJobs();

// Theme toggle
const themeBtn = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const saved = localStorage.getItem('site_theme');
if(saved) document.body.classList.toggle('dark', saved === 'dark');
else if(prefersDark) document.body.classList.add('dark');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('site_theme', isDark ? 'dark' : 'light');
    themeBtn.textContent = isDark ? '☀️' : '🌙';
});
// set initial icon
themeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
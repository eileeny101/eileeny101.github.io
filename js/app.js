// Router configuration
const routes = {
    '/': 'pages/home.html',
    '/iceland': 'pages/iceland.html'
};

// Handle navigation
async function navigateTo(path) {
    const content = document.getElementById('app');
    const url = routes[path] || routes['/'];
    
    try {
        const response = await fetch(url);
        const html = await response.text();
        content.innerHTML = html;
        
        // Update browser history
        history.pushState({}, '', path);
        
        // Update page title
        document.title = path === '/' ? 'solodex' : path.slice(1);
        
        // Reattach event listeners
        attachEventListeners();
    } catch (error) {
        console.error('Error loading page:', error);
        content.innerHTML = '<p>Error loading page. Please try again.</p>';
    }
}

// Attach event listeners to navigation links
function attachEventListeners() {
    document.querySelectorAll('a[data-page]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const path = link.getAttribute('href');
            navigateTo(path);
        });
    });
}

// Handle browser back/forward buttons
window.addEventListener('popstate', () => {
    navigateTo(window.location.pathname);
});

// Initial page load
document.addEventListener('DOMContentLoaded', () => {
    // Load the initial page
    navigateTo(window.location.pathname);
    
    // Handle logo click
    document.querySelector('.logo').addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo('/');
    });
}); 
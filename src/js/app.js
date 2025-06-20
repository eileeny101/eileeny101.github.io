        // Update browser history
        if (window.location.pathname !== path) {
            history.pushState({}, '', path);
        }
        
        // Update page title
        document.title = path === '/' ? 'solodex' : (path === '/iceland' ? 'Iceland' : path.slice(1));
        
        // Reattach event listeners
        attachEventListeners(); 
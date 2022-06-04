if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js', {scope:'/'})
    .then((registration) => {
    console.log('SW Registered:', registration);
    })
    .catch((error) => {
    console.log('Failed. Error:', error);
    });
    }
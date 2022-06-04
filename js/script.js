if ('serviceWorker' in navigator) {
<<<<<<< HEAD
    navigator.serviceWorker.register('/service-worker.js', {scope:'/'})
=======
    navigator.serviceWorker.register('/service-worker.js', {scope : '/'})
>>>>>>> main
    .then((registration) => {
    console.log('SW Registered:', registration);
    })
    .catch((error) => {
    console.log('Failed. Error:', error);
    });
    }

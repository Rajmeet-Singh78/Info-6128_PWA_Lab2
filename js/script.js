if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/Info-6128_PWA_Lab2/service-worker.js', {scope:'/Info-6128_PWA_Lab2'})
    .then((registration) => {
    console.log('SW Registered:', registration);
    })
    .catch((error) => {
    console.log('Failed. Error:', error);
    });
    }
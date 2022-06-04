
// Everytime something comes from the web
self.addEventListener('fetch', (event) => {
    return
    });



//Called when SW gets installed
self.addEventListener('install', (event) => {
    console.log("SW Installed: ", event);

    //To skip the waiting and making SW activated 
    self.skipWaiting();
    });


// Called when SW gets activated
self.addEventListener('activate', (event) => {
    console.log("SW Activated: ", event);
    event.waitUntil(clients.claim());
    });
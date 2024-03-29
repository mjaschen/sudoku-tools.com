if ("serviceWorker" in navigator) {
    window.addEventListener("load", async () => {
        try {
            let reg;

            if (document.location.hostname === "127.0.0.1") {
                reg = await navigator.serviceWorker.register("/service-worker.js?CACHE_BUSTER", {
                    type: "module",
                });
            } else {
                reg = await navigator.serviceWorker.register("/service-worker.js?CACHE_BUSTER");
            }
        } catch (err) {
            console.log("😥 Service worker registration failed: ", err);
        }
    });
}

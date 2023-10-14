if ("serviceWorker" in navigator) {
    window.addEventListener("load", async () => {

        try {
            let reg;

            if (document.location.hostname === "127.0.0.1") {
                reg = await navigator.serviceWorker.register(
                    "/service-worker.js",
                    {
                        type: "module",
                    }
                );
            } else {
                reg = await navigator.serviceWorker.register(
                    "/service-worker.js"
                );
            }
        } catch (err) {
            console.log("😥 Service worker registration failed: ", err);
        }
    });
}

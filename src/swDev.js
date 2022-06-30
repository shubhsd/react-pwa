export default function swDev() {
    if (!process.env.PUBLIC_URL && process.env.NODE_ENV === 'production' && "serviceWorker" in navigator) {
        const swUrl = `${process.env.PUBLIC_URL}/sw.js`
        // This condition checks if service worker is present or not, in old browsers like IE it was not there
        navigator.serviceWorker.register(swUrl).then((result) => {
            console.warn("result", result)
        }).catch((err) => {
            console.warn("err", err);
        })
    } else {
        console.warn("Service worker not working");
    }



    // let swUrl = `${process.env.PUBLIC_URL}/sw.js`
    // navigator.serviceWorker.register(swUrl).then((result) => {
    //     console.warn("result", result)
    // }).catch((err) => {
    //     console.warn("err", err);
    // })
}
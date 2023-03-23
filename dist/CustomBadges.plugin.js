/**
 * @name CustomBadges
 * @author AntogamerYT
 * @description Get custom badges visible to users using this plugin on your profile!
 * @version 1.0.0
 * @invite ekaCwEfUt4
 */
module.exports = class CustomBadges {
    start() {
        // Called when the plugin is activated (including after reloads)
        BdApi.UI.showToast("Hello! CustomBadges was loaded, thanks for using the plugin :)");
        // create observer
        function waitForElm(selector) {
            return new Promise(resolve => {
                if (document.querySelector(selector)) {
                    return resolve(document.querySelector(selector));
                }
                //@ts-expect-error
                observer = new MutationObserver(mutations => {
                    if (document.querySelector(selector)) {
                        resolve(document.querySelector(selector));
                        //@ts-expect-error
                        observer.disconnect();
                    }
                });
                //@ts-expect-error
                observer.observe(document.body, {
                    childList: true,
                    subtree: true
                });
            });
        }
        waitForElm('.userPopoutOuter-3AVBmJ').then((elm) => {
            console.log(elm);
        });
    }
    stop() {
        // @ts-expect-error
        observer.disconnect();
    }
    observer(changes) { }
};

(function () {
    "use strict";
    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;
    app.addEventListener("activated", function (args) {
        if(args.detail.kind === activation.ActivationKind.launch) {
            if(args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
            } else {
            }
            args.setPromise(WinJS.UI.processAll().then(function () {
            }));
        }
    });
    app.oncheckpoint = function (args) {
    };
    app.start();
})();

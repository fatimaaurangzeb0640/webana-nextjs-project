const { PHASE_PRODUCTION_BUILD } = require("next/constants");

// https://nextjs.org/docs/#custom-configuration
module.exports = function(phase) {
    const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.APP_ENV === "production";

    const env = {
       
        IMAGESSUBDOMAIN: (() => {
            if (isProd) {
                return "";
            }
            
            return "";
        })()
    };
    return {
        env
    };
};

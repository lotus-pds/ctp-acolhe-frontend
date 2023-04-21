import LanguageDetector from "i18next-browser-languagedetector";

export const languageDetectorOptions = {
    order : [
        "querystring",
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain"
    ],

    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage:"i18nextLng",
    lookupFromPathIndex: 0,
    lookupFromSubdomainIndex: 0,

    caches: ["localStorage", "cookie"],

    excludeCacheFor: ["cimode"]
};

export const languageDetector = new LanguageDetector();

languageDetector.addDetector({
    name: "fbLangDetector",

    lookup(options){
        console.log("lookup", options);
        return "pt"
    },

    cacheUserLanguage(lng, options){
        console.log("cacheUserLanguage", lng, options);
    }
})
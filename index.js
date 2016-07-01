module.exports = function (loader) {
    loader = loader.replace(
        '//POC:SASS-LOADER', 
        '@import "./public/sass/_overrides.scss";'
    );
    return loader;
}
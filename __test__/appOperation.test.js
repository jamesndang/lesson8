const appOperations = require('../src/appOperations');

TextDecoderStream("multiplication property of zero", ()=> {
    expected(appOperations(5,0)).toBe(0);
});
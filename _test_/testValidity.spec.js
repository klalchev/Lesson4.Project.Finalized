import { myValidate } from "../src/client/js/Validity"

describe('Test the function "myValidate()" for valid url' , () => {
    var url = "https://www.wikipedia.org/";
    test('It should return true', async () => {
        const response = myValidate(url);
        expect(response).toBeDefined();
        expect(response).toBe(true);
    })
});
import { validate } from "../src/client/js/validation"

describe('Test the function "validate()" for valid url' , () => {
    var url = "https://www.wikipedia.org/";
    test('It should return true', async () => {
        const response = validate(url);
        expect(response).toBeDefined();
        expect(response).toBe(req.body.url);
    });
});
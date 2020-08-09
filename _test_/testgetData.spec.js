import { getMockAPI } from "../src/client/js/getData"

test('testing sidet data', () => {
    expect(getMockAPI('/test')).resolves.toBe({
        'title':'neutral',
        'message':'this is a message',
        'time': 'now'
        // "text":"John is a very good football player",
        // "subjectivity_confidence":0.5427156021389409
      })
})
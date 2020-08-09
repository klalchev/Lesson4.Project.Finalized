import { postData } from "../src/client/js/postData"

test('testing sidet data', () => {
    expect(postData('/addSentimentAnalysis', {url: "https://www.wikipedia.org/"})).resolves.toBe({
        "polarity":"neutral",
        "subjectivity":"objective",
        // "text":"John is a very good football player",
        "polarity_confidence": 0.7726206740988575,
        // "subjectivity_confidence":0.5427156021389409
      })
})
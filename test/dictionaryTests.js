import linear from "../dictionary-linear-search.js";
import indexed from "../dictionary-index-search.js";
import binary from "../dictionary-binary-search.js";

import assert from "assert";

const searches = {
    "Linear": linear,
    //❓ Question 5, uncomment the following line
    "Indexed": indexed,
    
    //❓ Question 7, uncomment the following line.
    //"Binary": binary
}

const goodWords = [
    "aardvark",
    "fermenting",
    "photograph",
    "zygotes",
];

const badWords = [
    "squanchy",
    "cromulent"
]

describe("Dictionary Tests:", function () {

    for (const name in searches) {
        const search = searches[name];

        describe(`Testing ${name} search...`, function () {
            for (const word of goodWords) {
                it(`Finds the word ${word}`, function () {
                    assert.ok(search(word));
                });
            }

            for (const word of badWords) {
                it(`Does not find the word ${word}`, function () {
                    assert.ok(!search(word));
                });
            }
        });
    }


});
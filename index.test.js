const translate = require("./index.js");

describe("translate", function(){
    test("Checks if word starts with vowel", function(){
        expect(translate("isolate")).toMatch("isolateway");
    });
    test("Checks if word starts with vowel", function(){
        expect(translate("apple")).toMatch("appleway");
    });
    test("Checks if word starts with vowel", function(){
        expect(translate("eat")).toMatch("eatway");
    });
    test("Checks if word starts with vowel", function(){
        expect(translate("igloo")).toMatch("iglooway");
    });
    test("Checks if word starts with vowel", function(){
        expect(translate("isolate")).toMatch("isolateway");
    });
    test("Checks if word all caps word will start with vowel", function(){
        expect(translate("ANIMAL")).toMatch("animalway");
    });
    test("Checks if word starts with consonant and then applies translation", function(){
        expect(translate("taco")).toMatch("acotay");
    });
    test("Checks if word starts with consonant and then applies translation", function(){
        expect(translate("rick")).toMatch("ickray");
    });
    test("Checks if word starts with two consonants and then applies translation", function(){
        expect(translate("thor")).toMatch("orthay");
    });
    test("Checks if word starts with three consonants and then applies translation", function(){
        expect(translate("throat")).toMatch("oatthray");
    });
    test("Checks if capitalized word starts with consonant and then applies translation", function(){
        expect(translate("TACO")).toMatch("acotay");
    });

});

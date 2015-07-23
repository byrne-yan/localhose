Tinytest.add('Localhose: localhose is defined', function (test) {

    test.isNotUndefined(localhose, "localhose should be defined");
})

Tinytest.add('Localhose: list empty domains', function (test) {
    localhose.unset(localhose.list());
    test.equal(localhose.list(), []);
});
Tinytest.add('Localhose: set a domain', function (test) {
    localhose.set(['www.example.com']);
    test.equal(localhose.list(), ['www.example.com']);
});

Tinytest.add('Localhose: add a domain', function (test) {
    localhose.add('www2.example.com');
    test.equal(localhose.list(), ['www.example.com','www2.example.com']);
})

Tinytest.add('Localhose: list domains', function (test) {
    test.equal(localhose.list(), ['www.example.com','www2.example.com']);
});


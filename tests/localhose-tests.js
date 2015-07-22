Tinytest.add('Localhose: localhose is defined', function (test) {

    test.isNotUndefined(localhose, "localhose should be defined");
})

Tinytest.add('Localhose: list empty domains', function (test) {
    test.equal(localhose.list(), []);
});
Tinytest.add('Localhose: add a domain', function (test) {
    localhose.set('www.example.com');
    localhose.flushDNS();

    test.equal(localhose.domains(), ['www.example.com']);
});

Tinytest.add('Localhose: set a domain', function (test) {
    localhose.set(['www2.example.com'] );
    localhose.flushDNS();
    test.equal(localhose.domains(), ['www.example.com','www2.example.com']);
})

Tinytest.add('Localhose: list domains', function (test) {
    test.equal(localhose.list(), ['www.example.com','www2.example.com']);
});


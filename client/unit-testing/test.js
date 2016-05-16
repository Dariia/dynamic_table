/**
 * Tests
 */

describe("PageConstructor", function() {
    var pageConstructorTest = new PageConstructor();

    it("PageConstructor is an object", function() {
        expect(pageConstructorTest).toEqual(jasmine.any(Object));
    });

    //it("PageConstructor init is function", function() {
    //    expect(pageConstructorTest.init()).toEqual(jasmine.any(Object));
    //});

    it("Pageconstructor error testing", function(){
        pageConstructorTest.errorDisplay({ message: '123' });
        expect(pageConstructorTest.errorElem.innerHTML).toEqual('Error: 123');
    });
});

describe("TableConstructor", function() {
    var tableConstructor = new TableConstructor();
    var ccs = tableConstructor.processingData('d, d, d, d' + '\n' + ' f, f, f, f'),
        getTable = tableConstructor.getDataTable();

    it("table constructor exists", function() {
        expect(tableConstructor).toEqual(jasmine.any(Object));
    });

    it("table constructor init has function", function() {
        expect(tableConstructor.init()).toEqual(jasmine.any(Object));
    });

    it("processingData returns array", function() {
        expect(ccs).toEqual(jasmine.any(Array));
    });

    it("processingData length is correct", function() {
        expect(ccs[0].length).toEqual(4);
    });

    it("getDataTable returns table", function() {
        expect(getTable.tagName.toLowerCase() == 'table').toBe(true);
    });

    it("getDataTable creates table", function() {
        expect(document.body.getElementsByTagName('table')).toEqual(jasmine.any(Object));
    });
});


describe("DeltasTableConstructor", function() {
    var tableDeltasConstructor = new TableDeltasConstructor();
    var ccs = tableDeltasConstructor.processingData(',,9,6\n600\n,8,5,\n900' );

    it("TableDeltasConstructor is instance of TableConstructor", function() {
        expect(tableDeltasConstructor instanceof TableConstructor).toBe(true);
    });

    it("table deltas constructor exists", function() {
        expect(tableDeltasConstructor).toEqual(jasmine.any(Object));
    });

    it("table deltas processingData length is correct", function() {
        expect(ccs[0].length).toEqual(4);
    });
});

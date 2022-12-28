"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const assert_1 = __importDefault(require("assert"));
const index_1 = require("./index");
describe("ts tests", () => {
    it("get greeting", () => {
        // arrange
        const birthYear = 1972;
        const name = "Marcus";
        // act
        const result = (0, index_1.greet)(name, birthYear);
        // assert
        assert_1.default.strictEqual(result, "Hello Marcus, you are 50 years old");
    });
    //--------------------
    it("returns true if age is above 35", () => {
        // act
        const is34Old = (0, index_1.isOld)(34);
        const is35Old = (0, index_1.isOld)(35);
        const is36Old = (0, index_1.isOld)(36);
        // assert
        assert_1.default.strictEqual(is34Old, false);
        assert_1.default.strictEqual(is35Old, true);
        assert_1.default.strictEqual(is36Old, true);
    });
    //---------------------------
    it("fun with variables", () => {
        // act
        let name = "Marcus";
        let nameImplicit = "Marcus";
        let nameImplicit2 = name;
        const cool = true;
        const birthYear = 1972;
        // arrange
        assert_1.default.strictEqual(typeof cool, "boolean");
        assert_1.default.strictEqual(typeof birthYear, "number");
        assert_1.default.strictEqual(typeof name, "string");
        assert_1.default.strictEqual(typeof nameImplicit, "string");
        assert_1.default.strictEqual(typeof nameImplicit2, "string");
    });
    //----------
    it("arrays are typed in ts", () => {
        const names = ["Marcus", "Julia", "Catherine"];
        const firstFive = [1, 2, 3, 4, 5];
    });
    //---------------------------------------------
    it("count odd numbers", () => {
        // arrange
        const firstFive = [1, 2, 3, 4, 5];
        // act
        const numberOfOdds = (0, index_1.countOdd)(firstFive);
        // arrange
        assert_1.default.strictEqual(numberOfOdds, 3);
    });
    //------------------------------------------------
    it("sum event numbers", () => {
        // arrange
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        // act
        const sum = (0, index_1.sumEven)(nums);
        // arrange
        assert_1.default.strictEqual(sum, 30);
    });
    //-----------------------------------------------------
    it("gets the street number for a person", () => {
        // arrange
        const p = {
            name: "Marcus",
            birthYear: 1972,
            address: {
                street: "Strålgatan",
                streetNo: 23,
                city: "Stockholm",
            },
        };
        // act
        const streetNo = (0, index_1.getPersonStreetNo)(p);
        // assert
        assert_1.default.strictEqual(streetNo, 23);
        assert_1.default.strictEqual(p.name, "Marcus");
    });
    //-----------------------Classes-----------------------------------------------------
    it("using classes", () => {
        // arrange
        const p = new index_1.PersonClass("Tas", 1972);
        const e = new index_1.EmployeeClass("Tas Student", 1991);
        // act
        e.employeeId = 12345;
        // assert
        //assert.strictEqual(p.name, "Tas"); // breaks with Property 'name' is private and only accessible within class 'PersonClass'
        assert_1.default.strictEqual(p.getName(), "Tas");
        assert_1.default.strictEqual(e.getName(), "Tas Student");
        assert_1.default.strictEqual(e.employeeId, 12345);
    });
    //----------------Interfaces--------------------------------------------------
    it("prints an IPerson", () => {
        // arrange
        const p1 = { name: "Marcus", birthYear: 1972 };
        const p2 = { name: "David", birthYear: 1975, drummer: true };
        // act
        const p1Address = (0, index_1.getPersonNameString)(p1);
        const p2Address = (0, index_1.getPersonNameString)(p2);
        // assert
        assert_1.default.strictEqual(p1Address, "Marcus, 1972");
        assert_1.default.strictEqual(p2Address, "David, 1975");
    });
});

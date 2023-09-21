import { quickSort } from "./ejercicio1.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("quickSort", function () {
    const arrayEjemplo:number[]=[6,8,2,18,3,1];
    assertEquals(quickSort(arrayEjemplo), [1,2,3,6,8,18]);
});
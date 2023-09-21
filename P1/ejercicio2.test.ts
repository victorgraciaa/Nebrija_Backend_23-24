import { multiplos_3_5 } from "./ejercicio2.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("multiplos_3_5", function () {
    assertEquals(multiplos_3_5(10), [0,3,5,6,9,10]);
}
);
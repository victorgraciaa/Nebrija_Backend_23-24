import { arr_alfabeto } from "./ejercicio3.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("arr_alfabeto", function () {
    assertEquals(arr_alfabeto(["avion", "zapato", "mano", "baul"]), "a v i o n");
}
);

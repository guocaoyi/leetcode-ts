import * as asserts from "https://deno.land/std@0.125.0/testing/asserts.ts";
import { cartesian, multi_cartesian } from "./cartesian.ts";

Deno.test("renders props.msg when passed", () => {
  const msg = "new message";
  const wrapper = shallowMount(HelloWorld, {
    props: { msg },
  });
  expect(wrapper.text()).toMatch(msg);
});

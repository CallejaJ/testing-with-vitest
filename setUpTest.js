import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";

/* Giving access to the matchers 
It will be automatically executed before running your tests */

expect.extend(matchers);

afterEach(() => {
    cleanup();
});

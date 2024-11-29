import { describe, expect, it } from 'vitest'
import { name } from '../src/index'

describe("test", () => {
    it("exported", () => {
        expect(true).toBe(true)
        console.log(name);
    })
})
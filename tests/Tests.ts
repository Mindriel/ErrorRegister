/// <reference path="../typings/index.d.ts" />

import { expect } from 'chai';
import ErrorRegister from '../src/ErrorRegister';

describe('Babel-less tests', function() {
    it('t1', function() {
        expect(1).to.equal(0);
    });
});

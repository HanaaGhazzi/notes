'use strict'

const Add = require('../lib/input.js');
const minimist = require('minimist');

jest.mock('minimist');
minimist.mockImplementation(() => {
    return {
      add: "my note",
    };
});

describe('Input Module', () => {

  describe('getAction()', () => {
    it('asks to enter a valid action if no action was entered', () => {
      const message = new Add();
      expect(message.getAction()).toEqual('Enter a valid action');
    });
    it('asks to enter a valid action if an invalid action was entered', () => {
      const message = new Add();
      expect(message.getAction('delete')).toEqual('Enter a valid action');
    });
  it('getAction() i can see the Note and the Action', () => {
    const message = new Add();
    expect(message.getAction(message.action)).toEqual(message.action);

  })

});

describe('getPayload()', () => {
  it('return undefined when input is not specified', () => {
    const message = new Add();
    expect(message.getPayload()).toEqual(undefined);
  });
  it('returns string when string is specified', () => {
    const message = new Add();
    expect(message.getPayload(message.payload)).toEqual(message.payload);
  });
});

describe('valid()', () => {
  it('respects a proper object', () => {
    const message = new Add();
    expect(message.valid()).toBeTruthy();
  });
  it('reject invalid object', () => {
    const message = new Add();
    message.payload = undefined;
    message.action = 'Enter a valid action';
    expect(message.valid()).toBeFalsy();
  });
})
})


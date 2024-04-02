let currentCallback = null;

export const 구독 = (callback) => {
  currentCallback = callback;
  callback();
  currentCallback = null;
};

let a = 10;

const state = {};
export const 발행기관 = (obj) => {
  const stateKeys = Object.keys(obj);

  for (const key of stateKeys) {
    let _value = obj[key];
    const observers = new Set();
    Object.defineProperty(state, key, {
      get() {
        if (currentCallback) observers.add(currentCallback);
        console.log(`현재 state.${key}의 값은 ${_value} 입니다.`);
        return _value;
      },
      set(value) {
        _value = value;
        console.log(`변경된 state.${key}의 값은 ${_value} 입니다.`);
        observers.forEach((fn) => fn());
      },
    });
  }

  return state;
};

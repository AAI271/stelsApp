const eventEmitter = {
  _events: {},
  dispatch(event?: any, data?: any) {
    if (!this._events[event]) return;
    console.log(this._events,event,data)
    this._events[event].forEach((callback) => callback(data));
  },
  subscribe(event, callback) {
    if (!this._events[event]) this._events[event] = [];
    this._events[event].push(callback);
  },
  unsubscribe(event) {
    if (!this._events[event]) return;
    delete this._events[event];
  },
};

export default eventEmitter;

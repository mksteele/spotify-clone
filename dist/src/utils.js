"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.streamFromBuffer = exports.generateUniqueId = void 0;
const stream_1 = require("stream");
const uuidv4_1 = require("uuidv4");
function generateUniqueId() {
    return uuidv4_1.uuid().replace(/-/g, "");
}
exports.generateUniqueId = generateUniqueId;
function streamFromBuffer(buffer) {
    const stream = new stream_1.Readable();
    // tslint:disable-next-line: no-empty
    stream._read = () => { }; // _read is required but you can noop it
    stream.push(buffer);
    stream.push(null);
    return stream;
}
exports.streamFromBuffer = streamFromBuffer;
//# sourceMappingURL=utils.js.map
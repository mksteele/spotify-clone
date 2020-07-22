"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUniqueId = void 0;
const uuidv4_1 = require("uuidv4");
function generateUniqueId() {
    return uuidv4_1.uuid().replace(/-/g, "");
}
exports.generateUniqueId = generateUniqueId;
//# sourceMappingURL=utils.js.map
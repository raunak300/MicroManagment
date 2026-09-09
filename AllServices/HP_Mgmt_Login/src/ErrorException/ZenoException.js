class ZenoException extends Error {
    constructor(message) {
        super(message);
        this.name = "ZenoException";
    }
}

module.exports = ZenoException;
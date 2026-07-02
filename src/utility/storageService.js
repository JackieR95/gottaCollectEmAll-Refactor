export class StorageService{
    storageKey;
    rawStringData;

    constructor(keyName) {
        this.storageKey = keyName;
        this.rawStringData = "";
    }

    convertToString(data) {
        this.rawStringData = JSON.stringify(data);
        return this.rawStringData;
    }

    saveAll() {
        localStorage.setItem(this.storageKey, this.rawStringData);
    }

    loadAll() {
        const diskData = localStorage.getItem(this.storageKey) || "{}";
        return JSON.parse(diskData);
    }
}
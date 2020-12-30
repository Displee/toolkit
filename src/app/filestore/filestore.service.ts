import { Injectable } from '@angular/core';
import { NewFormatGameCache } from '@runejs/cache-parser';
import { FileIndex, Filestore } from '@runejs/filestore';

@Injectable({
    providedIn: 'root'
})
export class FilestoreService {

    public test: string;
    private _filestoreLoaded = false;
    private _cache: NewFormatGameCache;
    public filestore: Filestore;
    public indexes: FileIndex[] = [];

    public constructor() {
    }

    public getIndex(indexId: number | string): FileIndex {
        let index = this.indexes.find(i => i.indexId === indexId) || null;

        if(!index) {
            index = this.filestore.getIndex(parseInt(`${indexId}`, 10));
            this.indexes.push(index);
        }

        return index;
    }

    public reset(): void {
        this._filestoreLoaded = false;
        this._cache = null;
    }

    public loadFilestore(path: string): void {
        this.filestore = new Filestore(path);
        this._cache = new NewFormatGameCache(path);
        this._filestoreLoaded = true;
    }

    public get filestoreLoaded() {
        return this._filestoreLoaded;
    }

    public get cache(): NewFormatGameCache {
        return this._cache;
    }
}

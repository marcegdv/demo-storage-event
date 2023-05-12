import { useState, useEffect, useCallback } from 'react';

export const useStorageState = (type: 'local' | 'session') => {

    const [update, setUpdate] = useState<boolean>(false);

    const updateState = (): void => setUpdate(p => !p);

    const storage = type === 'local' ? window.localStorage : window.sessionStorage;

    const set = (key: string, value: any): void => {
        const exists: string | null = storage.getItem(key);
        const toSave: string = JSON.stringify(value);
        if (exists && (toSave === exists)) return;
        storage.setItem(key, toSave);
        updateState();
    };

    const get = (key: string): any => {
        try {
            return JSON.parse(storage.getItem(key) || JSON.stringify(''));
        } catch (error: any) {
            return null;
        };
    };
    const remove = (key: string): void => { storage.removeItem(key); updateState(); };

    const length = (): number => storage.length;

    const clear = (): void => { storage.clear(); updateState(); };

    const all = (): any => {
        const list: any = {};
        for (let index = 0; index < storage.length; index++) {
            let key: string = storage.key(index) || '';
            if (key) list[key] = storage.getItem(key);
        };
        return list;
    };
    
    const keys = (): string[] => {
        const list: string[] = [];
        for (let index = 0; index < storage.length; index++) {
            let key: string = storage.key(index) || '';
            if (key) list.push(key);
        };
        return list;
    };

    const handleStorage = useCallback((event: StorageEvent) => {
        console.log('StorageEvent:', event);  //The change done in other page
        updateState();
    }, []);

    useEffect(() => {
        if (type === 'local') window.onstorage = handleStorage;
        return () => {
            if (type === 'local') window.onstorage = null;
        };
    }, [handleStorage, type]);

    return { set, get, remove, length, clear, all, keys, update, setUpdate };
};
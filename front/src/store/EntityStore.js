import { makeAutoObservable } from "mobx";

export default class EntityStore {
    constructor() {
        this._types = [
            { id: 1, name: '������' },
            { id: 2, name: '�����' },
            { id: 3, name: '��������' },
        ]
        this._positions = [
            { id: 1, name: '��' },
            { id: 2, name: '��' },
            { id: 3, name: '���' },
        ]
        this._entities = [
            { id: 1, name: '����� ���������' },
            { id: 2, name: '����� ���������' },
            { id: 3, name: '����� ���������' },
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(positions) {
        this._positions = positions
    }
    setDevices(entities) {
        this._entities = entities
    }

    get types() {
        return this._types
    }
    get positions() {
        return this._positions
    }
    get entities() {
        return this._entities
    }
}
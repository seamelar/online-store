import { makeAutoObservable } from "mobx";

export default class EntityStore {
    constructor() {
        this._types = [
            { id: 1, name: 'Тренер' },
            { id: 2, name: 'Игрок' },
            { id: 3, name: 'Менеджер' },
        ]
        this._positions = [
            { id: 1, name: 'ЦП' },
            { id: 2, name: 'ВР' },
            { id: 3, name: 'АПЗ' },
        ]
        this._entities = [
            { id: 1, name: 'Борис Добродеев' },
            { id: 2, name: 'Борис Добродеев' },
            { id: 3, name: 'Борис Добродеев' },
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
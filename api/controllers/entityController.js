const uuid = require('uuid')
const { Entity } = require('../models/models')
const path = require('path');
const ApiError = require('../error/ApiError');

class EntityController {
    async create(req, res, next) {
        try {
            let { name, price, positionId, typeId, info } = req.body
            const { img } = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const entity = await Entity.create({ name, price, positionId, typeId, img: fileName });

            return res.json(entity)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let { positionId, typeId, limit, page } = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        
        let entities;
        if (!positionId && !typeId) {
            entities = await Entity.findAndCountAll({ limit, offset })
        }
        if (positionId && !typeId) {
            entities = await Entity.findAndCountAll({ where: { positionId }, limit, offset })
        }
        if (!positionId && typeId) {
            entities = await Entity.findAndCountAll({ where: { typeId }, limit, offset })
        }
        if (positionId && typeId) {
            entities = await Entity.findAndCountAll({ where: { typeId, positionId }, limit, offset })
        }
        return res.json(entities)
    }

    async getOne(req, res) {

    }
}

module.exports = new EntityController()
let counter = 1;

const controller  = {

    findByParam(model, id) {
        return {...id};
    },

    findOne(data){
        return data;
    },

    findAll(model){
        return [];
    },

    createOne (model, body){
        return {id : counter++, ...body};
    },

    updateOne(model, body){
        return {...body};
    },

    deleteOne(model, id){
        return id;
    }
};

const findAll = (model) => (req, res, next) => {
    return res.json(controller.findAll(model));
}

const findOne = (model) => (req, res, next) => {
    return res.status(200).json(controller.findOne(req.fromById));
}

const createOne = (model) => (req, res, next) => {
    return res.status(201).json(controller.createOne(model, req.body));
}

const updateOne = () => (req, res, next) => {
    return res.status(200).json(controller.updateOne(req.fromById, req.body));
}

const deleteOne = (model) => (req, res, next) => {
    return res.status(200).json(controller.deleteOne(model, req.params));
}

const findById = (model) => (req, res, next) => {
    req.fromById  = controller.findByParam(model, req.params);
    return next();
}



export const extendController = (model, overrides) => {
    const base = {
        findAll : findAll(model),
        findOne : findOne(model),
        findById: findById(model),
        createOne: createOne(model),
        updateOne: updateOne(model),
        deleteOne: deleteOne(model),
    }

    return {...base, ...overrides};
}
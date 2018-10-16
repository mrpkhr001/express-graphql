let counter = 1;

const controller  = {

    findByParam(model, id) {
        return {id};
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

export default  controller;
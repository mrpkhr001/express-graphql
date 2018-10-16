import crudController from './crud.controller';

describe("CrudController ", () => {

    test('findByParam should return object that has same id', () => {
        expect(crudController.findByParam(null, 1).id).toBe(1);
    })


})
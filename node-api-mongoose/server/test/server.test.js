const expect = require('expect');
const supertest = require('supertest');

const {app} = require('./../../server');
const {Todo} = require('./../models/todo-model');
// const {User} = require('./../models/user-model');

beforeEach((done) => {
    Todo.remove({}).then(() => done());
})
describe('POST/todos' , () => {
    it('should create a new todo' , (done) => {
        var text = 'Test Data';
        request(app).post('/todos')
                    .send({text})
                    .expect(200)
                    .expect((res) => {
                        expect(res.body.text).toBe(text);
                    })
                    .end((err, res) => {
                        if(err){
                            return done(err);
                        }
                        Todo.find().then((docs) => {
                            expect(docs.length).toBe(1);
                            expect(docs[0].text).toBe(text);
                            done();
                        }).catch((err) => done(err));
                    });
    });
});
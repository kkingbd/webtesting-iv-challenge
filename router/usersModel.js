const knex = require('knex');
const knexConfig = require('../knexfile.js')

const db = knex(knexConfig.development);

module.exports ={
    find, findById, add, update, remove,
}
function find(){ 
    return db('users')
}
function findById(id){
    return db('users').where({id}).first();
}
function add(user){
    return db('users').insert(user).into('users');
}
function update(id, update){
    return db('users').where({id}).update(update);
}
function remove(id){
    return db('users').where({id}).del();
}
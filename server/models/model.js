import knexLib from "knex";
import knexConfig from "../knexfile.js";
import dotenv from "dotenv";

dotenv.config();
const environment = process.env.NODE_ENV || "development";
const knex = knexLib(knexConfig[environment]);


export const Concerts = {
  list: () => knex("concerts").select("*").orderBy("date", "asc"),
  create: (data) => knex("concerts").insert(data).returning("*"),
  update: (id, data) => knex("concerts").where({ id }).update(data).returning("*"),
  remove: (id) => knex("concerts").where({ id }).del(),
};


export const Tickets = {
    list: () => knex("tickets").select("*"),
    create: (data) => knex("tickets").insert(data).returning("*"),
    update: (id, data) => knex("tickets").where({ id }).update(data).returning("*"),
    remove: (id) => knex("tickets").where({ id }).del(),
    findById: (id) => knex("tickets").where({ id }).first(),
};

export const Admins = {
    findByUsername: (username) => knex("admins").where({ username }).first(),
};



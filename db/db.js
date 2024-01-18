import * as SQLite from "expo-sqlite";

export const dbOracle = SQLite.openDatabase('oracledatabaseone.db')
export const dbSomi = SQLite.openDatabase('somidatabaseone.db')
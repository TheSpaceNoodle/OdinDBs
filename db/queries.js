import pool from "./pool.cjs";

export const getAllUsernames = async () => {
  const { rows } = await pool.query("SELECT * FROM usernames");

  return rows;
};

export const postUsername = async (username) => {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
};

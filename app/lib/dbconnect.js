import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "iodize13.com", 
  user: "toom", 
  password: "7j79vgbqy7amcywwwabgneg2tvij4sq", 
  database: "my_database", 
  port: 3306 
});

export default pool;

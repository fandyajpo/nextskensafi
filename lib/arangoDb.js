const { Database, aql } = require("arangojs");

const getConnection = () => {
  return new Database({
    url: "http://127.0.0.1:8529",
    databaseName: "skensaDB",
    auth: { username: "skensa", password: "metaldragon" },
  });
};

const getCollection = async (cName, db) => {
  const collections = await db.collections();

  if (collections.find((c) => c._name === cName)) {
    return await db.collection(cName);
  } else {
    return db.createCollection(cName);
  }
};

export const findUserKey = async (uid) => {
  const db = getConnection();

  await getCollection("follow", db);
  let result = [];

  const resx = await db.query(aql`
    FOR u IN user
      FILTER u._key == ${uid}
    RETURN u
  `);

  for await (let config of resx) {
    result.push(config);
  }

  return result;
};

export const findUsername = async (uid) => {
  const db = getConnection();

  await getCollection("follow", db);
  let result = [];

  const resx = await db.query(aql`
    FOR u IN user
      FILTER u.username == ${uid}
    RETURN u
  `);

  for await (let config of resx) {
    result.push(config);
  }

  return result;
};

export const listUser = async (offset, limit) => {
  const db = getConnection();

  const off = Number.isNaN(offset) ? 0 : offset;
  const lim = Number.isNaN(limit) ? 5 : limit;

  await getCollection("global", db);

  let result = [];

  const resx = await db.query(aql`
    LET total = ( FOR u IN user
                    COLLECT WITH COUNT INTO length
                  RETURN length
                )
    LET user = ( FOR u IN user
                    SORT u.created DESC
                        LIMIT TO_NUMBER(${off}), TO_NUMBER(${lim})
                  LET user = ( return UNSET( u, "_id", "_rev", "mood_privtoken", "mood_token", "password" ))
                  LET kelas = ( FOR k IN global
                                  FILTER k._key == u.kelas
                                    FILTER k.type == "kelas"
                                RETURN k
                  )
                  LET jurusan = ( FOR k IN global
                                  FILTER k._key == u.jurusan
                                    FILTER k.type == "jurusan"
                                RETURN k
                  )
                  RETURN {user, kelas, jurusan}
                )
    RETURN { total, user }
  `);

  for await (let config of resx) {
    result.push(config);
  }

  return result;
};

export const listJurusan = async (offset, limit) => {
  const db = getConnection();

  const off = Number.isNaN(offset) ? 0 : offset;
  const lim = Number.isNaN(limit) ? 5 : limit;

  await getCollection("global", db);

  let result = [];

  const resx = await db.query(aql`
    LET total = ( FOR u IN global
                  FILTER u.type == "jurusan"
                    COLLECT WITH COUNT INTO length
                  RETURN length
                )
    LET jurusan = ( FOR u IN global
                    SORT u.created DESC
                      FILTER u.type == "jurusan"
                        LIMIT TO_NUMBER(${off}), TO_NUMBER(${lim})
                  LET kelas = ( return UNSET( u, "_id", "_rev" ))
                  RETURN kelas
                )
    RETURN { total, jurusan }
  `);

  for await (let config of resx) {
    result.push(config);
  }

  return result;
};

export const listKelas = async (offset, limit) => {
  const db = getConnection();

  const off = Number.isNaN(offset) ? 0 : offset;
  const lim = Number.isNaN(limit) ? 5 : limit;

  await getCollection("global", db);

  let result = [];

  const resx = await db.query(aql`
    LET total = ( FOR u IN global
                  FILTER u.type == "kelas"
                    COLLECT WITH COUNT INTO length
                  RETURN length
                )
    LET kelas = ( FOR u IN global
                    SORT u.created DESC
                      FILTER u.type == "kelas"
                        LIMIT TO_NUMBER(${off}), TO_NUMBER(${lim})
                  LET kelas = ( return UNSET( u, "_id", "_rev" ))
                  RETURN kelas
                )
    RETURN { total, kelas }
  `);

  for await (let config of resx) {
    result.push(config);
  }

  return result;
};

export const listTahunAjaran = async (offset, limit) => {
  const db = getConnection();

  const off = Number.isNaN(offset) ? 0 : offset;
  const lim = Number.isNaN(limit) ? 5 : limit;

  await getCollection("global", db);

  let result = [];

  const resx = await db.query(aql`
    LET total = ( FOR u IN global
                  FILTER u.type == "tahun_ajaran"
                    COLLECT WITH COUNT INTO length
                  RETURN length
                )
    LET tahunAjaran = ( FOR u IN global
                    SORT u.created DESC
                      FILTER u.type == "tahun_ajaran"
                        LIMIT TO_NUMBER(${off}), TO_NUMBER(${lim})
                  LET tahunAjaran = ( return UNSET( u, "_id", "_rev" ))
                  RETURN tahunAjaran
                )
    RETURN { total, tahunAjaran }
  `);

  for await (let config of resx) {
    result.push(config);
  }

  return result;
};

export const listRole = async (offset, limit) => {
  const db = getConnection();

  const off = Number.isNaN(offset) ? 0 : offset;
  const lim = Number.isNaN(limit) ? 5 : limit;

  await getCollection("global", db);

  let result = [];

  const resx = await db.query(aql`
    LET total = ( FOR u IN global
                  FILTER u.type == "role"
                    COLLECT WITH COUNT INTO length
                  RETURN length
                )
    LET role = ( FOR u IN global
                    SORT u.created DESC
                      FILTER u.type == "role"
                        LIMIT TO_NUMBER(${off}), TO_NUMBER(${lim})
                  LET role = ( return UNSET( u, "_id", "_rev" ))
                  RETURN role
                )
    RETURN { total, role }
  `);

  for await (let config of resx) {
    result.push(config);
  }

  return result;
};

export const listPengumuman = async (offset, limit) => {
  const db = getConnection();

  const off = Number.isNaN(offset) ? 0 : offset;
  const lim = Number.isNaN(limit) ? 5 : limit;

  await getCollection("pengumuman", db);

  let result = [];

  const resx = await db.query(aql`
    LET total = ( FOR u IN pengumuman
                    COLLECT WITH COUNT INTO length
                  RETURN length
                )
    LET pengumuman = ( FOR u IN pengumuman
                    SORT u.created DESC
                        LIMIT TO_NUMBER(${off}), TO_NUMBER(${lim})
                  LET pengumuman = ( return UNSET( u, "_id", "_rev" ))
                  RETURN pengumuman
                )
    RETURN { total, pengumuman }
  `);

  for await (let config of resx) {
    result.push(config);
  }

  return result;
};

export const avrgUser = async () => {
  const db = getConnection();

  await getCollection("user", db);

  let result = [];

  const resx = await db.query(aql`
    FOR u IN user
        FILTER u.role == "murid"
            COLLECT kelas = u.kelas, jurusan = u.jurusan WITH COUNT INTO length
        LET kelass = ( FOR k IN global FILTER k._key == kelas RETURN k.nama )
        LET jurusans = ( FOR k IN global FILTER k._key == jurusan RETURN k.nama )
      RETURN {
        "kelas": kelass[0],
        "jurusan": jurusans[0],
        "count" : length
      }
  `);

  for await (let config of resx) {
    result.push(config);
  }

  return result;
};

export const cntTypeUser = async () => {
  const db = getConnection();

  await getCollection("user", db);

  let result = [];

  const resx = await db.query(aql`
    FOR u IN user
      COLLECT role = u.role WITH COUNT INTO length
    RETURN { role, length }
  `);

  for await (let config of resx) {
    result.push(config);
  }

  return result;
};

/**
 * Mock database, replace this with your db models import, required to perform query to your database.
 */
const db = {
  users: [
    {
      id: "bff28903-042e-47c2-b9ee-07c3954989ec",
      name: "Marco",
      created_at: 1558536830937,
    },
    {
      id: "dca01a32-36e6-4886-af75-8e7caa0162a9",
      name: "Leonardo",
      created_at: 1558536843742,
    },
    {
      id: "dca01a32-36e6-4886-af75-8e7caa0162a9",
      name: "Berta",
      created_at: 1558536863550,
    },
  ],
};

const create = (name: string) => {
  const id = "dca01a32-36e6-4886-af75-8e7caa0161a9";
  const newUser = {
    id,
    name,
    created_at: Date.now(),
  };
  db.users.push(newUser);
  const createdUser = db.users.find((user) => user.id === id);
  return createdUser;
};

const findOne = (userId: string) => {
  const user = db.users.find((user) => user.id === userId);
  return user;
};

const findAll = () => {
  return db.users;
};

const update = (userId: string, updatedData: Promise<unknown>) => {
  const updatedUser = db.users.map((u) => {
    return u.id === userId ? { ...u, ...updatedData } : u;
  });
  return updatedUser;
};

const remove = (userId: string) => {
  const allUsers = db.users.filter((u) => u.id === userId);
  return allUsers;
};

export default {
  create,
  findOne,
  findAll,
  update,
  remove,
};

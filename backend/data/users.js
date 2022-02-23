import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Harish Saud',
    email: 'harish@gmail.com',
    password: bcrypt.hashSync('Soft@1234', 10),
  },
]

export default users

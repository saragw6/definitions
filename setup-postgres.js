function createUser (user, pass) {
    const doesUserExist = `SELECT 'exists' FROM pg_roles WHERE rolname='${user}'`;
  
    if (exec(psql(doesUserExist)) !== 'exists') {
      console.log(`Creating user ${user}...`);
      console.log(exec(psql(`CREATE USER ${user} WITH PASSWORD '${pass}'`)));
    } else {
      console.log(`user exists ${user}`)
    }
  }

const docker_prequery = 'docker exec pg-docker'
const psql = query  => `${docker_prequery} psql -h localhost -p 5432 -U postgres -d postgres -tAc "${query}"`


import Authentication from './service/user/auth';

console.log('development mode');

(async () => {
  const auth: Authentication = new Authentication();
  console.log(auth.db);
  // const db: Database = new Database();
  // console.log(db, databasePath);
  // console.log(
  //   db.AddBookmark({
  //     id: 'aa',
  //     url: 'bb',
  //     title: 'cc',
  //   })
  // );
  // console.log(db.Save());
})();

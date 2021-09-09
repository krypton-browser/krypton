import { Database, databasePath } from './service/user/data';

console.log('development mode');

(async () => {
  const db: Database = new Database();
  console.log(db, databasePath);
  console.log(
    db.AddBookmark({
      id: 'aa',
      url: 'bb',
      title: 'cc',
    })
  );
  console.log(db.Save());
})();

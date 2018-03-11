import { Injectable } from "@angular/core";
import { Platform } from "ionic-angular";
import { Storage } from "@ionic/storage";
import { File } from '@ionic-native/file';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { DBProvider } from "./DBProvider";

const SQL_PATH = "www/assets/sql";

/**
 * The provider class used to provide api for native SQLite.
 *
 */
@Injectable()
export class SqliteDBProvider extends DBProvider {

  constructor(public platform: Platform, public storage: Storage, public file: File, public sqlitePorter: SQLitePorter) {
    super(platform, storage)
  }

  openDatabase() {
    let db = this.window.sqlitePlugin.openDatabase({
      name: this.dbName,
      location: 'default'
    });
    return db;
  }

  upgradeDatabase(version, db) {
    this.file.readAsText(this.file.applicationDirectory + SQL_PATH, version + '.sql').then((sqlText) => {
      this.sqlitePorter.importSqlToDb(db, sqlText)
        .then(() => {console.log('Imported'); this.storage.set("dbVersion", version);})
        .catch(e => console.error(e));
    });
  }

  parseData(data) {
    let result = [];
    for (let i = 0; i < data.res.rows.length; i++) {
      let row = data.res.rows.item(i);
      result.push(row);
    }
    return result;
  }
}

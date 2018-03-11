import { Injectable } from "@angular/core";

import {SQLStatement} from "../../../constant/SQLStatement"
import { DBProvider } from "./DBProvider"

/**
 * The provider class used to provide api for WebSQL.
 *
 */
@Injectable()
export class WebsqlDBProvider extends DBProvider {

  openDatabase() {
    let db = this.window.openDatabase(this.dbName, '1.0', 'database', 100 * 1024 * 1024);
    return db;
  }

  upgradeDatabase(version, db) {
    let sqlText = SQLStatement.sqlStatementList[version - 1];
    let sqlArray = sqlText.split("\r\n")
    this.transactionQuery(sqlArray)
      .then(() => {console.log('Imported'); this.storage.set("dbVersion", version);})
      .catch(e => {
        console.error(e)
      });
  }

  parseData(data) {
    let result = [];
    for (let i = 0; i < data.res.rows.length; i++) {
      let row = data.res.rows[i];
      result.push(row);
    }
    return result;
  }
}

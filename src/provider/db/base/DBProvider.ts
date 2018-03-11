import { Injectable } from '@angular/core';
import { Platform } from "ionic-angular";
import { Storage } from "@ionic/storage";

const DB_NAME: string = "mydb";
const DB_VERSION: number = 1;
const win: any = window;

/**
 * The Base provider class used to provide common data api.
 *
 */
@Injectable()
export class DBProvider {

  private dbPromise: Promise<any>;

  dbName = DB_NAME;
  window = win;

  constructor(public platform: Platform, public storage: Storage) {

    this.dbPromise = new Promise((resolve, reject) => {
      try {
        let db: any;
        this.platform.ready().then(() => {
          db = this.openDatabase();

          resolve(db);
        });
      } catch (err) {
        reject({ err: err});
      }
    });
    this.tryInit();
  }

  tryInit() {
    this.storage.get("dbVersion").then((value) => {
      let originalDBVersion = (value == null ? 0 : value);
      for (let i = originalDBVersion + 1; i <= DB_VERSION; i++) {
        this.dbPromise.then((db) => {
          this.upgradeDatabase(i, db);
        });
      }
    });
  }

  openDatabase() {

  }

  upgradeDatabase(version, db) {

  }

  parseData(data) {

  }

  /*
   * Get record and parse the result as json
   */
  get(sql: string, params: any[] = []): Promise<any> {
    return this.query(sql, params).then((data) => {
      let result = this.parseData(data);
      return result;
    }).catch(() => {
      return [];
    });
  }

  /*
   * Insert reacord and return the id
   */
  insert(sql: string, params: any[] = []): Promise<number> {
    return this.query(sql, params).then((data) => {
      let result = parseInt(data);
      return result;
    }).catch(() => {
      return 0;
    });
  }

  /*
   * Insert / Update / Delete record
   */
  query(sql: string, params: any[] = []): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        this.dbPromise.then((db) => {
          db.transaction((tx) => {
            tx.executeSql(sql, params,
              (tx, res) => resolve({tx: tx, res: res}),
              (tx, err) => {
                console.error(err);
                reject({tx: tx, err: err});
              }
            );
          });
        });
      } catch(err) {
        console.error(err);
        reject({err: err});
      }
    });
  }

  /*
   * batch Insert / Update / Delete record
   */
  transactionQuery(sqls: string[], params: any[][] = [[]]): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        this.dbPromise.then((db) => {
          db.transaction((tx) => {
            for (let i = 0; i < sqls.length; i++) {
              tx.executeSql(sqls[i], params[i],
                (tx, res) => resolve({tx: tx, res: res}),
                (tx, err) => {
                  console.error(err);
                  reject({tx: tx, err: err});
                }
              );
            }
          });
        });
      } catch(err) {
        console.error(err);
        reject({err: err});
      }
    });
  }
}

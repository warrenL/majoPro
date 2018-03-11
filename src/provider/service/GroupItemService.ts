import { Injectable } from '@angular/core';
import { GlobalProvider } from '../GlobalProvider';
import { GroupItemRepoProvider } from '../db/GroupItemRepoProvider';
import { GroupItemHttpProvider } from '../http/GroupItemHttpProvider';

/**
 * The example class used to provide service api for group.
 *
 */
@Injectable()
export class GroupItemService {

  constructor(public globalProvider: GlobalProvider, public groupItemHttpProvider: GroupItemHttpProvider,
    public groupItemRepoProvider: GroupItemRepoProvider) {
  }

  getGroupItems(userId: string): Promise<any> {
    if (navigator.onLine) {
      return this.groupItemHttpProvider.getGroupItems(userId).then((value) => {
        // Save to local
        return value;
      }).catch((value) => {
        return this.groupItemRepoProvider.getGroupItems(userId).then((value) => {
          return value;
        });
      });
    } else {
      return this.groupItemRepoProvider.getGroupItems(userId).then((value) => {
        return value;
      });
    }
  }

}

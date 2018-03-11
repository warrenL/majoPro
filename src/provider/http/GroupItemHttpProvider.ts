import { Injectable } from '@angular/core';

import { GroupItem } from "../../model/GroupItem"

import { HttpProvider } from "./base/HttpProvider";

/**
 * The example provider class used to provide http api for group.
 *
 */
@Injectable()
export class GroupItemHttpProvider {
    constructor(private httpProvider: HttpProvider) { }

    getGroupItems(userId: string): Promise<GroupItem> {
      let url = "/groupItem/groupitems";
      let heads = {};
      let params = {};

      return this.httpProvider.httpGetWithAuth(url, heads, params).then((data) => {
        console.log("Response " + data);
        return data.map((value) => {return new GroupItem(value.id, value.serverId, value.groupServerId, value.name, value.startTime, value.endTime, value.groupDate)});
      })
    }

}

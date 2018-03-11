import { Injectable } from "@angular/core";

import { GroupItem } from "../../model/GroupItem"

import { DBProvider } from './base/DBProvider';

/**
 * The example provider class used to provide db api for group.
 *
 */
@Injectable()
export class GroupItemRepoProvider {
  constructor(public dbProvider: DBProvider) {

  }

  getGroupItems(teacherId: string): Promise<Array<GroupItem>>{
    return this.dbProvider.get("SELECT SectionItem.*, Section.name FROM SectionItem " +
      "LEFT JOIN Section ON SectionItem.sectionServerId = Section.serverId " +
      "INNER JOIN TeacherSection ON TeacherSection.sectionServerId = Section.serverId AND teacherServerId = ?", [teacherId]).then((data) => {
      return data.map((value) => {return new GroupItem(value.id, value.serverId, value.groupServerId, value.name, value.startTime, value.endTime, value.groupDate)});
    });
  }

  getGroupItemCountByDay(teacherId: string): Promise<Array<{sectionDate: string, sectionItemCount: number}>>{
    return this.dbProvider.get("SELECT sectionDate, COUNT(*) AS sectionItemCount FROM SectionItem " +
      "INNER JOIN TeacherSection ON TeacherSection.sectionServerId = SectionItem.sectionServerId AND teacherServerId = ? GROUP BY SectionItem.sectionDate", [teacherId]).then((data) => {
      return data;
    });
  }
}

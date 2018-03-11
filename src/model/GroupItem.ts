export class GroupItem {
  id: number;
  serverId: number;
  sectionServerId: number;
  sectionName: string;
  startTime: string;
  endTime: string;
  sectionDate: string;

  constructor(id: number, serverId: number, sectionServerId: number, sectionName: string, startTime: string, endTime: string, sectionDate: string) {
    this.id = id;
    this.serverId = serverId;
    this.sectionServerId = sectionServerId;
    this.sectionName = sectionName;
    this.startTime = startTime;
    this.endTime = endTime;
    this.sectionDate = sectionDate;
  }
}

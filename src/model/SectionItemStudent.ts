export class SectionItemStudent {
  id: number;
  serverId: number;
  sectionItemServerId: number;
  studentServerId: number;
  studentName: string;
  status: string;

  constructor(id: number, serverId: number, sectionItemServerId: number,
    studentServerId: number, studentName: string, status: string) {
    this.id = id;
    this.serverId = serverId;
    this.sectionItemServerId = sectionItemServerId;
    this.studentServerId = studentServerId;
    this.studentName = studentName;
    this.status = status;
  }

  public static STATUS = {
    NORMAL: 'NORMAL',
    LATE: 'LATE',
    ABSENT: 'ABSENT',
    EARLY: 'EARLY',
    LEAVE: 'LEAVE'
  }
}

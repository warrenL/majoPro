/**
 * The class used to provide util functions to process date.
 *
 */
export class DateUtil {
  public static getFormattedDate(date) {
    return date.getFullYear() + "-" + this.appendZero(date.getMonth() + 1) + "-" + this.appendZero(date.getDate());
  }

  public static appendZero(value) {
    return  ((value < 10) ? "0" : "") + value;
  }

  public static plusDay(date, day) {
    let newDate = new Date(date.getTime());
    newDate.setDate(date.getDate() + day);
    return newDate;
  }
}

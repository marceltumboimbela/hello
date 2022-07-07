export default class PlayerEnvironment {
  static hostname(){
    return location.hostname;
  }

  static isMobileSite(){
    return !!this.hostname().match(/^(m|lite)\./);
  }

  static isLiteSite(){
    return !!this.hostname().match(/^lite\./);
  }
}
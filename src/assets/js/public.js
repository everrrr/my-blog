class common {
  constructor() {
    this.nowTime
    this.year
    this.month
    this.day
  }


  getnowTime() {
    this.nowTime = new Date() //获得当前日期对象
    this.year = this.nowTime.getFullYear() //获得当前所在年份
    this.month = this.nowTime.getMonth() + 1 //获得当前所在月份
    this.day = this.nowTime.getDate() //获得当天在当月中的日期号
    if (this.day < 10) {
      this.day = `0${this.day}`
    }
    if (this.month < 10) {
      this.month = `0${this.month}`
    }
  }

  getYearDate() { //获得日期，精确到年
    this.getnowTime()
    return this.year

  }

  getMonthDate() { //获得日期，精确到月
    this.getnowTime()
    return `${this.year}-${this.month}` //当日范围
  }

  getDayDate() { //获得日期，精确到日
    console.log(1)
    this.getnowTime()
    return `${this.year}-${this.month}-${this.day}` //当日范围
  }

}

export default common

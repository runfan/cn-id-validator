'use strict';
const moment = require('moment');
const data = require('./data.json');
const REGX18 = /(\d{6})(\d{8})(\d{3})([0-9x])/i;

class Validator {
    constructor(id) {
        this.id = id.toString().toUpperCase();
        if (this.id.length !== 18) {
            throw new Error('Invalid id length');
        }
    }
    valid() {
        const info = this.parse()
        if (!info) return false;
        const { date, year, month, day } = info.birthday;
        if (!date.isValid() ||
            date.year() !== parseInt(year) ||
            date.month() + 1 !== parseInt(month) ||
            date.date() !== parseInt(day)) {
            return false;
        }
        if (info.check !== this.check()) {
            return false
        }
        return {
            address: info.address,
            birthday: info.birthday.date.format('YYYY-MM-DD'),
            age: moment().diff(info.birthday.date, 'year'),
            gender: info.gender,
        }
    }
    getAddress(code) {
        if (data.hasOwnProperty(code)) {
            return data[code]
        }
        const match = Object.keys(data).filter(key => {
            return (code.substr(0, 2) + '0000' || code.substr(0, 4) + '00') === key;
        })
        if (match.length > 0) {
            return data[match[0]]
        } else {
            return '未知地址'
        }
    }
    weight(t) {
        return Math.pow(2, t - 1) % 11;
    }
    check() {
        //位置加权
        var posWeight = [];
        for (var i = 18; i > 1; i--) {
            var wei = this.weight(i);
            posWeight[i] = wei;
        }

        //累加body部分与位置加权的积
        var bodySum = 0;
        var bodyArr = this.id.substr(0, 17).split('');
        for (var j = 0; j < bodyArr.length; j++) {
            bodySum += (parseInt(bodyArr[j], 10) * posWeight[18 - j]);
        }

        //得出校验码
        var checkBit = 12 - (bodySum % 11);
        if (checkBit == 10) {
            checkBit = 'X';
        } else if (checkBit > 10) {
            checkBit = checkBit % 11;
        }
        return (typeof checkBit === 'number' ? checkBit.toString() : checkBit);
    }
    parse() {
        const matchs = this.id.match(REGX18);
        if (!matchs) return false;
        const addrCode = matchs[1];
        const address = this.getAddress(addrCode);
        const birth = {
            date: moment(matchs[2], 'YYYYMMDD'),
            year: matchs[2].substr(0, 4),
            month: matchs[2].substr(4, 2),
            day: matchs[2].substr(6),
        };
        const order = matchs[3];
        const gender = order % 2;
        return {
            address,
            birthday: birth,
            gender,
            check: matchs[4]
        }
    }
}

module.exports = Validator;
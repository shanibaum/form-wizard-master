import { Injectable } from '@angular/core';

@Injectable()
export class FormatService {
    get format(): FormatsInteface {
        return FormatService.format;
    }

    private static format: FormatsInteface = {
        timeMode: 24,
        timeFormat: 'HH:mm',
        dateFormat: 'DD/MM/YYYY',
        number: {
            decimalSeparator: '.',
            thousandSeparator: ','
        },
        roundNumber: false,
        reggie: /(((\d{4})-(\d{2})-(\d{2}))|((\d{2})-(\d{2})-(\d{4})))( (\d{2}):(\d{2}):(\d{2}))*/,
        dateParser: function (value: string): Date {
            const dateArray = this.reggie.exec(value);
            if (dateArray == null) {
                return;
            }
            const dateTimeArray: string[] = value.split(' ');
            const dateStr: string = dateTimeArray[0];
            const timeStr: string = dateTimeArray[1];
            const dateArr: any[] = dateStr.split('-');
            let timeArr: any[] = [null, null, null];
            if (typeof timeStr !== 'undefined') {
                timeArr = timeStr.split(':');
            }
            const fourDigitsRegex = /(\d{4})/;
            const twoDigitsRegex = /(\d{2})/;

            if (fourDigitsRegex.exec(dateArr[0])) {
                return new Date(dateArr[0], dateArr[1] - 1, dateArr[2], timeArr[0], timeArr[1], timeArr[2]);
            } else if (twoDigitsRegex.exec(dateArr[0])) {
                return new Date(dateArr[2], dateArr[1] - 1, dateArr[0], timeArr[0], timeArr[1], timeArr[2]);
            }
        },
        _parseDate: function (value: Date | string): Date | string {
            let dateObject = value;

            const isInvalidDate = (date: Date | string): boolean => {
                const _date = date.toString();
                return ((_date === 'Invalid Date') || (_date.indexOf('undefined') !== -1) || (_date.indexOf('NaN') !== -1));
            };

            if (typeof (value) === 'string') {
                try {
                    dateObject = this.dateParser(value);
                    if (isInvalidDate(dateObject)) {
                        dateObject = new Date(value);
                    }
                    if (isInvalidDate(dateObject)) {
                        dateObject = value;
                    }
                } catch (e) {
                    dateObject = value;
                }
            }
            return dateObject;
        }
    };
}

export interface FormatsInteface {
    timeMode: number;
    timeFormat: string;
    dateFormat: string;
    number: {
        decimalSeparator: string,
        thousandSeparator: string
    };
    roundNumber: boolean;
    reggie: RegExp;
    dateParser: Function;
    _parseDate: Function;
}

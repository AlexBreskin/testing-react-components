import moment from 'moment';
import {dateToSol, solToDate, firstDay, dateFormat, isActive} from './sols';

describe('isActive', ()=>{

    test.each([
        ['2010-1-1','2010-12-31', '2010-3-6'],
        ['2010-1-1','2010-12-31', '2010-6-28'],
        ['2010-1-1','2010-12-31', '2010-12-01'],
        ['2010-1-1','2010-12-31', '2010-12-31'],
        ['2010-1-1','2010-12-31', '2010-01-01'],
    ])('range %s-%s includes %s', (from, to, selected) => {
        expect(isActive(from, to, selected)).toBe(true);
    });

    test.each([
        ['2010-1-1','2010-12-31', '2009-12-31'],
        ['2010-1-1','2010-12-31', '2011-1-1'],
        ['2010-1-1','2010-12-31', '2111-12-01'],
        ['2010-1-1','2010-12-31', '1997-5-3']
    ])('range %s-%s includes %s', (from, to, selected) => {
        expect(isActive(from, to, selected)).toBe(false);
    });

});

describe('converting earth dates to sol', () => {
    it('should have first day as sol 1', ()=> {
        const sol = dateToSol(firstDay);
        expect(sol).toBe(1);
    });
    it('should have second day as sol 2', ()=> {
        const secondDay = moment(firstDay, dateFormat).add(1, 'days').format(dateFormat);
        const sol = dateToSol(secondDay);
        expect(sol).toBe(2);
    });
});

describe('converting sol to earth dates', () => {
    it('should have sol 1 as firstDay', ()=> {
        const day = solToDate(1);
        expect(day).toBe(firstDay);
    });
    it('should have sol 2 as second day', ()=> {
        const secondDay = moment(firstDay, dateFormat).add(1, 'days').format(dateFormat);
        const day = solToDate(2);
        expect(day).toBe(secondDay);
    });
});
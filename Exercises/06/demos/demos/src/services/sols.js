import moment from 'moment';

export const [firstDay, lastDay] = ["2004-01-05", "2019-09-28"];
export const dateFormat = "YYYY-MM-DD";

export const dateToSol = (date) => moment(date, dateFormat).diff(moment(firstDay, dateFormat), 'days') + 1;

export const solToDate = (sol) => moment(firstDay, dateFormat).add(sol - 1, 'days').format(dateFormat);

export const daysBetween = (startDate, lastDate) => 
    moment(lastDate, dateFormat).diff(moment(startDate, dateFormat), 'days') + 1;

export const isActive = (rangeStart, rangeEnd, selected) => {
    const fromMoment = moment(rangeStart, dateFormat);
    const toMoment = moment(rangeEnd, dateFormat);
    const selectedMoment = moment(selected, dateFormat);
    return selectedMoment >= fromMoment && selectedMoment <= toMoment;
};
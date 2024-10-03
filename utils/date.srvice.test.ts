import { getFormattedDate } from './date.service';

describe('getFormattedDate', () => {
    it('should format the date correctly for single-digit day and month', () => {
        const date = new Date(2023, 0, 5); // January 5, 2023
        const formattedDate = getFormattedDate(date);
        expect(formattedDate).toBe('5/1/2023');
    });

    it('should format the date correctly for double-digit day and month', () => {
        const date = new Date(2023, 10, 15); // November 15, 2023
        const formattedDate = getFormattedDate(date);
        expect(formattedDate).toBe('15/11/2023');
    });

    it('should format the date correctly for end of the year', () => {
        const date = new Date(2023, 11, 31); // December 31, 2023
        const formattedDate = getFormattedDate(date);
        expect(formattedDate).toBe('31/12/2023');
    });

    it('should format the date correctly for leap year', () => {
        const date = new Date(2024, 1, 29); // February 29, 2024
        const formattedDate = getFormattedDate(date);
        expect(formattedDate).toBe('29/2/2024');
    });
});
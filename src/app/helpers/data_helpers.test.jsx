import { calculateData } from './date_helpers';

const myData = '26.Apr.2018 23:24:06';

describe('calculate data', () => {
    test('calculate data and return in rigth format', () => {
        const result = calculateData(1524781446);
        expect(result).toEqual(myData);
    });
});

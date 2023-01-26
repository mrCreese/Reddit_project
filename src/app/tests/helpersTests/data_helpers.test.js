import { calculateData } from '../../helpers/date_helpers';

const myData = '1/1/2023, 15:10:57';

describe('calculate data', () => {
    test('calculate data and return in rigth format', () => {
        const result = calculateData(1672582257);
        expect(result).toEqual(myData);
    });
});

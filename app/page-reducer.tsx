export const fanSpeedInitial = {
    level: 0,
    status: 'OFF'
};
export const ROTATE_RIGHT_ACTION =
    { type: 'ROTATE_RIGHT' };
export const ROTATE_LEFT_ACTION =
    { type: 'ROTATE_LEFT' }
export function fanSpeedReducer(fanSpeed: any, action: any) {
    if (action.type == 'ROTATE_RIGHT') {
        if (fanSpeed.level == 0) {
            return { level: 1, status: 'SLOW' };
        }
        if (fanSpeed.level == 1) {
            return { level: 2, status: 'MEDIUM' };
        }
        if (fanSpeed.level == 2) {
            return { level: 3, status: 'FAST' };
        }
        return { level: 0, status: 'OFF' };

    }
    if (action.type == 'ROTATE_LEFT') {
        if (fanSpeed.level == 3) {
            return { level: 2, status: 'MEDIUM' };
        }
        if (fanSpeed.level == 2) {
            return { level: 1, status: 'SLOW' };
        }
        if (fanSpeed.level == 1) {
            return { level: 0, status: 'OFF' };
        }
        return { level: 3, status: 'FAST' };

    }
    throw new Error();
}
    
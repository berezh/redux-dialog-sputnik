function newActionType(prefix: string, type: string): string {
    return `@${prefix}/${type}`;
}

const prefix = '@dialog';

export const DialogActionTypes = {
    SHOW: newActionType(prefix, 'SHOW'),
    HIDE: newActionType(prefix, 'HIDE'),
};

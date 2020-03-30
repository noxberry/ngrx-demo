export interface Item {
    id: number;
    name: string;
    qnty: number;
};


export const defaultItem: Item = {
    id: 1,
    name: 'Coffee cup',
    qnty: 1
} as Item;
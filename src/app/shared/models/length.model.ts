export interface Length {
    value: number;
    type: LengthType;
    descriptor: string; // ie "yds/s"
}

export enum LengthType {
    inches,
    feet,
    yards
}

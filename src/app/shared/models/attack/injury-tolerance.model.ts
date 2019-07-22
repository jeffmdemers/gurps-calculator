// TODO consider extracting InjuryTolerance into an interface and having one concrete class for each type
export class InjuryTolerance {
  static readonly NONE = 'none';
  static readonly UNLIVING = 'unliving';
  static readonly HOMOGENOUS = 'homogenous';
  static readonly DIFFUSE = 'diffuse';

  private static readonly ALLOWED_VALUES = [
    InjuryTolerance.NONE,
    InjuryTolerance.UNLIVING,
    InjuryTolerance.HOMOGENOUS,
    InjuryTolerance.DIFFUSE,
  ];

  private readonly _name: string;

  constructor(name: string) {
    if (
      InjuryTolerance.ALLOWED_VALUES.find(value => value === name) === undefined
    ) {
      throw new Error(
        `Injury tolerance of type ${name} is not supported, supported types are: ${InjuryTolerance.ALLOWED_VALUES.join(
          ', '
        )}`
      );
    }

    this._name = name;
  }

  get name(): string {
    return this._name;
  }
}

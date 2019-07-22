// TODO consider extracting HitLocation into an interface and having one concrete class for each location
export class HitLocation {
  static readonly ARM = 'arm';
  static readonly HAND = 'hand';
  static readonly LEG = 'leg';
  static readonly FOOT = 'foot';
  static readonly EYE = 'eye';
  static readonly SKULL = 'skull';
  static readonly FACE = 'face';
  static readonly NECK = 'neck';
  static readonly VITALS = 'vitals';
  static readonly GROIN = 'groin';
  static readonly TORSO = 'torso';
  // TODO add exotic ones from MA, as well as for weapons

  private static readonly ALLOWED_VALUES = [
    HitLocation.ARM,
    HitLocation.HAND,
    HitLocation.LEG,
    HitLocation.FOOT,
    HitLocation.EYE,
    HitLocation.SKULL,
    HitLocation.FACE,
    HitLocation.NECK,
    HitLocation.VITALS,
    HitLocation.GROIN,
    HitLocation.TORSO,
  ];

  private readonly _name: string;

  constructor(name: string) {
    if (
      HitLocation.ALLOWED_VALUES.find(value => value === name) === undefined
    ) {
      throw new Error(
        `Hit location ${name} is not supported, supported locations are: ${HitLocation.ALLOWED_VALUES.join(
          ', '
        )}`
      );
    }

    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  get attackModifier(): number {
    switch (this._name) {
      case HitLocation.ARM:
      case HitLocation.LEG:
        return -2;
      case HitLocation.HAND:
      case HitLocation.FOOT:
        return -4;
      case HitLocation.EYE:
        return -9;
      case HitLocation.SKULL:
        return -7;
      case HitLocation.FACE:
      case HitLocation.NECK:
        return -5;
      case HitLocation.VITALS:
      case HitLocation.GROIN:
        return -3;
      default:
        return 0;
    }
  }
}
